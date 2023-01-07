<template>
  <div class="detailView">
    <a href="/">Back</a>
  </div>
</template>

<script>
import GetSingleCountry from "../utils/GetSingleCountry.js"
export default {
    props: ['shortlink'],
    data() {
        return {
            singleCountry: ""
        }
    },
    mounted() {
        let shortName = this.$route.params.shortName
        GetSingleCountry(shortName)
            .then((res) => this.singleCountry = res)
            .then((res) => console.log(this.singleCountry))
            .then((res) => {
                if(this.singleCountry == undefined) {
                    this.$router.push('/') 
                }
            })

    }
}
</script>

<style lang="scss">
@import '../assets/Styles/DetailViewStyles.scss';
</style>