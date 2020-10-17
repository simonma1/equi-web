<template>
  <div>
    <h1>Nos chevaux</h1>
    <div class="container-md">
      <div class="row">
        <div v-for="(horse,idx) in horses" :key=idx>
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4" :class="{'order-md-2': (idx%2==1)}">
                <img
                  :src="horse.image"
                  class="card-img"
                  :alt="horse.alt"
                />
              </div>
              <div class="col-md-8" :class="{'order-md-1': (idx%2==1)}">
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
</style>