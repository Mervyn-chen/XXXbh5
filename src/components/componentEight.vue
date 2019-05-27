<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/绩点篇.png" width="400" height="600"></div>
    <div class="text" >
      <p style="margin-top: 0rem; margin-left: 0rem; padding: 2rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">听说，大学里
      有一个令人闻风丧胆的指标？
      <p>
      <p style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">平均绩点 {{this.studentinfo.gradepoint}}<p>
      <p style="margin-top: -2.5rem; margin-left: 0rem; padding: 1.5rem">
       学霸指数：{{this.studentinfo.xbzs}}{{this.studentinfo.xbsm}}
      <p style="margin-top: -2.5rem; margin-left: 0rem; padding: 1.5rem">专业年级排名：{{this.studentinfo.majorrank}}
      </p>
    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/绩点.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
  </div>

</template>

<script>
    export default {
        name: "componentEight",
      data(){
        return {
          index:0,
          xh:'',
          studentinfo:{
            xbsm: '',
            xh:'',
            gradepoint:'',
            majorrank:'',
           xbzs:'',

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
          this.$ajax.get('http://10.199.180.242:8080//t_student_jw_gradepoint/findByXh?Xh='+id)
            .then(response=>{
              // this.result = response.data;
              console.log(response.data);
              this.studentinfo.xbsm = response.data.xbsm;
              this.studentinfo.xh=response.data.xh;
              this.studentinfo.gradepoint=response.data.gradepoint;
              this.studentinfo.majorrank=response.data.majorrank;
              this.studentinfo.xbzs=response.data.xbzs;

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
