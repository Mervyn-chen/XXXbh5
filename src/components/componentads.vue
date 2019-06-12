<template>
  <div class="container">
    <div class="">
      <!--<img src="/static/images/毕业生/第三封面.jpg"  >-->
      <!--<img src="/static/images/毕业生/13430.png" style="position:absolute;top: 1rem;left: 1rem;right: 0;bottom: 0;"  :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
      <!--<img src="/static/images/毕业生/firstpage/1.png" class="img" :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
      <!--<img  style="position:absolute;top: -5rem;left: 0rem;right: 0;bottom: 0;"src="/static/images/毕业生/博士帽封面.png"   :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
      <!--<img  style="position:absolute;top: 9.5rem;left: 2rem;right: 0;bottom: 0;" src="/static/images/毕业生/firstpage/10780.png"  :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
      <!--<img  style="position:absolute;top: 2.5rem;left: 2.5rem;right: 0;bottom: 0;" src="/static/images/毕业生/firstpage/10728.png"  :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
      <!--<img  style="position:absolute;top: 0rem;left: 0rem;right: 0;bottom: 0;" src="/static/images/毕业生/封面3logo.png"  :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
      <!--&lt;!&ndash;<p class="delay-1s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">时光静好，与君语</p>&ndash;&gt;-->
      <!--&lt;!&ndash;<p class="delay-2s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">细水流年，与君同</p>&ndash;&gt;-->
      <!--&lt;!&ndash;<p class="delay-3s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">繁华落尽，与君老</p>&ndash;&gt;-->
      <!--<div style="position:absolute;top: -0.5rem;left: -0.5rem;right: 0;bottom: 0;"><img src="/static/images/毕业生/封面3人物.png" width="400" height="600"></div>-->

    </div>
  </div>
</template>

<script>
  export default {
    name: "componentads"
  }
</script>

<style lang="scss" scoped>
  .container{
    background:url("../../static/images/毕业生/firstpage/15236.png")  no-repeat center center;

    background-size:cover;
    text-align: center;
    .img{
      width:2rem;
      margin-top: 1rem;
      margin-left: 0.1rem;
    }
    .img2{
      background-position: center;
      background-size: contain;
      position: absolute;
      top: 15rem;
      left: 0;
      right: 0;
      margin: auto;


    }
    .p{
      font-size:.32rem;
      color:#666;
      text-align: center;
      line-height: .48rem;
    }
  }
</style>

