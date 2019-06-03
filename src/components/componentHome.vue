<template>
  <div class="container">

    <div style="position:absolute;top: 7.5rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/宿舍/组%2010774.png" >

    </div>
    <div class="text" style="padding: 2rem" >
      <div class="common-div-css" style="margin-top: -1rem">
        <div v-show="homevisible">校内久居地:<span><br/>{{this.ssname}}</span><br/></div>
        <!--洗澡次数:<span>{{this.bathnum}}</span>-->
        <!--<br/>-->
        <!--个人清洁排名<span>{{this.bathpm}}</span><br/>-->
        <!--个人清洁指数<span>{{this.qjzs}}||{{this.sm}}</span><br/>-->
        同吃同住的室友们<br/>
        <div>四年的青春，四年的感情，给了各自珍惜的理由</div>
        <br/>


        快在<span>留言板</span>写下你们的共同回忆吧

      </div>

    <!--  <p style="margin-top: 0rem; padding: 0.1rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
    class="delay-0.5s">校内久居地: {{this.ssname}}宿舍</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
      class="delay-1s">洗澡次数{{this.bathnum}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
      class="delay-1.5s">个人清洁排名{{this.bathpm}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
      class="delay-1.5s">个人清洁指数0{{this.qjzs}}||{{this.sm}}</p>
-->
    </div>
    <div style="position:absolute;top:3rem ;left: -6rem; right: 0;bottom: 0;"><img src="/static/images/毕业生/宿舍/组 10775.png" ></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/生活篇.png" width="400" height="600"></div>
  </div>

</template>

<script>
    export default {
        name: "componentHome",
      data(){
        return {
          index:0,
          result:{
            t_ykt_bath_pm:{
              bathnum:'', //洗浴次数
              bathpm:'',//洗浴排名
              qjzs:'',// 清洁指数
              sm:'',//说明
            },
            health_pm:{
              kbcs:'',// 看病次数
              kbcspm:'',//看病次数排名
              csjk:'',// 看病次数健康指数
              kbfy:'',// 看病费用
              kbfypm:'',//看病费用排名
              fyjk:'', //看病费用健康指数
              sm:'',//说明

            },
            t_ykt_bk_pm:{
              bknum:'', //补卡次数
              bkpm:'',//补卡排名
              careless:'',//粗心指数
              carelessms:'',//粗心描述
            },
            t_ykt_bk_time:{
              longestday:'', //陪伴最长时间
              shortestday:'',//陪伴最短时间

            },
            t_ykt_consume:{
              totalconsume:'', //总体消费金额
              consume1:'',//大一年消费金额
              consume2:'',//大二年消费金额
              consume3:'',//大三年年消费金额
              consume4:'', //大四年消费金额   四年消费做个统计图
            },
            t_ykt_consume_pm:{
              pm:'',//消费排名
              total:'',//消费额
              totalconsumepm:'',// 总体消费排名指数

            },
            t_ykt_favorite_booth_pm:{
              favorite1:'', //第一食堂
              favorite1je:'',//第一消费金额
              favorite2:'', //第二食堂
              favorite2je:'',//第二消费金额
              favorite3:'', //第三食堂
              favorite3je:'',//第三消费金额
            },
            t_ykt_favorite_canteen_pm:{
              favorite1:'', //第一食堂
              favorite1je:'',//第一消费金额
              favorite2:'', //第二食堂
              favorite2je:'',//第二消费金额
              favorite3:'', //第三食堂
              favorite3je:'',//第三消费金额
            },
            t_ykt_meal_consume:{
              breakfastnum:'',//早餐次数
              breakfasttotal:'',//早餐总额
              breakfastavg:'',//早餐平均,
              lunchnum :'',//午餐次数
              lunchtotal:'', //午餐总额
              lunchavg :'',//午餐平均
              dinnernum :'',//晚餐次数
              dinnertotal :'',//晚餐总额
              dinneravg:''// 晚餐平均

            },


          },
          ssname:'',
          homevisible:true,
          bathnum:'', //洗浴次数
          bathpm:'',//洗浴排名
          qjzs:'',// 清洁指数
          sm:'',//说明
          totalconsume:'',
          xh :'',
          reissuetime:'',



        }
      },
      mounted() {
          this.selectstudentinfo();
        // this.bathnum=localStorage.getItem('bathnum');
        // this.bathpm=localStorage.getItem('bathpm');
        // this.qjzs=localStorage.getItem('qjzs');
        // this.sm=localStorage.getItem('sm');
         this.ssname=localStorage.getItem('ssname')
        // if(this.ssname==null)
        // {
        //   this.homevisible=false;
        // }





      },
      methods:{


        selectstudentinfo(){
          // let id=this.account;

          this.xh=this.$route.query.xh;
          let id=this.xh;
          console.log(id);
          this.$ajax.get('http://10.199.180.242:8080//yktInfo/findByXh?Xh='+id)
            .then(response=>{
              this.result = response.data;
              this.bathnum=this.result.t_ykt_bath_pm.bathnum;
              this.bathpm=this.result.t_ykt_bath_pm.bathpm;
              this.sm=this.result.t_ykt_bath_pm.sm;
              this.qjzs=this.result.t_ykt_bath_pm.qjzs
              if(this.ssname==null)
              {
                this.homevisible=false;
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
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#FAACA8), to(#717EA2));
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

