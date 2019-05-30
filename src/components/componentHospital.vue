<template>
  <div class="container">

    <div style="position:absolute;top: 8rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/校医院/组 10776.png" >
      <img src="/static/images/毕业生/校医院/组 10741.png" >

    </div>
    <div class="text" style="padding: 2rem" >
      <div class="common-div-css">
        <span>{{this.xm}}，</span>
        <div>
          你去过{{this.kbcs}}次<span>校医院</span>
        </div>
        <span>消费金额</span>{{this.kbfy}}元<br/>
        <br/>
        健康是一种自由&#45;&#45;亚美路
      </div>

     <!-- <p style="margin-top: -1.5rem; padding: 0.1rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-0.5s">{{this.xm}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1s">你去过次校医院{{this.kbcs}}次
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1s">排名{{this.kbcspm}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1.5s">消费金额{{this.kbfy}}
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1s">排名{{this.kbfypm}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1.5s">健康指数{{this.csjk}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1.5s">费用指数{{this.fyjk}} {{this.healthsm}}</p>


      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1.5s">健康是一种自由&#45;&#45;亚美路</p>
-->
    </div>
    <div style="position:absolute;top:2.5rem ;left: -6rem; right: 0;bottom: 0;"><img src="/static/images/毕业生/校医院/组 10775.png" ></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/生活篇.png" width="400" height="600"></div>
  </div>

</template>


<script>
    export default {
        name: "componentHospital",

      data(){
        return {
          index:0,

          kbcs:'',// 看病次数
          kbcspm:'',//看病次数排名
          csjk:'',// 看病次数健康指数
          kbfy:'',// 看病费用
          kbfypm:'',//看病费用排名
          fyjk:'', //看病费用健康指数
          healthsm:'',//看病说明
          xh :'',

          xm:''



        }
      },
      mounted() {
        this.kbcs=localStorage.getItem('kbcs');
        this.kbcspm=localStorage.getItem('kbcspm');
        this.csjk=localStorage.getItem('csjk');
        this.xm=localStorage.getItem('xm')
        this.kbfy=localStorage.getItem('kbfy');
        this.kbfypm=localStorage.getItem('kbfypm');
        this.fyjk=localStorage.getItem('fyjk');
        this.healthsm=localStorage.getItem('healthsm');



      }
    }
</script>

<style lang="scss" scoped>
  @import '../../static/css/commdiv.css';
  .container {
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#FAACA8), to(#717EA2));
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

</style>
