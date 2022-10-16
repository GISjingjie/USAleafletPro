<template>
  <div class="header">
    <div class="header-left">
      <div class="h-left-son">
      </div>
      <div class="h-left-son">
      </div>
    </div>
    <div class="header-trip-left">

    </div>
    <div class="header-mid">
      <h2>Coronavirus Visibilization Center</h2>
      <!--
        <dv-decoration-7 style="width:100%;height:100%;">
        &nbsp;&nbsp;&nbsp;
        <h2>Coronavirus Visibilization Center</h2>
        &nbsp;&nbsp;&nbsp;
        </dv-decoration-7>
      -->

    </div>
    <div class="header-trip-right">

    </div>
    <div class="header-right"></div>
  </div>
</template>

<script>
</script>

<style>
  .header{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: sans-serif;
    /*
    background-color: #003153;
    */
    background-color: #3f3f3f;

  }
  .header-left,.header-mid,.header-right{

    width: 30%;
    height: 100%;
    /*
    box-shadow: 0px 5px 20px;
    */
    border-bottom: 0.5px solid #fff;
  }
  .header-trip-left,.header-trip-right{
    width: 5%;
    height: 100%;
  }
  .header-trip-left{
    border-bottom: 2px solid #FFF;
  }
  .header-trip-right{
    border-bottom: 2px solid #FFF;
  }
  .h-left-son{
    width: 50%;
    height: 100%;
    float: right;

  }
  .header-mid{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;/*新版本*/
    align-items: center;/*新版本*/
    overflow: hidden;
    border-bottom: 4px solid #FFF;
  }
  .header-mid h2{
    color: #fff;
    margin: 0 auto;
  }
</style>
