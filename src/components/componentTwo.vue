<template>
    <div class="container" @focus="selectstudentinfo">
      <div style="position:absolute;top: -0.5rem;left: -0.5rem;right: 0;bottom: 0;">
        <img src="/static/images/毕业生/欢迎来到东华.png" width="400" height="600"></div>


        <div class="text" ><!--SimHei   Ink Free   cursive-->

            <div class="common-div-css" style="margin-top: 3rem">
              <div>   <!--663300-->
                <span>{{this.studentinfo.xm}}
                </span>,
                你于
              </div>
              <div>
                <span>
                  {{this.studentinfo.rxrq}}
                </span>
              </div>

              <span>第</span>一次踏进东华校园
            </div>

        </div>


      <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
        <img src="/static/images/毕业生/学业篇左边logo1.png" width="400" height="600"></div>
      <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
        <img src="/static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
      <div style="position:absolute;top: 3rem;left: -0.5rem;right: 0;bottom: 0;"><img src="/static/images/毕业生/学业篇图片1.png" width="400" height="600"></div>

    </div>
</template>
<script >
    export default {
        name:'componentTwo',
        data(){
            return {
              result:'',
              xm:'',
              xh:'',
              ssname:'',
              studentinfo:{
                xm: '',
                xh: '',
                ds:'',
                nj:'',
                studentid:'',
                studentname:'',
                xslb:'',
                zymc:'',
                xb:'',

              },
            }
        },
      mounted(){
          this.selectstudentinfo();
          this.xm=localStorage.getItem('xm');
          console.log(this.xm)
        this.xh=localStorage.getItem('xh');
        console.log(this.xh );

      },
      watch:{
        result:function () {
          console.log(this.result);
          localStorage.setItem('xm', this.result.studentname);
          localStorage.setItem('xh',this.result.studentid);
          localStorage.setItem('ssname',this.result.ssname);



        }
      },
      methods:{
        selectstudentinfo(){
          // let id=this.account;

          let id=150940333;
          console.log(id);
          this.$ajax.get('http://10.199.180.242:8080/t_student_info/findByXh?Xh='+id)
            .then(response=>{
            this.result = response.data;
             console.log(response.data);
             this.studentinfo.rxrq = response.data.enteryear;
             this.studentinfo.xm=response.data.studentname;
             this.studentinfo.xb=response.data.xb;
             this.studentinfo.xslb=response.data.xslb;
             this.studentinfo.nj=response.data.nj;

          }).catch(function (err) {
            console.log(err);
          })
        }
      },

        computed:{
            addAnimation(){
                if (this.$store.state.hasAnimated.name=='touch1' && this.$store.state.hasAnimated.hasAnimats) {
                    return true
                }else{
                    return false
                }
            },
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
            height: 5.7rem;
            margin:.6rem 0;
            // width:100%;
        }
        .text{
            color: #707070;
            line-height: .8rem;
            font-size: .35rem;
          font-family: Georgia, serif;

        }
      .item-text {
        width: 18rem;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        position: absolute;
        top: 24rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
      }
    }
</style>
