import axios from 'axios'

function GetAllCountries() {
    return axios.get('https://restcountries.com/v3.1/all')
    .then(res => res.data)
}

export default GetAllCountries