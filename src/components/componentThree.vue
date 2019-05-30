<!--import '../static/css/commdiv.css'-->
<template>
    <div class="container">
      <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
        <img src="/static/images/毕业生/学院篇2图片.png" width="400" height="650"></div>
        <div class="text " style="padding: 1.5rem;line-height:1rem">
          <div>
              <div class="common-div-css" style="left: 25%;">还记得第一节课和最后一节课吗?
                <div>
                  第一节课：<br/><span>{{this.studentinfo.firstcourse}}</span>
                </div>
                <div>
                  最后一节课：<br/><span>{{this.studentinfo.lastcourse}}</span>
                </div>
                <div>
                  合计上课：<span>{{this.studentinfo.sumcourse}}</span>
                </div>
              </div>
          </div>
        </div>
      <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/学业篇2左边logo.png" width="400" height="600"></div>
      <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
        <img src="/static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
    </div>
</template>
<link rel="stylesheet" href="style.css" />
<script>
export default {
    name:'componentThree',
  data(){
    return {
      studentinfo:{
        firstcourse: '',
        sumcourse: '',
        sumscore:'',
        lastcourse:''


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
      this.$ajax.get('http://10.199.180.242:8080/t_student_jw_studies/findByXh?Xh='+id)
        .then(response=>{
          // this.result = response.data;
          //console.log(response.data);
          this.studentinfo.firstcourse = response.data.firstcourse;
          this.studentinfo.lastcourse=response.data.lastcourse;
          this.studentinfo.sumscore=response.data.sumscore;
          this.studentinfo.sumcourse=response.data.sumcourse;
        }).catch(function (err) {
        console.log(err);
      })
    }
  },

  computed:{
        addAnimation(){
            if (this.$store.state.hasAnimated.name=='touch2' && this.$store.state.hasAnimated.hasAnimats) {
                return true
            }else{
                return false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
  @import '../../static/css/commdiv.css';
    .container{
        //background-color: #F3F3F3 ;
      background:-webkit-gradient(linear, 0 0, 0 100%, from(#D8CDE2), to(#B4D6F7));
        background-size: cover;
        text-align: center;
        .img{
            width:7rem;
            margin:.6rem 0;
        }
      .text{
        line-height: .2rem;
        font-size: .35rem;
        font-family: Georgia, serif;

      }


    }
</style>
