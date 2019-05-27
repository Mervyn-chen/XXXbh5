<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/学业篇图片4 .png" width="400" height="600"></div>
    <div class="text" >
      <p style="margin-top: -2rem; margin-left: -3rem; padding: 5rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">十年后，
        <p>
        <p style="margin-top: -6rem; margin-left: 0rem; padding: 2rem">请你回来坐坐
        满满的回忆~<p>
      <p style="margin-top: -4rem; margin-left: 0rem; padding: 2rem">
        留下最多回忆的教室：{{this.studentinfo.classroom}}
        在这里上课 {{this.studentinfo.coursenumber}}次
        </p>

    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/学业篇4左.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
  </div>

</template>

<script>
    export default {
        name: "componentFive",
      data(){
        return {
          index:0,
          studentinfo:{
            classroom: '',

            coursenumber:'',

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
          this.$ajax.get('http://10.199.180.242:8080/t_student_jw_classroom/findByXh?Xh='+id)
            .then(response=>{
              // this.result = response.data;
              console.log(response.data);
              this.studentinfo.classroom = response.data.classroom;
              this.studentinfo.coursenumber=response.data.coursenumber;

            }).catch(function (err) {
            console.log(err);
          })
        }
      },





    }
</script>

<style lang="scss" scoped>
  .container{
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#D8CDE2), to(#B4D6F7));
    background-size:cover;
    padding:.8rem 0;


    .text{
      line-height:0.8rem;
      font-size: .35rem;
      font-family: Georgia, serif;

    }

  }
  /*.scale-img{*/
    /*height:1rem;*/
    /*margin:.1rem;*/
  /*}*/
</style>

