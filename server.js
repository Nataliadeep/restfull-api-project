const express = require('express');//para requerir el frameWork Express de Node.js
const app = express();//Instancia de express
const bodyParse = require('body-parser');//permite leer el cuerpo para analizarlo en un objeto Json
const morgan = require('morgan'); //Middleware que informa sobre las peticiones al servidor

//validamos que no estemos en ambiente de produccion
if(process.env.NODE_ENV != 'production'){
        //Se carga la configuracion archivo .env al process.envls
    require('dotenv').config()
}
 
//settings
app.set('port', process.env.PORT || 4000);// se setea el pueto, toma 4000 si no esta configurado en ENV

//Middlewares
app.use(bodyParse.urlencoded({extended:false}));// para escribir datos desde un formulario 
app.use(bodyParse.json());//para que el servidor pueda recibir formato json
app.use(morgan('dev'));//la opcion dev de la informacion principal, combiend da mas detalle

//Routes
//se configura una ruta sencilla a traves del metodo GET para probar
app.use('/api/v1/users',require('./api/v1/routes/users.routes'));
app.use('/api/v1/users',require('./api/v1/routes/articles.routes'));

app.listen(app.get('port'), ()=>{
    console.log(`Server running on localhost:${app.get('port')}`);//escucha la peticion que se haga
});