<template>
  <div class="countries">
    <Country v-for="country in countries" :shortlink="country" />
  </div>
</template>

<script>
import Country from '@/components/Country.vue'
import GetAllCountries from '@/utils/GetAllCountries.js'
import FilterCountriesByRegion from '@/utils/FilterCountriesByRegion'
import FilterCountriesByShortcut from '@/utils/FilterCountriesByShortcut'
import FilterCountriesByBothFilters from '@/utils/FilterCountriesByBothFilters'

export default {
  props: ['region', 'countryShortcut'],
  components: {
    Country
  },
  data() {
    return {
      countries: null
    }
  },
  watch: {
    region(oldValue, newValue) {
      if(this.$props.countryShortcut != "") {
        GetAllCountries()
          .then((res) => this.countries = FilterCountriesByBothFilters(res, this.$props.countryShortcut, this.$props.region))
          return
      }
      else {
        GetAllCountries()
        .then((res) => this.countries = FilterCountriesByRegion(res, this.$props.region))
      }
    },
    countryShortcut(oldValue, newValue) {
      if(this.$props.region != "") {
        GetAllCountries()
          .then((res) => this.countries = FilterCountriesByBothFilters(res, this.$props.countryShortcut, this.$props.region))
      }
      else {
        GetAllCountries()
          .then((res) => this.countries = FilterCountriesByShortcut(res, this.$props.countryShortcut))
      }
    }
  },
  mounted() {
      GetAllCountries()
        .then((res) => this.countries = res)
  }
}
</script>

<style lang="scss">
@import '../assets/Styles/CountriesStyles.scss';
</style>