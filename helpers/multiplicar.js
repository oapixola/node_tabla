const fs = require('fs');

const crearArchivo = async(base = 5, list = false, hasta = 5) => {



    try {

        let salida = '';
        salida += '=================================\n';
        salida += `======= TABLA DEL ${base} =======\n`;
        salida += '=================================\n';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i} \n`;
        }

        if (list === true)
            console.log(salida);

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${ base }.txt creado`;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo: crearArchivo
}