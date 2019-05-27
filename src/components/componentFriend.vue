<template>
  <div class="container">

    <div style="position:absolute;top: 8rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/好友/图像%2010.png" >


    </div>
    <div class="text" style="padding: 2rem" >
      <p style="margin-top: 0rem; padding: 0.1rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">xxx是你的好朋友</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1s">你俩形影不离，</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1.5s">次一起去食堂</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1.5s">次一起出入图书馆</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1.5s">不认识xxx 大数据告诉你，毕业前需要认识一下这位经常参见而过的有缘人</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1.5s">毕业了，无论天涯海角，让我们为友谊干杯！</p>
    </div>
    <div style="position:absolute;top:3rem ;left: -6rem; right: 0;bottom: 0;"><img src="/static/images/毕业生/好友/组%2010777.png" ></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/生活篇.png" width="400" height="600"></div>
  </div>
</template>

<script>
    export default {
        name: "componentFriend"
    }
</script>

<style lang="scss" scoped>
  .container {
    background-color: #F3F3F3;
    background-size: cover;
    text-align: center;
    .img {
      width: 7rem;
      margin: .6rem 0;
    }
    .text{
      line-height:0.8rem;
      font-size: .5rem;
      font-family: Georgia, serif;

    }
  }

</style>
