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
        <DateLine propertyName="Native name" :value=countryDetail.name.common />
      </div>
      <div class="borders">

      </div>
    </div>
  </div>
</template>

<script>
import DateLine from "@/components/DateLine.vue"

export default {
  props: ['countryDetail'],
  components: {
    DateLine
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
    }
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/CountryDetailStyles.scss";
</style>