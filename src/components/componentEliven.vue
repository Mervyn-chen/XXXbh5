<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/11121.png" width="400" height="700"></div>
    <div class="text" >
      <div  class="common-div-css" style="margin-top: 3rem;">
        <div v-show="elivenvisible1"><span>{{this.studentinfo.firstaccess}}</span><br/>第一次走进东华图书馆</div>
        <div v-show="elivenvisible2">
          在图书馆埋头苦读<span>{{this.studentinfo.accessnumber}}</span>次
        </div>
        <br/>

        <span>读</span>万卷书，行万里路。
        <br/>
        你的气质里，藏着你看过的书和你走过的路。


      </div>
<!--      <p style="margin-top: 1rem; margin-left: 0rem; padding: 2rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">
      第一次进图书馆的时间:{{this.studentinfo.firstaccess}}
      <p>
      <p style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">在图书馆埋头苦读{{this.studentinfo.accessnumber}}次 <p>
      <p style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">
        &lt;!&ndash;勤奋好学超过 的毕业生&ndash;&gt;
        &lt;!&ndash;大数据统计，同届本专业学霸在图书馆埋头苦读 {{this.studentinfo.accessnumber}}次&ndash;&gt;
      </p>-->
    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="../../static/images/毕业生/图书馆篇1logo.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/图书馆篇logo.png" width="400" height="600"></div>
  </div>

</template>

<script>
    export default {
        name: "componentEliven",
      data(){
        return {
          index:0,
          xh:'',
          elivenvisible1:true,
          elivenvisible2:true,

          studentinfo:{
            latesttime: '',
            accessnumber:'',
           firstaccess:'',
            earliesttime:'',
           xh :'',


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
          this.$ajax.get('http://10.199.180.242:8080//t_student_lib_access/findByXh?Xh='+id)
            .then(response=>{
              // this.result = response.data;
              //console.log(response.data);
              this.studentinfo.latesttime = response.data.latesttime;
              this.studentinfo.xh=response.data.xh;
              this.studentinfo.accessnumber=response.data.accessnumber;
              this.studentinfo.firstaccess=response.data.firstaccess;
              this.studentinfo.xbzs=response.data.xbzs;
              this.studentinfo.earliesttime=response.data.earliesttime;
              if(response.data.firstaccess==null)
              {
               this.elivenvisible1=false;

              }
              if(response.data.accessnumber==null)
              {
                this.elivenvisible2=false;
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
