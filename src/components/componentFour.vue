<template>
  <div class="container">
    <div style="position:absolute;top: 1rem ;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/学业篇图片3 .png" width="400" height="600"></div>
    <div class="text" >
      <p style="margin-top: -1rem;  padding: 1.3rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">那些年，遇到的老师们
        {{this.studentinfo.sumteacher}}个老师为你上课
        <br>授业最多的老师：{{this.studentinfo.favoriteteacher}}
        <br>选过 {{this.studentinfo.coursenumber}}次他/（她）的课
        {{this.studentinfo.teacherlikeyou}}老师很欣赏你,

      他（她）的《{{this.studentinfo.course}}》课程
        给你打了{{this.studentinfo.score}}分</p>



    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/学业篇3左logo.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
  </div>
</template>
<script>
export default {
    name:'componentFour',
    data(){
        return {
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
      let id=this.xh;
      this.$ajax.get('http://10.199.180.242:8080/t_student_jw_teacher/findByXh?Xh='+id)
        .then(response=>{
          // this.result = response.data;
          console.log(response.data);
          this.studentinfo.course=response.data.course;
          this.studentinfo.coursenumber=response.data.coursenumber;
          this.studentinfo.favoriteteacher=response.data.favoriteteacher;
          this.studentinfo.sumteacher=response.data.sumteacher;
          this.studentinfo.teacherlikeyou=response.data.teacherlikeyou;
          this.studentinfo.score=response.data.score;
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
    .container {
      background:-webkit-gradient(linear, 0 0, 0 100%, from(#D8CDE2), to(#B4D6F7));
      background-size: cover;
      padding: .8rem 0;

      .text {
        line-height: 0.8rem;
        font-size: .35rem;
        font-family: Georgia, serif;

      }


    }
</style>
