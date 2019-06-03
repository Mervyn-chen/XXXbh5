<template>
  <div class="container">

    <div style="position:absolute;top: 8rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/校医院/组 10776.png" >
      <img src="/static/images/毕业生/校医院/组 10741.png" >

    </div>
    <div class="text" style="padding: 2rem" >
      <div class="common-div-css">
        <span>{{this.xm}}，</span>
        <div>
          你去过{{this.kbcs}}次<span>校医院</span>
        </div>
        <span>消费金额</span>{{this.kbfy}}元<br/>
        <br/>
        健康是一种自由&#45;&#45;亚美路
      </div>

     <!-- <p style="margin-top: -1.5rem; padding: 0.1rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-0.5s">{{this.xm}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1s">你去过次校医院{{this.kbcs}}次
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1s">排名{{this.kbcspm}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1.5s">消费金额{{this.kbfy}}
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1s">排名{{this.kbfypm}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1.5s">健康指数{{this.csjk}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1.5s">费用指数{{this.fyjk}} {{this.healthsm}}</p>


      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1.5s">健康是一种自由&#45;&#45;亚美路</p>
-->
    </div>
    <div style="position:absolute;top:2.5rem ;left: -6rem; right: 0;bottom: 0;"><img src="/static/images/毕业生/校医院/组 10775.png" ></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/生活篇.png" width="400" height="600"></div>
  </div>

</template>


<script>
    export default {
        name: "componentHospital",

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
          kbcs:'',// 看病次数
          kbcspm:'',//看病次数排名
          csjk:'',// 看病次数健康指数
          kbfy:'',// 看病费用
          kbfypm:'',//看病费用排名
          fyjk:'', //看病费用健康指数
          healthsm:'',//看病说明
          xh :'',

          xm:''



        }
      },
      mounted() {
          this.selectstudentinfo();
        // this.kbcs=localStorage.getItem('kbcs');
        // this.kbcspm=localStorage.getItem('kbcspm');
        // this.csjk=localStorage.getItem('csjk');
         this.xm=localStorage.getItem('xm')
        // this.kbfy=localStorage.getItem('kbfy');
        // this.kbfypm=localStorage.getItem('kbfypm');
        // this.fyjk=localStorage.getItem('fyjk');
        // this.healthsm=localStorage.getItem('healthsm');



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

              this.csjk=this.result.health_pm.csjk;
              this.fyjk=this.result.health_pm.fyjk;
              this.kbfy=this.result.health_pm.kbfy;
              this.kbcs=this.result.health_pm.kbcs;
              this.kbcspm=this.result.health_pm.kbcspm;
              this.kbfypm=this.result.health_pm.kbfypm;
              this.healthsm=this.result.health_pm.sm




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
