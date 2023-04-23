const { crearArchivo, crearArchivo2} = require('./helpers/multiplicar')
const argv  = require('./config/yargs');
const colors  = require('colors');
console.log(argv)
console.log('base:yargs',argv.base )

 crearArchivo2(argv.base, argv.listar, argv.hasta)
 .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'))
 .catch(err => console.log(err))

// const  [,,baseArg]= process.argv;
// const [, base ]= baseArg.split('=');
// console.log(base);
