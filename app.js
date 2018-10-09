//const axios = require('axios');

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getDirLatlng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima en ${coords.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}


getInfo(argv.direccion).then(mensaje => console.log(mensaje)).catch(e => console.log(e));
// lugar.getDirLatlng(argv.direccion).then(resp => {
//     console.log(resp);
// }).catch(e => console.log(e));
// //console.log(argv.direccion);

// clima.getClima(6.169610899999999, -75.58736360000002).then(temp => console.log(temp)).catch(e => console.log(e));
// //