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
        <div class="">
        <div class="card-body">
            <h5 class="card-title">{{horse.name}}</h5>
            <p class="card-text">
            {{horse.description}}
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