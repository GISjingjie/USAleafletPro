<template>
  <div class="ivMap">
     <div class="iheader">
      <sHeader class="sHeader"></sHeader>
     </div>
      <div class="iContent">
        <div class="leftContent">
          <div class="smlChart"></div>
          <div class="smlChart"></div>
          <div class="smlChart"></div>
        </div>
        <div class="midContent">
          <div class="vMapData">
            <sMapbox class="sMapbox"></sMapbox>
          </div>
        </div>
        <div class="rightContent">
          <div class="smlChart"></div>
          <div class="midChart"></div>
        </div>
      </div>
  </div>
</template>

<script>

  import sMapbox from "./sMapbox3D"
  import sHeader from "./sHeader"
  export default{
    name:'iVMap',
    components:{
        sMapbox,
        sHeader
    },
  }

</script>

<style>
  .ivMap{
    width: 100%;
    height: 100%;
    background-color: #000;
  }
  .iheader{
    width: 100%;
    height: 10%;
  }
  .iContent{
    width: 100%;
    height: 90%;
  }
  .leftContent,.rightContent{
    width: 22%;
    height: 95%;

    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
  .midContent{
    width: 56%;
    height: 95%;
    float: left;
  }
  .smlChart,.midChart{
    width: 93%;
    height: 32%;

    margin: 0 auto;
  }
  .midChart{
    height: 65%;
  }
  .vMapData{
    width: 100%;
    height: 100%;

    margin: 0 auto;
  }
  .sMapbox{
    width: 100%;
    height: 100%;
  }
  .sHeader{
    width: 100%;
    height: 100%;
  }
</style>
