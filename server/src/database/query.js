export const queries = {
    getAllUsers: "SELECT * FROM CA_USUARIOS",
    createNewUser: 'INSERT INTO CA_USUARIOS (usuario,contraseña,nombre_usuario,correo_alterno,celular,id_empresa,id_tipousuario,usuario_status) VALUES (@usuario,@contraseña,@nombre_usuario,@correo_alterno,@celular,@id_empresa,@id_tipousuario,@usuario_status)',
    getUser: "SELECT * FROM CA_USUARIOS Where usuario=@usuario",
    updateUser: "UPDATE CA_USUARIOS SET contraseña = @contraseña WHERE usuario=@usuario"
}