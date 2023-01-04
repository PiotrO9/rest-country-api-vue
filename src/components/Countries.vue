<template>
  <div class="countries">

  </div>
</template>

<script>
import GetAllCountries from '@/utils/GetAllCountries'

export default {
    setup() {
        console.log(GetAllCountries().then((res) => console.log(res[0])))
    }
}
</script>

<style lang="scss">
@import '../assets/Styles/CountriesStyles.scss';
</style>