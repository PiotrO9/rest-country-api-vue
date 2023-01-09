<template>
  <div class="searching">
    <div class="saerching__content">
        <div class="inputContainer">
            <fa icon="magnifying-glass"/>
            <input type="text" placeholder="Search for a country..." 
            @input="inputCountryName" id="searchInput">
        </div>
        <select name="countries" id="Countries" @change="selectedRegion">
            <option value="">Filter by region</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectedRegion() {
      const selectRegion = document.getElementById("Countries").value
      this.$emit("regionSelected", selectRegion)
    },
    inputCountryName() {
      const inputValue = document.getElementById("searchInput").value
      this.$emit("inputedCountryName", inputValue)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/Styles/SearchingStyles.scss'; 
</style>