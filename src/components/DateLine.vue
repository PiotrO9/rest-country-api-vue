<template>
  <div class="dateLine">
    <b>{{ propertyName }}: </b>
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
    props: ['propertyName', 'value']
}
</script>

<style lang="scss">
@import "../assets/Styles/DateLineStyles.scss";
</style>