<template>
  <div class="container">

    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/学业篇图片4 .png" width="400" height="600"></div>
    <div class="text" >
      <div class="common-div-css" style="line-height:0.7rem;width: 30px;word-wrap: break-word;left:20%;margin-top: 2rem;">
        <span >十年后，</span>
      </div>
      <div class="common-div-css" style="margin-top: 5rem;left:20%;">
        请你回来坐坐
        <div>满满的回忆~</div>
        <br/>
        留下最多回忆的教室：<br/><span>{{this.studentinfo.classroom}}</span><br/>
        在这里上课<span>{{this.studentinfo.coursenumber}}</span>次

      </div>
    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/学业篇4左.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/学业篇左上角logo.png" width="400" height="600">
    </div>
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
  @import '../../static/css/commdiv.css';
  .container{
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#D8CDE2), to(#B4D6F7));
    background-size:cover;
    //padding:.8rem 0;


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

