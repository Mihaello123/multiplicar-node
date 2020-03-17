//requireds
//const fs = require('fs');

const argv = require('./config/yargs').argv;
var colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


let comando = argv._[0];

switch( comando ) {

    case 'listar':
        listarTabla( argv.base, argv.limite);
    break;
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
    break;
    
    default:
    console.log('comando no reconocido');    
}
//console.log(argv);
//let base = '5';

//console.log(process.argv);

//let argv2 = process.argv;

//console.log('Limite', argv.limite);
//console.log(argv2);




//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(base);
















//let data = '';

//for( let i = 1; i <= 10; i++) {
//    data += `${ base } * ${ i } = ${ base * i }\n`;
//}

//fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    
//    if (err) throw err;
    
//    console.log(`el archivo tabla-${ base }.txt ha sido creado`);
//});





  


//2 * 1 = 2
//2 * 2 = 4
//2 * 4 = 8
//2 * 5 = 10
//2 * 6 = 12
//2 * 7 = 14
//2 * 8 = 16
//2 * 9 = 18
//2 * 10 = 20