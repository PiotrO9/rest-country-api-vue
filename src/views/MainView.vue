<template>
  <div class="mainView">
    <Searching />
    <Countries />
  </div>
</template>

<script>
import Searching from '../components/Searching.vue'
import Countries from '../components/Countries.vue'

export default {
    components: {
        Searching,
        Countries
    }
}
</script>

<style lang="scss">
@import '../assets/Styles/MainViewStyles.scss';
</style>