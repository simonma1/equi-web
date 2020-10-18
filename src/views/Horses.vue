<template>
  <div>
    <h1>Nos chevaux</h1>
    <div class="container-md">
      <div class="row">
        <div v-for="(horse,idx) in horses" :key=idx class="col-12 col-sm-6 col-lg-4">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="">
                <img
                  :src="horse.image"
                  class="card-img img-responsive"
                  :alt="'image ' + horse.name"
                />
              </div>
              <div class="">
                <div class="card-body">
                  <h5 class="card-title">{{horse.name}}</h5>
                  <p class="card-text">
                    {{horse.description}}
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getHorses from "@/services/HorseService"
export default {
  name: "Horses",
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