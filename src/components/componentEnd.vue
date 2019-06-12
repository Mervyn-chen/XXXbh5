<template>
  <div class="container">
    <div class="">

      <van-button style="position: fixed; margin-left: -1rem; bottom: 0;" icon="star-o" type="info"  @click="tosuggest">意见反馈</van-button>
      <!--<img src="/static/images/毕业生/firstpage/1.png" class="img" :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
      <!--<img src="/static/images/毕业生/firstpage/23.png" style="top: -1.5rem;"  :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
      <!--<img   src="/static/images/毕业生/firstpage/10780.png"  :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
      <!--<img  style="position:absolute;top: 2.5rem;left: 2.5rem;right: 0;bottom: 0;" src="/static/images/毕业生/firstpage/10728.png"  :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
      <!--<p class="delay-1s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">时光静好，与君语</p>-->
      <!--<p class="delay-2s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">细水流年，与君同</p>-->
      <!--<p class="delay-3s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">繁华落尽，与君老</p>-->

    </div>
  </div>

</template>

<script>
    export default {
        name: "componentEnd",
      methods:{
          tosuggest(){
            this.$router.push('/suggest')
          }
      }
    }
</script>

<style lang="scss" scoped>
  .container{
    background:url("../../static/images/毕业生/firstpage/14.png")  no-repeat center center;

    background-size:cover;
    text-align: center;
    .img{
      width:2rem;
      margin:.6rem auto;
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
    p{
      font-size:.32rem;
      color:#666;
      text-align: center;
      line-height: .48rem;
    }
  }
</style>
