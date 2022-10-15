<template>
  <div class="ivMap">
     <div class="iheader">

     </div>
      <div class="iContent">
        <div class="leftContent">
          <div class="smlChart"></div>
          <div class="smlChart"></div>
          <div class="smlChart"></div>
        </div>
        <div class="midContent">
          <div class="vMapData">

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
</script>

<style>
  .ivMap{
    width: 100%;
    height: 100%;
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
    background-color: #53d;
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
    background-color: deeppink;
    margin: 0 auto;
    border: 1px solid black
  }
  .midChart{
    height: 65%;
  }
  .vMapData{
    width: 100%;
    height: 100%;
    background-color: black;
    margin: 0 auto;
  }
</style>
