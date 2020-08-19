<template>
  <div>
    <div>Contacter nous!</div>
    <div class="row">
      <div class="col-12 col-lg-6">
        <div>dsjflksdjlfksdlkfsd</div>
      </div>
      <div class="col-12 col-lg-6">
        <div id="map" ref="map"></div>
      </div>      
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

</style>