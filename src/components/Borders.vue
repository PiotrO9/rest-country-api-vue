<template>
  <div class="borders">
    <span>Border Countries: </span>
    <div v-if="borders != null" class="borderCountries">
        <div v-for="border in borders" class="border" >
            <a :href="'/countryDetails/' + border">{{ border }}</a>
        </div>
    </div>
    <span v-else>
      No borders countries
    </span>
  </div>
</template>

<script>
export default {
    props: ['borders']
}
</script>

<style lang="scss">
@import '../assets/Styles/BordersStyles.scss';
</style>