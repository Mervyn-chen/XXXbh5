<template>
  <div class="container">
    <div style="position:absolute;top: 0rem ;left: 6rem;right: 0;bottom: 0;">
      <img src="../../static/images/sidepage/1112.png" ></div>
    <div class="text" >
        <div class="common-div-css" style="margin-top: 2.4rem;left:23%">
          <div v-show="foruvisible2" style="margin-top: 3rem"> 系统未采集到你的信息</div>
          <div v-show="fourvisibel1">
          <div>
            有<span>{{this.studentinfo.sumteacher}}</span>
            位老师为你上课
          </div>
          <div>
            授业最多的老师：<span>{{this.studentinfo.favoriteteacher}}</span>
          </div>
          <span>{{this.studentinfo.teacherlikeyou}}</span>老师很欣赏你
          <br/>
          他（她）的<span>《{{this.studentinfo.course}}》</span>课程
          得分<span>{{this.studentinfo.score}}</span>
          <div v-show="visible1"><span>你是潜力股！继续加油！</span></div>
          </div>
        </div>
      <!--<div v-show="visible1"><span>你是潜力股！继续加油！</span></div>-->
    </div>
    <div style="position:absolute;top: 9rem ;left: 1.5rem;right: 0;bottom: 0;">
      <img src="../../static/images/sidepage/1213.png" ></div>
    <div style="position:absolute;top:2.5rem ;left: 0.35rem;right: 0;bottom: 0;">
      <img src="../../static/images/sidepage/3.png" ></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
  </div>
</template>
<script>
export default {
    name:'componentFour',
    data(){
        return {
          fourvisibel1:true,
          foruvisible2:false,
          visible1:false,
            index:0,
          studentinfo:{
            xh: '',
            course: '',
            coursenumber:'',
            favoriteteacher:'',
            sumteacher:'',
            teacherlikeyou:'',
            score:'',

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
      console.log(this.xh)
      let id=this.xh;
      this.$ajax.get('http://localhost:8080/t_student_jw_teacher/findByXh?Xh='+id)
        .then(response=>{
          // this.result = response.data;
          //console.log(response.data);
          this.studentinfo.course=response.data.course;
          this.studentinfo.coursenumber=response.data.coursenumber;
          this.studentinfo.favoriteteacher=response.data.favoriteteacher;
          this.studentinfo.sumteacher=response.data.sumteacher;
          this.studentinfo.teacherlikeyou=response.data.teacherlikeyou;
          this.studentinfo.score=response.data.score;
          if(response.data.sumteacher==null)
          {
            this.fourvisibel1=false;
            this.foruvisible2=true;
          }
          if(this.studentinfo.score<70){
           this.visible1=true;

          }
        }).catch(function (err) {
        console.log(err);
      })
    }
  },
    // mounted(){
    //     var list = document.getElementsByClassName('list')[0];
    //     $('.list').animate({"scrollTop":".2rem"},100);
    //     var timer = null;
    //     var canScroll  = false;
    //     var currentTop = $('.main').position().top;
    //     $('.list').scroll(function(){
    //         clearTimeout(timer);
    //         timer = null;
    //         timer = setTimeout(function(){
    //             var scrollTop =  $('.list').position().top;
    //             var timerTop = null,timerBottom = null;
    //
    //             if (list.scrollTop === 0 && canScroll == false && currentTop == scrollTop) {
    //                 clearTimeout(timer)
    //                 timer = null;
    //                 canScroll =true;
    //                 timerTop = setTimeout(function(){
    //                     $("#markList").animate({"scrollTop":5},100);
    //                     canScroll =false;
    //                     clearTimeout(timerTop)
    //                     timerTop = null;
    //                     clearTimeout(timer)
    //                     timer = null;
    //                 },100);
    //             } else if((list.scrollHeight - list.clientHeight) == list.scrollTop){
    //                canScroll = true;
    //                clearTimeout(timerBottom);
    //                timerBottom = null;
    //                timerBottom = setTimeout(function(){
    //                    let num = $('.list').height() * 0.9;
    //                    $('.list').animate({scrollTop:num},100);
    //                    canScroll = false;
    //                    clearTimeout(timerBottom);
    //                    timerBottom = null;
    //                    clearTimeout(timer)
    //                    timer = null;
    //                },100)
    //             }else{
    //                 clearTimeout(timer);
    //                 timer = null;
    //             }
    //         },100)
    //     })
    // }
}
</script>
<style lang="scss" scoped>
  @import '../../static/css/commdiv.css';
    .container {
      background:-webkit-gradient(linear, 0 0, 0 100%, from(#D8CDE2), to(#B4D6F7));
      background-size: cover;
     // padding: .1rem 0;

      .text {
        line-height: 0.8rem;
        font-size: .35rem;
        font-family: Georgia, serif;

      }

    }
</style>
