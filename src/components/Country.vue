<template>
  <div class="country">
    <img :src=shortlink.flags.png alt="">
    <div class="country__info">
      <a class="name" :href="'/countryDetails/' + shortlink.altSpellings[0]">{{ shortlink.name.common }}</a>
      <span class="country__data"><b>Population:</b> {{ shortlink.population }}</span>
      <span class="country__data"><b>Region:</b> {{ shortlink.region }}</span>
      <span v-if="shortlink.capital != undefined" class="country__data"><b>Capital:</b> {{ shortlink.capital[0] }}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: ['shortlink']
}
</script>

<style lang="scss">
@import '../assets/Styles/CountryStyle.scss';
</style>