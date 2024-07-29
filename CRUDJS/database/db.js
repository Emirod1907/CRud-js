const mysql = require('mysql')

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cliente'
})

conexion.connect((error)=>{
    if(error){
        console.log('El error de conexion es:'+error);
        return;
    }
    console.log('Conectado a la base de Datos eventcellar!!!')
})

module.exports = conexion;