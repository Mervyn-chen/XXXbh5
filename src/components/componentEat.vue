<template>
  <div class="container">
    <div style="position:absolute;top: 1rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/吃/组 10596.png" >
    </div>
    <div style="position:absolute;top: 9.8rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/吃/组 10775.png" >
    </div>
    <div class="text" style="padding: 2rem" >
      <div class="common-div-css" style="margin-top: 0.5rem">
        <span>消费</span>金额最多的地点:
        <div>
          1.{{this.favoritecanteen1}}消费<span>{{this.favoritecanteen1je}}</span> 元
        </div>
        <!--2.{{this.favoritecanteen2}}消费<span>{{this.favoritecanteen2je}}</span> 元-->
        <!--<div>-->
          <!--3.{{this.favoritecanteen3}}消费<span>{{this.favoritecanteen3je}}</span> 元-->
        <!--</div>-->
        <br/>
        最喜欢<span>吃</span>的摊位：
        <div>
          1.{{this.favorite1}}消费{{this.favorite1je}}元
        </div>
        2.{{this.favorite2}}消费{{this.favorite2je}}元<br/>
        3.{{this.favorite3}}消费{{this.favorite3je}}元
      </div>

    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/吃.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/生活篇.png" width="400" height="600"></div>
  </div>

</template>

<script>
    export default {
        name: "componentEat",
      data(){
        return {
          index:0,
          favorite1:'', //第一食堂
          favorite1je:'',//第一消费金额
          favorite2:'', //第二食堂
          favorite2je:'',//第二消费金额
          favorite3:'', //第三食堂
          favorite3je:'',//第三消费金额
          favoritecanteen1:'', //第一食堂
          favoritecanteen1je:'',//第一消费金额
          favoritecanteen2:'', //第二食堂
          favoritecanteen2je:'',//第二消费金额
          favoritecanteen3:'', //第三食堂
          favoritecanteen3je:'',//第三消费金额

          xh :'',
          reissuetime:'',



        }
      },
      mounted() {
        this.favorite1=localStorage.getItem('favorite1');


        this.favorite1je=localStorage.getItem('favorite1je');
        this.favorite2=localStorage.getItem('favorite2');
        this.favorite2je=localStorage.getItem('favorite2je');
        this.favorite3=localStorage.getItem('favorite3');
        this.favorite3je=localStorage.getItem('favorite3je');
        this.favoritecanteen1=localStorage.getItem('favoritecanteen1');
        this.favoritecanteen2=localStorage.getItem('favoritecanteen2');
        this.favoritecanteen3=localStorage.getItem('favoritecanteen3');
        this.favoritecanteen1je=localStorage.getItem('favoritecanteen1je');
        this.favoritecanteen2je=localStorage.getItem('favoritecanteen2je');
        this.favoritecanteen3je=localStorage.getItem('favoritecanteen3je');



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
      line-height: .6rem;
      font-size: .3rem;
      font-family: Georgia, serif;

    }

  }
</style>
