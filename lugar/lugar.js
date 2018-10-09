const axios = require('axios');

const getDirLatlng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let response = resp.data.results[0];
    // console.log('Direccion: ', response.formatted_address);
    // console.log('Lat: ', response.geometry.location.lat);
    // console.log('Lng: ', response.geometry.location.lng);


    return {
        direccion: response.formatted_address,
        lat: response.geometry.location.lat,
        lng: response.geometry.location.lng
    }
}

module.exports = {
    getDirLatlng
}