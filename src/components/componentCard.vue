<template>
  <div class="container">
    <div style="position:absolute;top: -1rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/灯.png" >


    </div>
    <div style="position:absolute;top: 8rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/老虎.png" >

    </div>
    <div class="text" style="padding: 2rem" >
      <div class="common-div-css">
        <span>一卡通</span>补办<span>{{this.bknum}}</span>次
        <br/>
        <br/>
        粗心指数：<span>{{this.careless}}{{this.carelessms}}</span>
        <div>
          最长陪伴：<span>{{this.longestday}}天</span>
        </div>
        最短陪伴：<span>{{this.shortestday}}天</span>
      </div>

      <!--<p style="margin-top:1rem; ":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-0.5s">一卡通补办 {{this.bknum}}次</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1s">粗心指数：0{{this.careless}}{{this.carelessms}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1.5s">最长陪伴{{this.longestday}}天</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-2s">最短陪伴{{this.shortestday}}天</p>-->



    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/补卡.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/生活篇.png" width="400" height="600"></div>
  </div>


</template>

<script>
    export default {
        name: "componentCard",
      data(){
        return {
          index:0,

          bknum:'', //补卡次数
          bkpm:'',//补卡排名
          careless:'',//粗心指数
          carelessms:'',//粗心描述
          longestday:'', //陪伴最长时间
          shortestday:'',//陪伴最短时间

          xh :'',
          reissuetime:'',



        }
      },
      mounted() {
        this.longestday=localStorage.getItem('longestday');


        this.shortestday=localStorage.getItem('shortestday');
        this.bkpm=localStorage.getItem('bkpm');
        this.bknum=localStorage.getItem('bknum');
        this.careless=localStorage.getItem('careless');
        this.carelessms=localStorage.getItem('carelessms')



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
