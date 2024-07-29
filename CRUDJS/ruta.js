const express = require ('express');
const router = express.Router();
const conexion = require('./database/db');

router.get('/contacto',(req,res)=>{
    res.send('CONTACTO');
})
router.get('/Home',(req,res)=>{
    res.send('esto es un Home');
})
router.get('/Quienes-somos',(req,res)=>{
    res.send('Quienes puta somos');
})
router.get('/',(req,res)=>{
    conexion.query('SELECT * FROM cliente'),(error, results)=>{
        if(error){
            throw error;
        }
        else{
            res.send(results);
        }
    }
})

module.exports = router;