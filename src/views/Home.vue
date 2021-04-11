<template>
  <div class="home">
    <Carousel class="w-100">
    </Carousel>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-6">
          <p class="text-justify">
            Bienvenue au Centre Équestre Fleurie! Une écurie chaleureuse où les chevaux y sont traités aux
            petits soins. Plusieurs services y sont offerts, entre autres pension intérieure et extérieure,
            cours, entraînements et plusieurs autres. Venez visiter nos installations et vous serez charmé
            par l’ambiance.
          </p>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="">
            <div v-for="horseIcon in horseIcons" :key="horseIcon.message"  class="d-flex flex-row align-items-center py-1">
              <img class="icon pr-3" :src="require('@/assets/' + horseIcon.image)" :alt="horseIcon.alt">
              <div>{{horseIcon.message}}</div>
            </div>
            <div class="img-ref mt-1">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <Services></Services>
      </div>
    </div>  
  </div>
</template>

<script>
import Carousel from "@/components/Carousel"
import Services from "@/views/Services"

export default {
  name: 'Home',
  components: {
    Carousel,
    Services
  },
  computed:{
    horseIcons: function(){
      return [
        {
          "message": "Pension intérieure/extérieure",
          "image": "black-head-horse-side-view-with-horsehair.svg",
          "alt": "icone-cheval"
        },
        {
          "message": "Cours et entrainement classique",
          "image": "fence-for-horses-jumps.svg",
          "alt": "icone-haie-de-saut"
        },
        {
          "message": "Fête d'enfants",
          "image": "party-hat.svg",
          "alt": "icone-chapeau-de-fete"
        }
      ]      

    }
  }
}
</script>
<style scoped>
</style>
