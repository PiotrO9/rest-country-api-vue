const axios = require('axios')

function GetAllCountries() {
    return axios.get('https://restcountries.com/v3.1/all')
    .then(res => res.data)
}

module.exports = GetAllCountries