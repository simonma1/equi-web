<template>    
  <div class="row align-items-center">
    
    <div class="col-12 col-md-6 ">
      <h1>Contactez nous!</h1>
      <div class="">
        <div class="mb-3">
          Sur nos réseaux sociaux
        </div>
        <div class="">
          <div class="">
            <div class="mb-2">
              <a href="https://www.facebook.com/Centre-%C3%89questre-Fleurie-1798572710283110/?ref=page_internal">
                <img class="icon" src="@/assets/facebook.svg">
                <span class="ml-2">Facebook</span>
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/centre.equestre.fleurie/">
                <img class="icon" src="@/assets/instagram.svg">
                <span class="ml-2">Instagram</span>
              </a>
            </div>
            <div class="img-ref mt-1">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div class="address mb-4 mb-0">
              <div>46 rue fleurie</div>
              <div>Saint-Mathieu-de-Beloeil</div>
              <div>J3G 0E6</div>
            </div>
          </div>
        </div>  
      </div>
    </div>

    <div class="col-12 col-md-6">
      <div id="map" ref="map"></div>
    </div> 
          
  </div>
</template>

<script>

export default {
  data:()=>({
      map: null,
      marker: null    
  }),
  mounted: function () {
    let coordCentreEq = {lat: 45.576960, lng: -73.279120};
    let zoomLevel = 12;
    let options = {
        zoom: zoomLevel, 
        center: coordCentreEq
    };
    let mapDiv = this.$refs["map"];
    this.map = new google.maps.Map(mapDiv, options);
    
    this.marker = new google.maps.Marker({position: coordCentreEq, map: this.map});
  }
}
</script>


<style>

#map{
  height: 25rem;
  width: 25rem;
}

.icon{
  height: 2rem;
}

.img-ref{
  font-size: 0.25rem;
}

.address{
  margin-top:1rem;
  line-height: 1rem;
}

</style>