const express = require('express');
const app = express();

app.set('view engine','ejs');

/*app.get('/',(req,res)=>{
    res.send('Chupala gato');
})*/
app.use('/', require('./ruta'));

app.listen(5000,()=>{
    console.log('SERVER corriendo en http://localhost:5000');
})