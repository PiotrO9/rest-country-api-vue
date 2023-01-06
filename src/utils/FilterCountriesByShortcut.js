function FilterCountriesByShortcut(countries, shortcut) {
    if(shortcut == "") {
        return countries
    }
    return countries.filter(w => ((w.name.common).toLowerCase()).includes(shortcut.toLowerCase()))
}

export default FilterCountriesByShortcut