<template>
  <div class="card mb-3">
    <div class="row no-gutters">
        <div class="">
        <img
            :src="horse.image"
            class="card-img img-responsive"
            :style="objectPosition"
            :alt="'image ' + horse.name"
        />
        </div>
        <div class="w-100">
            <div class="card-body">
                <h5 class="card-title">{{horse.name}}</h5>
                <p class="card-text">
                <ul>
                    <li class="text-left" v-for="descItem in horse.description" :key="descItem">{{descItem}}</li>
                </ul>
                </p>             
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Horses",
    props: ['horse'],
    computed: {
        objectPosition: function(){
            if(this.horse.objectPosition){
                return {
                    'object-position': this.horse.objectPosition
                }
            }
            return {};
        }
    }
}
</script>

<style>

</style>