<template>
  <div class="container">
    <div style="position:absolute;top: -1rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/借阅时长图片.png" width="380" height="650"></div>
    <div class="text" style="line-height:0.8rem;" >
      <div class="common-div-css" style="margin-top: 1.5rem;"v-show="thirteenvisible2">
        您借阅过一本书:<br/>
        <span>《{{this.studentinfo.shortesttime}}》</span>
        <div>
          借阅时间：<span>{{this.studentinfo.sbook}}</span>天
        </div>

      </div>
      <div class="common-div-css" style="margin-top: 3rem;"v-show="thirteenvisible3">
        系统未采集到你的借阅信息。

      </div>

      <div class="common-div-css" style="margin-top: 1.5rem;"v-show="thirteenvisible1">
        陪伴时间最短的一本书:<br/>
        <span>《{{this.studentinfo.shortesttime}}》</span>
        <div>
          借阅时间：<span>{{this.studentinfo.sbook}}</span>天
        </div>


        <span>陪伴</span>时间最长的一本书:<br/><span>《{{this.studentinfo.longesttime}}》</span>
        <br/>
        借阅时间 ：<span>{{this.studentinfo.lbook}}</span>天<br/>
        平均借阅时间：<span>{{this.studentinfo.averagetime}}</span>天
        <br/>
      </div>
    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/借阅时长.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/图书馆篇logo.png" width="400" height="600"></div>
  </div>

</template>

<script>
    export default {
        name: "componentthirteen",
      data(){
        return {
          thirteenvisible1:true,
          thirteenvisible2:false,
          thirteenvisible3:false,
          index:0,
          xh:'',
          studentinfo:{
            xh: '',
            firstbooktime:'',
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
              if(response.data.longesttime==response.data.shortesttime&&response.data.shortesttime!=null)
              {
                this.thirteenvisible2=true;
                this.thirteenvisible1=false;
              }
              else if(response.data.longesttime==null&&response.data.shortesttime==null)
              {
                this.thirteenvisible2=false;
                this.thirteenvisible1=false;
                this.thirteenvisible3=true;
              }
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
/*    .text{
      line-height:0.8rem;
      font-size: .35rem;
      font-family: Georgia, serif;

    }*/
  }

</style>
