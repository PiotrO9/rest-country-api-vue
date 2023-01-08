<template>
  <div class="countryDetail" v-if="countryDetail.flags != undefined" >
    <div class="countryDetail__flag">
      <img :src=countryDetail.flags.png :alt=countryDetail.name.common>
    </div>
    <div class="countryDetail__datas">
      <h2 v-if="countryDetail != undefined">{{ countryDetail.name.common }}</h2>
      <div class="datas">
        <DateLine propertyName="Native name" :value=countryDetail.name.common />
        <DateLine propertyName="Currency" :value=getCurrency() />
        <DateLine propertyName="Population" :value=countryDetail.population />
        <DateLine propertyName="Languages" :value=getLanguages() />
        <DateLine propertyName="Region" :value=countryDetail.region />
        <DateLine v-if="countryDetail.subregion != undefined" propertyName="Subregion" :value=countryDetail.subregion />
        <DateLine propertyName="Capital" :value=countryDetail.capital[0] />
        <DateLine propertyName="Timezone" :value=countryDetail.timezones[0] />
      </div>
      <Borders :borders=countryDetail.borders />
    </div>
  </div>
</template>

<script>
import DateLine from "@/components/DateLine.vue"
import Borders from "@/components/Borders.vue"

export default {
  props: ['countryDetail'],
  components: {
    DateLine,
    Borders
  },
  data() {
    return {
      currency: ""
    }
  },
  methods: {
    getCurrency() {
      let currencies = this.$props.countryDetail.currencies
      return Object.keys(currencies)[0]
    },
    getLanguages() {
      let languages = Object.values(this.$props.countryDetail.languages)
      languages = languages.join(", ")
      return languages
    }
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/CountryDetailStyles.scss";
</style>