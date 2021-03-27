const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

console.log(argv);


//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');

//const base = 6;

crearArchivo(argv.b, argv.l, argv.h)
    .then(msg => console.log(msg, 'Creado'))
    .catch(err => console.log(err));