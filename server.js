//estamos creando nuestro servidor

const express = require('express')
const app = express()


//IMPORTAR CONEXION MONGODB
const archivobd = require('./conexion')

//Importacion del archivo de rutas y modelo usuario
const rutasusuario = require('./rutas/usuario')

//Importacion body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutasusuario)


//para que podamos realizar la prueba correcta del funcionamiento de nuestro backend, necesitamos crear una ruta:
app.get('/', (req, res) => {
    res.end('Bienvenido al servidor corriendo en puerto 5000')
})

//res: Argumento de respuesta HTTP a la función de middleware, denominado "res" por convención.
//req: Argumento de solicitud HTTP a la función de middleware, denominado "req" por convención.
//configurar nuestro servidor basico
app.listen(5000, function () {
    console.log('El servidor NODE de lucas esta corriendo correctamente')
})

//nodemon sirve para que yo no tenga que detener la app cada vez que quiera ver un cambio en el backend