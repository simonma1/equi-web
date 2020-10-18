<template>
  <div>
    <h1>Nos chevaux</h1>
    <div class="container-md">
      <div class="row">
        <div v-for="(horse,idx) in horses" :key=idx class="col-12 col-sm-6 col-lg-4">
          <HorseCard :horse="horse"></HorseCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getHorses from "@/services/HorseService";
import HorseCard from "@/components/HorseCard";
export default {
  name: "Horses",
  components:{HorseCard},
  computed: {
    horses(){
      return getHorses();
    }
  }
};
</script>

<style>
.img-responsive{
  width: 100%;
  height: 35vh;
  object-fit: cover;
}
</style>