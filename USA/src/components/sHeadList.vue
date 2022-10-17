<template>
  <div class="headList">
    <div id="headListLeft" v-for="icon in HeadIconList">
      <div class="headListIconDiv">
        <a-popover>
          <template slot="content" class="headListPopover">
            <!--
            <p><a href="#">this is a link</a></p>
            -->
          </template>
          <a-icon :type="icon.type" class="headListIcon">
          </a-icon>
        </a-popover>
      </div>
    </div>
    <div class="headListRight">
      <strong><a-badge :count="1"><a-avatar shape="circle" icon="user" class="headListRightUser" /></a-badge></strong>
      <div class="UserDiv">
        <a-select class="UserSelect" default-value="jackMa">
          <a-select-option value="jackMa">游客</a-select-option>
          <a-select-option value="MarkJie" @click="logOut()">退出登录</a-select-option>
        </a-select>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'headerList',
    data(){
      return {
        HeadIconList:[
          {
            type:'edit'
          },
          {
            type:'plus-circle'
          },
          {
            type:'pie-chart'
          },
          {
            type:'bell'
          }
        ]
      }
    },
    methods:{
      logOut(){
        window.sessionStorage.clear()
        this.$router.push('/login')
      }
    }
  }
</script>

<style>
  .headList{
    line-height: 500%;
    width: 400px;
    height: 90%;
    float: right;
    margin: 0 auto;
  }

  .headListLeft{
    width: 210px;
    background-color: aqua;
  }

  .headListIconDiv{
    width: 50px;
    height: 50px;
    font-size: 20px;
    float: left;
  }

  .headListIcon{
    margin: auto auto ;
    color: #fff;
  }

  .headListIcon:hover{
    color: #696969;
    -webkit-transform: scale(1.5, 1.5);
    transform: scale(1.5, 1.5);
  }

  .headListRight{
    width: 190px;
    height: auto;
    float: left;
  }

  .headListPopover p:hover{
    color: #eee;
  }



  .headListRightUser{
    font-size: 20px;
    color: #9c9c9c;
  }

  .UserDiv{
    display: inline-block;
    margin-left: 10%;
  }

  .UserSelect{
    width: 80px;
    margin-left: 10px;
  }
</style>
