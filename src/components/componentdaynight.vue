<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/吃/1.png" ></div>
    <div class="text" >
      <div class="common-div-css" style="margin-top: 2rem;">
        <span>最早</span>到图书馆的时间:<br/>
        <span>{{this.studentinfo.earliesttime}}</span>
        <br/>
        <div>
          <span>最晚</span>到图书馆的时间:<br/>
          <span>{{this.studentinfo.latesttime}}</span>
        </div>
        <div style="margin-top: 0rem">读书的意义，<span>不在于</span>我们看了什么，
          <br/>而在于它使我们变成<span>更好</span>的自己。</div>
      </div>
      <img src="../../static/images/毕业生/吃/2.png" style="position:absolute;top: 10rem;left: 1rem;right: 0;bottom: 0;">
     <!-- <p style="margin-top: 0rem; margin-left: 0rem; padding: 2rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">
        最早到图书馆的时间:{{this.studentinfo.earliesttime}}
      </p>
      <p style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">最晚到图书馆的时间: {{this.studentinfo.latesttime}}</p>-->

    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="../../static/images/毕业生/14left.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/图书馆篇logo.png" width="400" height="600"></div>
  </div>

</template>

<script>
    export default {
        name: "componentdaynight",
      data(){
        return {
          index:0,
          xh:'',
          studentinfo:{
            latesttime: '',
            accessnumber:'',
            firstaccess:'',
            earliesttime:'',
            xh :'',


          },
        }
      },
      mounted(){
        this.selectstudentinfo();
      },
      methods:{
        selectstudentinfo(){
          // let id=this.account;
          this.xh=this.$route.query.xh;
          let id=this.xh;
          this.$ajax.get('http://10.199.180.242:8080//t_student_lib_access/findByXh?Xh='+id)
            .then(response=>{
              // this.result = response.data;
              console.log(response.data);
              this.studentinfo.latesttime = response.data.latesttime;
              this.studentinfo.xh=response.data.xh;
              this.studentinfo.accessnumber=response.data.accessnumber;
              this.studentinfo.firstaccess=response.data.firstaccess;
              this.studentinfo.xbzs=response.data.xbzs;
              this.studentinfo.earliesttime=response.data.earliesttime;

            }).catch(function (err) {
            console.log(err);
          })
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

</style>
