import vueSeamlessScroll from 'vue-seamless-scroll'

<template>
  <div class="container">
    <van-swipe :autoplay="3000" style="width: 100%">
      <van-swipe-item v-for="(image, index) in imagesArr" :key="index">
        <img :src="image">
      </van-swipe-item>
    </van-swipe>
    <div class="common-div-css text" style="left: 1%;font-size:12pt;bottom: 1rem;top: 3rem;">
      <vue-seamless-scroll :data="listData"  class="seamless-warp" style="height: 100%;" :class-option="classOption">
        <div v-for="item in listData" class="card" style="border:1px solid #000;padding-top: 1px" >
          <div class="header" style=" overflow:auto;max-height: 5.3rem">
            <span>姓名：</span>
            <span class="exp" style="font-size:12pt;width:300px;">{{item[0]}}</span><br>
            <span>留言：</span>
            <span class="exp" style="font-size:12pt;">
                            {{item[1]}}
                          </span>
          </div>
          <div class="containerDiv" >
            <p>{{item[2]}}</p>
          </div>
        </div>
      </vue-seamless-scroll>
    </div>
    <van-submit-bar style="bottom: 0rem;width: 100%"
                    button-text="留言"
                    @submit="save"
    >
      <van-field v-model="desc" placeholder="请输入20字以内" />
    </van-submit-bar>
  </div>



</template>

<script>

  import { Toast } from 'mint-ui'
  export default {
    name: "leavemessage",
    data(){
      return {
        animate:true,
        txtVal: 0,
        desc:"",
        listData: [

        ],
        imagesArr: [
          '../../static/images/毕业生/dynamic/dynamic2.png',
          '../../static/images/毕业生/dynamic/dynamic3.png',
          '../../static/images/毕业生/dynamic/dynamic4.png',
          '../../static/images/毕业生/dynamic/dynamic6.jpg',
          '../../static/images/毕业生/dynamic/dynamic7.jpg',
        ],
      }
    },
    created(){
      this.selectLeaveMessageInfo();
    }, computed: {
      classOption () {
        return {
          step: 0.5,
          limitMoveNum: 2,//这个是修改moveSwitch()之前的使用方法，这里的数值指的是数据条数
          openTouch: true,
          hoverStop: true,
          direction: 1,
          singleHeight: 0,
          singleWidth: 0,
        }
      }
    },
    methods:{
      selectLeaveMessageInfo(){
        this.xh=this.$route.query.xh;
        this.$ajax.get('http://10.199.180.242:8080/message/findAll')
          .then(response=>{
            // this.result = response.data;
            console.log(response.data);
            this.listData = response.data;
          }).catch(function (err) {
          console.log(err);
        })

      },
      descInput(){
        this.txtVal = this.desc.length;
      },save(){
        //let Toast = this.$Toast;
        //$("#leaveMessageText").val("");
        this.xh=this.$route.query.xh;
        let Xh=this.xh;
        let message=this.desc;

        if (message.length>20){
          Toast("20字以内");
          return;
        }
        if(message.length==0){
          Toast("请输入留言");
          return;
        }
        this.desc="";
        $.post("http://10.199.180.242:8080/message/save",
          {
            Xh:Xh,
            message:message
          },
          function(data,status){
            // alert("Data: " + data + "\nStatus: " + status);
            Toast("留言成功");
          });
      }
    },
  }



</script>

<style lang="scss" scoped>
  @import '../../static/css/commdiv.css';
  .container {
    // background:-webkit-gradient(linear, 0 0, 0 100%, from(#DEC6C6), to(#95B3EB));
    background-size: cover;
    text-align: center;
    .img {
      width: 7rem;
      margin: .6rem 0;
    }
    .text{
      line-height:0.6rem;
      font-size: .35rem;
      font-family: Georgia, serif;

    }
  }
  .seamless-warp {
    height: 300px;
    overflow: hidden;
    max-height: 500px;
  }







  /**{
    margin:0;
    padding:0;
  }
  body{
    font-family:arial,sans-serif;
    font-size:100%;
    margin:3em;
    background:#666;
    color:#fff;
  }
  h2,p{
    font-size:100%;
    font-weight:normal;
  }
  ul,li{
    list-style:none;
  }
  ul{
    overflow:hidden;
    padding:3em;
  }
  ul li a{
    text-decoration:none;
    color:#000;
    background:#ffc;
    display:block;
    height:10em;
    width:10em;
    padding:1em;
  }
  ul li{
    margin:1em;
    float:left;
  }
  ul li:nth-child(even) a{
    -o-transform:rotate(4deg);
    -webkit-transform:rotate(4deg);
    -moz-transform:rotate(4deg);
    position:relative;
    top:5px;
    background:#cfc;
  }
  ul li:nth-child(3n) a{
    -o-transform:rotate(-3deg);
    -webkit-transform:rotate(-3deg);
    -moz-transform:rotate(-3deg);
    position:relative;
    top:-5px;
    background:#ccf;
  }*/




  div.card {
    width: 100%;
    //height: 60%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    background-color: #e0e9bd;
  }
  div.header {
    background-color: #afad32;
    //height: 5rem;

    color: white;
    padding: 10px;
    /*font-size: 40px;*/
    text-align: left;
  }
  div.containerDiv {
    padding: 10px;
  }
  .exp{ border-bottom:1px dashed #F00}

  .cnnr-detail{    display: block;    text-align: justify;    text-align-last: justify;    line-height: 2.3vw;    padding-bottom: 0.4vw;    border-bottom: rgb(18, 99, 160) dotted 0.1vw;}


</style>
