const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');
mongoose.set('strictQuery', true);

const objetobd = mongoose.connection;

objetobd.on('open', () => { console.log('Conexión correcta a MongoDB') })
objetobd.on('error', () => { console.log('Error en la conexion a MongoDB') })


//porque necesito usarlo en el server
module.exports = mongoose