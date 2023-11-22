import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import {useNavigate} from 'react-router-dom';

function Login () {
  

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(password);
  };
  
  const handleLogin = email =>{
    const requestInit = {
      method: "GET"
    };

    return fetch('/users/'+email,requestInit)
      .then(res => res.json())
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        return null; // Puedes manejar el error devolviendo un valor predeterminado
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    // Validar el campo de correo electrónico
    if (!email || !isEmailValid(email)) {
      setEmailError('Por favor, introduzca un correo electrónico válido.');
      isValid = false;
    } else {
      setEmailError('');
    }

     // Validar el campo de contraseña
     if (!password || !isPasswordValid(password)) {
        setPasswordError('La contraseña debe tener al menos 8 caracteres.');

        if (!password) {
          setPasswordError('Por favor, introduzca una contraseña.');
        } 

        isValid = false;

      } else {
        setPasswordError('');
      }

     
    if (isValid) {
         try {
      const loginResult = await handleLogin(email);
      if (loginResult) {
        if(loginResult.contraseña == password){
          const nombre=loginResult.nombre_usuario;
          navigate('/menu',{
            replace:true,
            state:{
              logged: true,
              nombre,
            },
          });
        }
        else{
          setPasswordError('Contraseña incorrecta.');
        }
        
      } else {
        setPasswordError('No se pudo iniciar sesión.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  
    }
  };

  return(
    <>
    <Header></Header>
    <body class="bg-login">
    <div class="container">
    <form onSubmit={handleSubmit}>
        <div class="form-group">
        <label htmlFor="email">Usuario:</label>
        <input type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
        </div>
        {emailError && <p class="error-form">{emailError}</p>}

        <div class="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="password"
              id="password"
              name="password"
              placeholder="********"
              
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>

        </div>
        {passwordError && <p class="error-form">{passwordError}</p>}
        
        <a href='#' class="txt-form">Olvidé mi contraseña</a>
        
        <div class="button-group">
        <button type="submit">Ingresar</button>
        </div>
        <div class="button-group">
        <button type="button">Crear cuenta</button>
        </div>

    </form>
    </div>
</body>
<Footer></Footer>
</>
  );
}

export default Login;
