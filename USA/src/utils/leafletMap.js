import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Icon from "leaflet/dist/images/marker-icon.png"
import IconShadow from "leaflet/dist/images/marker-shadow.png"


const createMap=(divId,options)=>{
  let map=L.map(divId,options);
  return map;
}
const createOverlayers=(map,overLayers,baseLayers)=>{
  L.control.layers(baseLayers,overLayers).addTo(map)
}

export default{
  createMap
}