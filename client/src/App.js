import React, { useEffect, useState } from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Login from './components/Login'; // Importa el componente de Login
import Menu from './components/Menu';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";

export const PrivateRoute = ({children})=>{
  const {state} = useLocation();
  return state?.logged ? children : <Navigate to='/'/>
}


function App() {
  const [backendData,setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/users").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  },[])


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}  exact></Route>
          <Route path='/menu' element={
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          }></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App