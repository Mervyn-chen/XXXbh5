<template>
    <div class="container">
        <div class="">


          <!--<img src="/static/images/毕业生/第一封面.jpg"   >-->
          <!--<img src="/static/images/毕业生/firstpage/1.png" class="img" :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
          <!--<img src="/static/images/毕业生/firstpage/23.png" style="top: -1.5rem;"  :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
          <!--<img   src="/static/images/毕业生/firstpage/10780.png"  :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
          <!--<img  style="position:absolute;top: 2.5rem;left: 2.5rem;right: 0;bottom: 0;" src="/static/images/毕业生/firstpage/10728.png"  :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
          <!--<img  style="position:absolute;top: 0rem;left: 0rem;right: 0;bottom: 0;" src="/static/images/毕业生/学业篇封面图标.png"  :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">-->
            <!--&lt;!&ndash;<p class="delay-1s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">时光静好，与君语</p>&ndash;&gt;-->
            <!--&lt;!&ndash;<p class="delay-2s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">细水流年，与君同</p>&ndash;&gt;-->
            <!--&lt;!&ndash;<p class="delay-3s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">繁华落尽，与君老</p>&ndash;&gt;-->
          <!--<div style="position:absolute;top: -0.5rem;left: -0.5rem;right: 0;bottom: 0;"><img src="/static/images/毕业生/1小人.png" width="400" height="600"></div>-->

        </div>
    </div>
</template>
<script>
export default {
    name:'componentOne',
    data(){
        return {

        }
    },
    computed:{
        addAnimation(){
            if (this.$store.state.hasAnimated.name=='touch0' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
                this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch0'
                })
               return true
            }else{
                return false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background:url("/static/images/毕业生/111.png")  no-repeat;

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
      .text{
        line-height: .6rem;
        font-size: .5rem;
        font-family: Georgia, serif;

      }
        p{
            font-size:.32rem;
            color:#666;
            text-align: center;
            line-height: .48rem;
        }
    }
</style>
