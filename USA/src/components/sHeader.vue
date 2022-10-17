<template>
  <div class="header">
    <div class="header-left">
      <div class="h-left-son">
      </div>
      <div class="h-left-son">
      </div>
    </div>
    <div class="header-mid">
      <div class="header-mid-txt">
        <h2>
          Coronavirus Visibilization Center
        </h2>
        <div class="header-mid-h5">
          <h5></h5>
          <h5>{{timeNow}}</h5>
        </div>
      </div>
    </div>
    <div class="header-right">
      <headlistOfRight></headlistOfRight>
    </div>
  </div>
</template>

<script>
  import headlistOfRight from "./sHeadList"
  export default{
    created(){
      this.timeInter();
    },
    beforeDestroy() {
      if(this.timeNow){
        this.timeInter();
      }
    },
    data(){
      return{
        timeNow:null,
        weekday:null
      }
    },
    components:{
      headlistOfRight
    },
    mounted() {

    },
    methods:{
      timeInter(){
        setInterval(this.gettime,30000);
      },
      gettime(){
        let now=new Date();
        let hours=now.getHours();
        let min=now.getMinutes();
        let year=now.getFullYear();
        let month=now.getMonth();
        month+=1;
        let date=now.getDate();
        let weekday=now.getDay();
        let strDay=null;
        switch(weekday){
          case 0:
            strDay="Sunday";
            break;
          case 1:
            strDay="Monday";
            break;
          case 2:
            strDay="Tuesday";
            break;
          case 3:
            strDay="Wednesday";
            break;
          case 4:
            strDay="Thursday";
            break;
          case 5:
            strDay="Friday";
            break;
          case 6:
            strDay="Saturday";
            break;
        }
        this.timeNow=" "+date.toString()+"/"+month.toString()+"/"+year.toString()+" "+hours.toString()+":"+min.toString()+" "+strDay;
      }
    }
  }
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
    overflow: hidden;
  }
  .header-left,.header-mid,.header-right{

    width: 30%;
    height: 100%;
    /*
    box-shadow: 0px 5px 20px;
    */
    border-bottom: 0.5px solid #fff;
  }

  .h-left-son{
    width: 50%;
    height: 100%;
    float: right;

  }
  .header-mid{
    width: 40%;
    border-bottom: 4px solid #FFF;
  }
  .header-mid-txt{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .header-mid h2{
    text-align: center;
    width: 80%;
    height: 100%;
    color: #fff;
    flex-direction: column;
    line-height: 320%;
  }
  .header-mid-h5{
    width: 20%;
    height: 100%;
    float: left;
  }
  .header-mid h5{
    margin: 0;
    width: 100%;
    height: 50%;
    color: #FFF;
    text-align: center;
  }
  .header-right{
    overflow: hidden;
  }

  .header-right-son{
    background-color: orange;
    width: 50%;
    height: 100%;
    float: left;
  }
</style>
