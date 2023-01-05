<template>
  <div class="country">
    <span>{{ shortlink.name.common }}</span>
    <span>{{ shortlink.name.official }}</span>
  </div>
</template>

<script>
export default {
    props: ['shortlink'],
}
</script>

<style>

</style>