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
    <l-geo-json :geojson="geojson"></l-geo-json>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import {LMap, LTileLayer, LGeoJson} from 'vue2-leaflet';
import USAJson from '../../../USA/static/json/USAjson.js'
  export default{
    components:{
      LGeoJson
    },
    async created() {
        //const response = await fetch('https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson');
        this.geojson=USAJson;
    },
    data() {
      return {
        zoom: 4,
        center: [37.8, -96],
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        mapOptions: {
          zoomSnap: 0.5
        },
        geojson:null
      }
    },
    mounted() {
      this.getStateName()
    },
    methods:{
      getStateName(){
        let geojs=this.geojson.features;
        let nameList='';
        for(let i =0;i<geojs.length;i++){
          nameList+=geojs[i].properties.name;
          nameList+="  ";
          //console.log(geojs[i].properties.name);
        }
        console.log(nameList);
        alert(nameList);
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
