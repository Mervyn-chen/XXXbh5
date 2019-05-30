<template>
  <div class="container">
    <div style="position:absolute;top: 1rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/西红柿.png" >
      <img src="/static/images/毕业生/蘑菇.png" >

    </div>
    <div style="position:absolute;top: 9rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/荷包蛋.png" >
      <img src="/static/images/毕业生/锅底.png" >
    </div>
    <div class="text" style="padding: 1.5rem" >
      <div class="common-div-css" style="">
        早餐平均消费:<span>{{this.Breakfastavg}}元</span>
        <div>
          <span>午</span>餐平均消费:<span>{{this.Lunchtotal}}元</span>
        </div>
        <span>晚餐</span>平均消费:<span>{{this.Dinnertotal}}元</span>
        <div>
          <span>享受健康</span>早餐{{this.breakfastnum}}次
        </div>
        <span>饱食美味</span>午餐{{this.Lunchnum}}次
        <div>
          在夜宵摊
          <span>一掷千金</span>{{this.Dinnernum}}次
        </div>
      </div>
      <!--<p style="margin-top: 1rem; ":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">
      早餐平均消费:{{this.Breakfastavg}} 总消费：{{this.breakfasttotal}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1s">
      午餐平均消费:{{this.Lunchavg}}总消费：{{this.Lunchtotal}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1.5s">
      晚餐平均消费:{{this.Dinneravg}}总消费：{{this.Dinnertotal}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-2s">

      享受健康早餐{{this.breakfastnum}}次</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-2s">
      饱食美味午餐{{this.Lunchnum}}次</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-2.5s">
      在夜宵摊一掷千金{{this.Dinnernum}}次</p>
-->

    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/三餐logo.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/生活篇.png" width="400" height="600"></div>
  </div>


</template>

<script>
    export default {
        name: "dailyfood",
      data(){
        return {
          index:0,
          xm:'',

          breakfastnum:'',//早餐次数
          breakfasttotal:'',//早餐总额
          Breakfastavg:'',//早餐平均,
          Lunchnum :'',//午餐次数
          Lunchtotal:'', //午餐总额
          Lunchavg :'',//午餐平均
          Dinnernum :'',//晚餐次数
          Dinnertotal :'',//晚餐总额
          Dinneravg:'',// 晚餐平均



        }
      },
      mounted() {
        this.breakfastnum=localStorage.getItem('breakfastnum')
        console.log(this.breakfastnum)
        this.breakfasttotal=localStorage.getItem('breakfasttotal')
        console.log(this.breakfasttotal)
        this.Breakfastavg=localStorage.getItem('Breakfastavg')
        console.log(this.Breakfastavg)

        this.Lunchnum=localStorage.getItem('Lunchnum')
        console.log(this.Lunchnum)
        this.Lunchavg=localStorage.getItem('Lunchavg')
        this.Lunchtotal=localStorage.getItem('Lunchtotal')
        this.Dinnernum=localStorage.getItem('Dinnernum')
        this.Dinneravg=localStorage.getItem('Dinneravg')
        this.Dinnertotal=localStorage.getItem('Dinnertotal')
        console.log(this.Dinnertotal)
        this.xm=localStorage.getItem('xm')


      }
    }
</script>

<style lang="scss" scoped>
  @import '../../static/css/commdiv.css';
  .container{
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#FAACA8), to(#717EA2));
    background-size: cover;
    text-align: center;
    .img{
      height: 5.7rem;
      margin:.6rem 0;
      // width:100%;
    }
    .text{
      line-height: 0.8rem;
      font-size: .35rem;
      font-family: Georgia, serif;

    }

  }
</style>
