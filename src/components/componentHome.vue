<template>
  <div class="container">

    <div style="position:absolute;top: 7.5rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/宿舍/组%2010774.png" >

    </div>
    <div class="text" style="padding: 2rem" >
      <div class="common-div-css" style="margin-top: 0.5rem">
        校内久居地:<span>{{this.ssname}}</span>宿舍<br/>
        洗澡次数:<span>{{this.bathnum}}</span>
        <br/>
        个人清洁排名<span>{{this.bathpm}}</span><br/>
        个人清洁指数<span>{{this.qjzs}}||{{this.sm}}</span>
        军训、上课、自习、同吃同住的四年，<br/>
        四年的青春，四年的感情，给了各自珍惜的理由。
      </div>

    <!--  <p style="margin-top: 0rem; padding: 0.1rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
    class="delay-0.5s">校内久居地: {{this.ssname}}宿舍</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
      class="delay-1s">洗澡次数{{this.bathnum}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
      class="delay-1.5s">个人清洁排名{{this.bathpm}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
      class="delay-1.5s">个人清洁指数0{{this.qjzs}}||{{this.sm}}</p>
-->
    </div>
    <div style="position:absolute;top:3rem ;left: -6rem; right: 0;bottom: 0;"><img src="/static/images/毕业生/宿舍/组 10775.png" ></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/生活篇.png" width="400" height="600"></div>
  </div>

</template>

<script>
    export default {
        name: "componentHome",
      data(){
        return {
          index:0,
          ssname:'',

          bathnum:'', //洗浴次数
          bathpm:'',//洗浴排名
          qjzs:'',// 清洁指数
          sm:'',//说明
          totalconsume:'',
          xh :'',
          reissuetime:'',



        }
      },
      mounted() {
        this.bathnum=localStorage.getItem('bathnum');
        this.bathpm=localStorage.getItem('bathpm');
        this.qjzs=localStorage.getItem('qjzs');
        this.sm=localStorage.getItem('sm');
        this.ssname=localStorage.getItem('ssname')





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

