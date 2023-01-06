function FilterCountries(countries, newRegion) {
    if(newRegion == "") {
        return countries
    }
    return countries.filter(w => w.region == newRegion)
}

export default FilterCountries