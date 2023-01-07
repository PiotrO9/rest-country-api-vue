const axios = require('axios')

function GetSingleCountry(shortName) {
    return axios.get(`https://restcountries.com/v3.1/alpha/` + shortName)
    .then(res => res.data[0])
    .catch(function (error) {
        console.log(error.message)
    })
}

module.exports = GetSingleCountry