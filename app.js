// requireds
//const fs = require('fs');
//const fs = require('express'); Son paquetes que no son propios de Node y se instalan
//const fs = require('./fs'); Archivos que nosotros mismos creamos

const colors = require('colors/safe');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

console.log(comando);

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');

}


//let base = 'abc';

//console.log(argv.base);


// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);