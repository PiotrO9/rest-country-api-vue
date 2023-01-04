<template>
  <div class="searching">
    <div class="saerching__content">
        <div class="inputContainer">
            <fa icon="magnifying-glass"/>
            <input type="text" placeholder="Search for a country...">
        </div>
        <select name="countries" id="Countries">
            <option value="">Filter by region</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/Styles/SearchingStyles.scss'; 
</style>