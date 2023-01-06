<template>
  <div class="countries">
    <Country v-for="country in countries" :shortlink="country">
    </Country>
  </div>
</template>

<script>
import Country from '@/components/Country.vue'
import GetAllCountries from '@/utils/GetAllCountries'
import FilterCountries from '@/utils/FilterCountries'

export default {
  props: ['region'],
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
      // console.log(this.$props.region)
      GetAllCountries()
        .then((res) => this.countries = FilterCountries(res, this.$props.region))
    }
  },
  mounted() {
      GetAllCountries()
        .then((res) => this.countries = res)
        .then((res) => console.log(res[0]))
  }
}
</script>

<style lang="scss">
@import '../assets/Styles/CountriesStyles.scss';
</style>