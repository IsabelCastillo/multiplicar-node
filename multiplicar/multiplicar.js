// requireds
const fs = require('fs');
const colors = require('colors');

listarTabla = (base, limite = 10) => {

    console.log('=============='.red);
    console.log(`tabla de ${ base}`.green);
    console.log('=============='.red);

    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);


    }

}


crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let BD = '';

        for (let i = 1; i <= limite; i++) {
            BD += (`${base} X ${i} = ${base * i}\n`);
        }

        const data = new Uint8Array(Buffer.from(BD));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}