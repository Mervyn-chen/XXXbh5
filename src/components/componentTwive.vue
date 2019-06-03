<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/阅读经历图片.png" width="400" height="600"></div>
    <div class="text" >
      <div class="common-div-css" style="margin-top: 5rem;" v-show="twelvevisibe1">
        “读一本好书，就像和许多高尚的人谈话”——歌德，与君共勉！
      </div>>
      <div class="common-div-css" style="margin-top: 2rem;" v-show="twelvevisible2">
        <span>{{this.studentinfo.firstbooktime}}</span> 借阅第一本书：<br/>
        <!--时间:<span>{{this.studentinfo.firstbooktime}}</span>，<br/>-->
        书名《<span>{{this.studentinfo.firstbook}}》</span>
        <div>
          最喜欢的书目类型：<span>{{this.studentinfo.booktype}}</span><br/>
          借阅<span>{{this.studentinfo.booktypenum}}</span>本此类型图书
        </div>
        在校总计饱览群书<span>{{this.studentinfo.booknumber}}</span>本
        <div>
          超过<span>{{this.studentinfo.lendpm}}</span>%的毕业生
        </div>
      </div>
    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="../../static/images/毕业生/阅读经历logo.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/图书馆篇logo.png" width="400" height="600"></div>
  </div>
</template>

<script>
    export default {
        name: "componentTwive",
      data(){
        return {
          twelvevisibe1:false,
          twelvevisible2:true,
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
        this.xh=this.$route.query.xh;
        let id=this.xh;
        this.$ajax.get('http://10.199.180.242:8080//t_student_lib_borrowing/findByXh?Xh='+id)
          .then(response=>{
            // this.result = response.data;
            console.log(response.data);
            if(response.data.shortesttime==null&&response.data.longesttime==null&&response.data.averagetime==null)
            {
              this.twelvevisibe1=true;
                this.twelvevisible2=false;
            }
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
