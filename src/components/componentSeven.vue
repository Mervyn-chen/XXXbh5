<template>
  <div class="container">
    <div style="position:absolute;top: 2.5rem;left: 0rem;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/11117.png" width="400" height="600"></div>
    <div class="text" >
      <div class="common-div-css" style="margin-top: 3rem" v-show="sevenvisible1">
        系统未采集到您的信息……
      </div>

      <div class="common-div-css" style="margin-top: 2rem" v-show="sevenvisible2">
        那些痛并快乐的日子 ...
        <br/>
        参加考试<span>{{this.studentinfo.coursenumber}}</span>门
        <div v-show="sevenvisible3">最好成绩<span>{{this.studentinfo.score}}</span>分 <span>{{this.studentinfo.course}}</span></div>
        <br/>
        <div v-show="dialogVisible0">
          英语四级考试<span>{{this.studentinfo.cet4}}</span>分
        </div>
        <div v-show="dialogVisible1">
          英语六级考试<span>{{this.studentinfo.cet6}}</span>分
      </div>
      </div>
    </div>
    <div style="position:absolute;top:2.5rem ;left: -6rem;right: 0;bottom: 0;">
      <img src="../../static/images/sidepage/5.png" ></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
  </div>

</template>

<script>
    export default {
        name: "componentSeven",
      data(){
        return {
          index:0,
          xh:'',
          sevenvisible1:false,
          sevenvisible2:true,
          dialogVisible0:true,
          dialogVisible1:true,
          sevenvisible3:true,
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
          console.log(this.xh)
          let id=this.xh;
          this.$ajax.get('http://localhost:8080/t_student_jw_exam/findByXh?Xh='+id)
            .then(response=>{
              // this.result = response.data;
              //console.log(response.data);

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
              if(response.data.coursenumber==null)
              {
                this.sevenvisible1=true;
                  this.sevenvisible2=false;
              }else{
                this.sevenvisible1=false;
                this.sevenvisible2=true;
              }
              if(response.data.score==0){
                this.sevenvisible3=false;
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
