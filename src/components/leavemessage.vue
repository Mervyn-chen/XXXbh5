import vueSeamlessScroll from 'vue-seamless-scroll'
<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <!--<img src="/static/images/毕业生/早晚时间.png" width="400" height="600">-->
      <img src="/static/images/毕业生/矩形 958.png" width="400" height="250">
      <img src="/static/images/毕业生/飞机1.png" >
    </div>

    <div class="text" >
      <div class="common-div-css" style="margin-top: 5rem;left: 10%;font-size:12pt;">
        <vue-seamless-scroll :data="listData"  class="seamless-warp" :class-option="classOption">
          <ul class="item">
            <li v-for="item in listData">
              <div style="font-weight: 600">{{item[1]}}:</div>
              {{item[0]}}
              <!--  <span class="title" v-text="item[1]"></span>：<br>
                <span class="date" v-text="item[0]"></span>-->
            </li>
          </ul>
        </vue-seamless-scroll>



        <!--<div>-->



        <!--<textarea placeholder="100字以内" id="leaveMessageText" maxlength="100" style="height: 0.8rem;width: 5.2rem;margin-top: 0.8rem" @input="descInput" v-model="desc" />-->
        <!--<mt-button size="small"  type="primary" v-on:click="save()">发送</mt-button>-->
        <!--</div>-->

      </div>



    </div>
    <!--<van-cell-group style="margin-top: 11rem">
      <van-field
        v-model="desc"
        label="留言"
        type="textarea"
        placeholder="请输入留言(20字以内)"
        rows="1"
        autosize
      >
        <van-button slot="button" size="small" type="primary" v-on:click="save()">发送</van-button>
      </van-field>
    </van-cell-group>-->
    <van-submit-bar
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
        listData: []
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
        this.$ajax.get('http://10.199.180.242:8080/message/findAllMessage')
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
