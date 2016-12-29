'use strict';

const app = require('./app')
const mongoose = require('mongoose');
const config = require('./config')

mongoose.connect(config.db,(err,res)=>{
	if (err){
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexión establecida a la base de datos')
	app.listen(config.port,()=>{
		console.log(`Api Rest corriendo en http://localhost:${config.port}`);
	})
})



// app.get('/hola/:name',(req,res)=>{
// 	res.send({message:`hola ${req.params.name}!`})
// })