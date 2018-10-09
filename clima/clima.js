const axios = require('axios');
const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b478b992fbcb0cff394e6a756bb88137`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}