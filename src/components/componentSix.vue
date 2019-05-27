<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/著作篇图片.png" width="400" height="600"></div>
    <div class="text" >
      <p style="margin-top: -2rem; margin-left: -3rem; padding: 5rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">研究生
      <p>
      <p style="margin-top: -6rem; margin-left: 0rem; padding: 2rem">一路走过汗水都变为成果 <p>
      <p style="margin-top: -4rem; margin-left: 0rem; padding: 2rem">
        参加 {{this.studentinfo.projectnumber}}个科研项目
        完成{{this.studentinfo.projectnumber}} 篇论文
      </p>



    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/著作篇.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
  </div>

</template>

<script>
    export default {
        name: "componentSix",
      data(){
        return {
          index:0,
          xh:'',
          studentinfo:{
           papernumber: '',

            projectnumber:'',

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
          this.$ajax.get('http://10.199.180.242:8080/T_student_Research/findByXh?Xh='+id)
            .then(response=>{
              // this.result = response.data;
              console.log(response.data);
              this.studentinfo.papernumber = response.data.papernumber;
              this.studentinfo.projectnumber=response.data.projectnumber;

            }).catch(function (err) {
            console.log(err);
          })
        }
      },
    }
</script>

<style lang="scss" scoped>
  .container {
    background-color: #F3F3F3;
    background-size: cover;
    text-align: center;
    .img {
      width: 7rem;
      margin: .6rem 0;
    }
    .text{
      line-height:0.8rem;
      font-size: .5rem;
      font-family: Georgia, serif;

    }
  }

</style>
