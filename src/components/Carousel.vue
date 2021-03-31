<template>
  <div class="w-100 carousel-container  carousel-height">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li v-for="(image, idx) in images" :key="idx" data-target="#carouselExampleIndicators" :data-slide-to=idx :class="{'active': idx==0}"></li>
        </ol>
        <div class="carousel-inner">
            <div v-for="(image, idx) in images" :key="idx" class="carousel-item" :class="{'active': idx==0}">
                <img class="carousel-height carousel-image d-block" :src="image" alt="First slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                "https://equi.blob.core.windows.net/equiweb/Carousel-1.jpg",
                "https://equi.blob.core.windows.net/equiweb/Carousel-2.jpg",
                "https://equi.blob.core.windows.net/equiweb/Carousel-3.jpg",
                "https://equi.blob.core.windows.net/equiweb/Carousel-4.jpg",
                "https://equi.blob.core.windows.net/equiweb/Carousel-5.jpg"
            ]
        }
       
    }
}
</script>

<style>
.carousel-height{
  height: 70vh;
}

.carousel-image{
    object-fit: cover;
    width: 100%;
    object-position: center;
}
</style>