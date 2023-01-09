function FilterCountriesByBothFilters(countries, shortcut, region) {
    return countries.filter(w => ((w.name.common).toLowerCase())
    .includes(shortcut.toLowerCase()))
    .filter(w => w.region == region)
}

export default FilterCountriesByBothFilters