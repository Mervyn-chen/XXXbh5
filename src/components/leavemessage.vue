import vueSeamlessScroll from 'vue-seamless-scroll'

<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in imagesArr" :key="index">
          <img v-lazy="image" width="100%"/>
        </van-swipe-item>
      </van-swipe>
      <img style="margin-top: -1.5rem" src="../../static/images/毕业生/plane.png" >
    </div>

    <div class="text" >
      <div class="common-div-css" style="margin-top: 5rem;left: 10%;font-size:12pt;">
        <vue-seamless-scroll :data="listData"  class="seamless-warp" :class-option="classOption">
          <ul class="item">
            <li v-for="item in listData">
              <div style="font-weight: 600">{{item[1]}}:</div>
              {{item[0]}}
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>
    <van-submit-bar style="bottom: 0.1rem;width: 99%"
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
        listData: [],
        imagesArr: [
          '../../static/images/毕业生/dynamic/dynamic1.png',
          '../../static/images/毕业生/dynamic/dynamic2.png',
          '../../static/images/毕业生/dynamic/dynamic3.png',
          '../../static/images/毕业生/dynamic/dynamic4.png',
          '../../static/images/毕业生/dynamic/dynamic6.jpg',
          '../../static/images/毕业生/dynamic/dynamic7.jpg',
        ],
      }
    },
    created(){
      this.selectLeaveMessageInfo()
    }, computed: {
      classOption () {
        return {
          step: 0.5,
          limitMoveNum: 1,//这个是修改moveSwitch()之前的使用方法，这里的数值指的是数据条数
          openTouch: false,
          hoverStop: false,
        }
      }
    },
    methods:{
      selectLeaveMessageInfo(){
        this.xh=localStorage.getItem('xh');
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
        this.xh=localStorage.getItem('xh');
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
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#DEC6C6), to(#95B3EB));
    background-size: cover;
    text-align: center;
    .img {
      width: 7rem;
      margin: .6rem 0;
    }
    .text{
      line-height:0.8rem;
      font-size: .35rem;
      font-family: Georgia, serif;

    }
  }

  .seamless-warp {
    height: 300px;
    overflow: hidden;
  }


</style>
