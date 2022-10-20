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
import Cases from '../../../USA/static/json/usaCases.json'
  export default{
    components:{
      LGeoJson
    },
    async created() {
        //const response = await fetch('https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson');
        this.geojson=USAJson;
        this.usaCases=Cases;
        this.addUSACasesToGeoJson();
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
        geojson:null,
        usaCasesJson:Cases,
        usaTotalCase:null,
        usaTotalDeath:null
      }
    },
    mounted() {
      this.getStateName()
    },
    methods:{
      getStateName(){
        let geojs=this.geojson.features;
        console.log("USAtotalCases:",this.usaTotalCase);
        console.log("usaTotalDeath:",this.usaTotalDeath);
        for(let i =0;i<geojs.length;i++){
          //nameList+=geojs[i].properties.totalCases;
          //nameList+="  ";
          console.log(geojs[i].properties.name);
          console.log(geojs[i].properties.totalCases);
          console.log(geojs[i].properties.totalDeath);

        }
        //console.log(nameList);
        //alert(nameList);
      },
      addUSACasesToGeoJson(){
        this.usaTotalCase=this.usaCasesJson[0].totalCases;
        this.usaTotalDeath=this.usaCasesJson[0].totalDeath;
        for(let i=0;i<this.geojson.features.length;i++){
          /*
          console.log(this.usaCasesJson[i+1].totalCases)
          console.log(this.usaCasesJson[i+1].totalDeath)
          */
          this.geojson.features[i].properties.totalCases=this.usaCasesJson[i+1].totalCases;
          this.geojson.features[i].properties.totalDeath=this.usaCasesJson[i+1].totalDeath;
        }

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
