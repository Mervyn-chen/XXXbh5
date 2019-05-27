<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/阅读经历图片.png" width="400" height="600"></div>
    <div class="text" >
      <p style="margin-top: 2rem; margin-left: 0rem; padding: 1.7rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">
        借阅的第一本书： {{this.studentinfo.firstbooktime}}
      <p style="margin-top: -3rem; margin-left: 0rem; padding: 1.7rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s"> 书名:{{this.studentinfo.firstbook}}
      </p>
      <p style="margin-top: -3.5rem; margin-left: 0rem; padding: 1.5rem">最喜欢的书目类型：{{this.studentinfo.booktype}} </p>
      <p style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">
        借阅 {{this.studentinfo.booktypenum}}本此类型图书
        <p style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">
      在校总计饱览群书 {{this.studentinfo.booknumber}}本
        <p   style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">超过{{this.studentinfo.lendpm}} %的毕业生
        <!--大数据统计-->
        <!--同届本学霸最喜欢的书目类型:-->
        <!--在校总计饱览群书 本-->
      </p>
    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/阅读经历logo.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/图书馆篇logo.png" width="400" height="600"></div>
  </div>
</template>

<script>
    export default {
        name: "componentTwive",
      data(){
        return {
          index:0,
          xh:'',
          studentinfo:{
            xh: '',
            firstbooktime:'',
            firstbook:'',
            booknumber:'',
            booktype:'',
            booktypenum :'',
            shortesttime:'',
            sbook:'',
            longesttime:'',
            lbook:'',
            averagetime:'',
            lendpm:'',


          },
        }
      },
    mounted(){
      this.selectstudentinfo();
    },
    methods:{
      selectstudentinfo(){
        // let id=this.account;
        this.xh=localStorage.getItem('xh');
        let id=this.xh;
        this.$ajax.get('http://10.199.180.242:8080//t_student_lib_borrowing/findByXh?Xh='+id)
          .then(response=>{
            // this.result = response.data;
            console.log(response.data);
            this.studentinfo.firstbooktime = response.data.firstbooktime;
            this.studentinfo.xh=response.data.xh;
            this.studentinfo.booknumber=response.data.booknumber;
            this.studentinfo.booktype=response.data.booktype;
            this.studentinfo.booktypenum=response.data.booktypenum;
            this.studentinfo.shortesttime=response.data.shortesttime;
            this.studentinfo.sbook=response.data.sbook;
            this.studentinfo.longesttime=response.data.longesttime;
            this.studentinfo.lbook=response.data.lbook;
            this.studentinfo.averagetime=response.data.averagetime;
            this.studentinfo.lendpm=response.data.lendpm;
            this.studentinfo.firstbook=response.data.firstbook;

          }).catch(function (err) {
          console.log(err);
        })
      }
    },

    }
</script>


<style lang="scss" scoped>
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
