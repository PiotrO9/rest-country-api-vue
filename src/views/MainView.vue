<template>
  <div class="mainView">
    <Searching @regionSelected="changeRegion" @inputedCountryName="changeCountryName"/>
    <Countries :region=region :countryShortcut=countryShortcut />
  </div>
</template>

<script>
import Searching from '../components/Searching.vue'
import Countries from '../components/Countries.vue'

export default {
    data() {
      return {
        region: "",
        countryShortcut: ""
      }
    },
    components: {
        Searching,
        Countries
    },
    methods: {
      changeRegion(param) {
        this.region = param
      },
      changeCountryName(param) {
        this.countryShortcut = param
      }
    }
}
</script>

<style lang="scss">
@import '../assets/Styles/MainViewStyles.scss';
</style>