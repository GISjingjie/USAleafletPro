<template>
  <div class="mapContainer" id="mapContainer">
    <l-map
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    >
    <l-tile-layer
     :url="url"
    >
      
    </l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
  export default{
    created() {

    },
    data() {
      return {
        zoom: 13,
        center: latLng(47.41322, -1.219482),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        mapOptions: {
                zoomSnap: 0.5
        }
      }
    },
    mounted() {
      this.initMap()
    },
    methods:{
      initMap(){
      }
    }
  }
</script>

<style>
  .mapContainer{
    width: 100%;
    height: 100%;
  }
</style>
