<template>
  <div class="countries">
    <Country v-for="country in countries" :shortlink="country">
    </Country>
  </div>
</template>

<script>
import Country from '@/components/Country.vue'
import GetAllCountries from '@/utils/GetAllCountries'

export default {
  components: {
    Country
  },
  data() {
    return {
      countries: null
    }
  },
  mounted() {
      GetAllCountries()
        .then((res) => this.countries = res)
        .then((res) => console.log(res))
  }
}
</script>

<style lang="scss">
@import '../assets/Styles/CountriesStyles.scss';
</style>