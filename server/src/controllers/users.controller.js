import {getConnection,sql,queries} from '../database'

export const getUsers = async (req,res) => {

    try{
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllUsers);
        console.log(result);
        res.json(result.recordset);
    }catch(error){
        res.status(500)
        res.send(error.message);
    }
};

export const createUser = async (req,res) =>{
    const {usuario,contraseña} = req.body;
   
    let {nombre_usuario,correo_alterno,celular,id_sexo,fechanacimiento,id_empresa,id_tipousuario,usuario_status} = req.body;
    
    if(usuario == null || contraseña == null){
        return res.status(400).json({msg: 'Bad request. Fill all fields.'})

    }
    if(nombre_usuario == null){
        nombre_usuario = " "
    }
    if(celular==null){
        celular= 8123393945
    }
    if(id_sexo==null){
        id_sexo=2

    }
    if(id_empresa==null){
        id_empresa=2

    }
    if(id_tipousuario==null){
        id_tipousuario=1

    }
    if(usuario_status==null){
        usuario_status=1

    }

    try {
        const pool = await getConnection();
    await pool.request()
    .input('usuario',sql.VarChar,usuario)
    .input('contraseña',sql.VarChar,contraseña)
    .input('nombre_usuario',sql.VarChar,nombre_usuario)
    .input('correo_alterno',sql.VarChar,correo_alterno)
    .input('celular',sql.Float,celular)
    .input('id_empresa',sql.Int,id_empresa)
    .input('id_tipousuario',sql.Int,id_tipousuario)
    .input('usuario_status',sql.Int,usuario_status)

    .query(queries.createNewUser);

    console.log(usuario,contraseña,nombre_usuario,correo_alterno,celular,id_sexo,fechanacimiento,id_empresa,id_tipousuario,usuario_status)
    res.json({usuario,contraseña,nombre_usuario,correo_alterno,celular,id_sexo,fechanacimiento,id_empresa,id_tipousuario,usuario_status});

    } catch (error) {
          
        res.status(500)
        res.send(error.message);
    }    
};

export const getUser = async (req,res)=>{
    const {usuario} = req.params;
    const pool = await getConnection();
    const result = await pool
    .request().input("usuario",usuario)
    .query(queries.getUser)
    console.log(result);
    res.send(result.recordset[0]);
};

export const updateUser = async (req,res)=>{
    const {contraseña} = req.body;
    const {usuario} = req.params;
    
    if(usuario == null || contraseña == null){
        return res.status(400).json({msg: 'Bad request. Fill all fields.'})
    }

    const pool = await getConnection();
    const result=await pool
    .request()
    .input("contraseña",sql.VarChar,contraseña)
    .input("usuario",sql.VarChar,usuario)
    .query(queries.updateUser)

    res.send(result);
};