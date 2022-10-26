<template>
  <div class="mapContainer" id="mapContainer">
    <l-map

    :zoom="zoom"
    :center="center"
    :options="mapOptions">
    <l-control-layers position="topright"></l-control-layers>
    <l-tile-layer
    v-for='tileProvider in tileProviders'
    :key='tileProvider.name'
    :name='tileProvider.name'
    :visble='tileProvider.visible'
    :url='tileProvider.url'
    :attribution='tileProvider.attribution'
    layer-type="base" />
    <l-control class="mapDeathLegend" :position="'bottomright'">
      <div class="mapDeathdLegendDiv" >
        <div class="mapDthLegendDiv" v-for="item in mapDthLegendList">
          <span class="mapDthLegendSpan"  :style="{backgroundColor:item.color}"></span>
          <span class="mapDthLegendTxt" >{{item.txt}}</span>
        </div>
      </div>
    </l-control>
      <l-control-scale position="bottomleft" :imperial="false" :metric="true"></l-control-scale>
    <l-geo-json :geojson="geojson" :option="geojsonOptions" :options-style="styleFunction"></l-geo-json>
    </l-map>
  </div>
</template>

<script>
let num=0;
import { latLng } from "leaflet";
import {LMap, LTileLayer, LGeoJson,LControlScale,LControlLayers,LLayerGroup,LControl} from 'vue2-leaflet';
import USAJson from '../../../USA/static/json/USAjson.js'
import Cases from '../../../USA/static/json/usaCases.json'
  export default{

    components:{
      LGeoJson,
      LTileLayer,
      LControlScale,
      LLayerGroup,
      LControlLayers,
      LControl
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
        mapOptions: {
          zoomSnap: 0.5
        },
        tileProviders: [
                {
                  name: 'OpenStreetMap',
                  visible: true,
                  attribution:
                    '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                },
                {
                  name: 'OpenTopoMap',
                  visible: false,
                  url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
                  attribution:
                    'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
                },
              ],
        mapDthLegendList:[
          {
            color:'#800026',
            txt:'>84000'
          },
          {
            color:'#BD0026',
            txt:'70000-84000'
          },
          {
            color:'#E31A1C',
            txt:'56000-70000'
          },
          {
            color:'#FC4E2A',
            txt:'42000-56000'
          },
          {
            color:'#FD8D3C',
            txt:'28000-42000'
          },
          {
            color:'#FEB24C',
            txt:'14000-28000'
          },
          {
            color:'#FED976',
            txt:'7000-14000'
          },
          {
            color:'#FFEDA0',
            txt:'<7000'
          }
        ],
        geojson:null,
        usaCasesJson:Cases,
        usaTotalCase:null,
        usaTotalDeath:null,
        fillColor:null
      }
    },
    computed:{
      geojsonOptions(){
        return {
          onEachFeature: this.onEachFeatureFunction
        }
      },
      styleFunction(){
        const fillColor=this.getColorRed(this.geojson.features[num++].properties.totalDeath);
        //上面如何循环遍历获取color加进return fillColor里面呢
        return () => {
                return {
                  weight: 2,
                  color: "#ECEFF1",
                  opacity: 1,
                  fillColor: fillColor,
                  fillOpacity: 1
                };
              };
      },
      onEachFeatureFunction(){
      }
    },
    mounted() {
      this.getStateName()
    },
    methods:{
      getColorRed(d){
        return d >84000 ? '#800026' :
        			d > 70000  ? '#BD0026' :
        			d > 56000  ? '#E31A1C' :
        			d > 42000  ? '#FC4E2A' :
        			d > 28000   ? '#FD8D3C' :
        			d > 14000   ? '#FEB24C' :
        			d > 7000   ? '#FED976' : '#FFEDA0';
      },
      fillColorFun(){

        return '#800026'
      },
      addDeathLegend(){

      },
      getStateName(){
        let geojs=this.geojson.features;
        console.log("USAtotalCases:",this.usaTotalCase);
        console.log("usaTotalDeath:",this.usaTotalDeath);
        let min=geojs[0].properties.totalDeath;
        let max=geojs[0].properties.totalDeath;
        for(let i =0;i<geojs.length;i++){
          //nameList+=geojs[i].properties.totalCases;
          //nameList+="  ";
          console.log(geojs[i].properties.name);
          //console.log(geojs[i].properties.totalCases);
          console.log(geojs[i].properties.totalDeath);
          if(geojs[i].properties.totalDeath>max){
            max=geojs[i].properties.totalDeath;
          }
          if(geojs[i].properties.totalDeath<min){
            min=geojs[i].properties.totalDeath;
          }
        }
        console.log(max);
        console.log(min);
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

      },


    }
  }
</script>

<style>
  .mapContainer{
    width: 100%;
    height: 100%;

  }
  .mapDeathdLegendDiv{
    width: 130px;
    height: 250px;
    background-color: #fff;
    padding-top: 5px;
    padding-left: 5px;
    border-radius: 10px;
    float: left;
  }
  .mapDthLegendDiv{
    width: 130px;
    height: 30px;
  }
  .mapDthLegendSpan{
    width: 25%;
    height: 30px;
    float: left;
  }

  .mapDthLegendTxt{
    width: 75%;
    height: 30px;
    text-align: center;
    float: right;
    line-height: 30px;
  }
</style>
