const argv = require('yargs')
.option('b',  {
        alias: 'base',
        type: 'number',
        demandOption: 'true',
        describe: 'Es la base de la tabla de multiplicar'
    }).check((argv, options) => {
        if(isNaN(argv.b))
        {
            throw 'La base tiene que ser un numero'
                }
                return true;
    })
    .option('l',  {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'Lista en consola el contenido del archivo creado'
        }).check((argv, options) => {
        if(isNaN(argv.b))
        {
            throw 'La lista tiene que ser un booleano'
                }
                return true;
    })
    .option('h',  {
        alias: 'hasta',
        type: 'number',
        default:10,
        demandOption: 'false',
        describe: 'Es el número máximo a multiplicar por la base'
    })
    .argv;

    module.exports = argv;