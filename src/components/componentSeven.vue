<template>
  <div class="container">
    <div style="position:absolute;top: 1rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/考试篇图案.png" width="400" height="600"></div>
    <div class="text" >
      <p style="margin-top: 0rem; margin-left: 0rem; padding: 2rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">那些曾经让你泪流满面的考试
      <p>
      <p style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">参加 {{this.studentinfo.coursenumber}}科考试 <p>
      <p style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">
        {{this.studentinfo.course}}课程成绩最好
        得分:{{this.studentinfo.score}}
      <p v-show="dialogVisible0" style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">  英语四级考试{{this.studentinfo.cet4}} 分 </p>
      <p v-show="dialogVisible1" style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">英语六级考试{{this.studentinfo.cet6}} 分
      </p>



    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/学业-考试篇.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
  </div>

</template>

<script>
    export default {
        name: "componentSeven",
      data(){
        return {
          index:0,
          xh:'',
          dialogVisible0:true,
          dialogVisible1:true,
          studentinfo:{
            computerlevel: '',

            xh:'',
            cet4:'',
            cet6:'',
            course:'',
            coursenumber:'',
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
          this.$ajax.get('http://10.199.180.242:8080//T_student_jw_exam/findByXh?Xh='+id)
            .then(response=>{
              // this.result = response.data;
              console.log(response.data);
              this.studentinfo.computerlevel = response.data.computerlevel;
              if(response.data.cet4==null){
                this.dialogVisible0=false;

              }
              else{
              this.studentinfo.cet4=response.data.cet4;
              }
              if(response.data.cet6==null){
                this.dialogVisible1=false;

              }
              else{

              this.studentinfo.cet6=response.data.cet6;}
              this.studentinfo.course=response.data.course;
              this.studentinfo.coursenumber=response.data.coursenumber;
              this.studentinfo.score=response.data.score;

            }).catch(function (err) {
            console.log(err);
          })
        }
      },
    }
</script>


<style lang="scss" scoped>
  .container {
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#D8CDE2), to(#B4D6F7));
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
