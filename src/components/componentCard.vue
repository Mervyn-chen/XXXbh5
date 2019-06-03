<template>
  <div class="container">
    <div style="position:absolute;top: -1rem;left: 0rem;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/灯.png" >


    </div>
    <div style="position:absolute;top: 8rem;left: 0rem;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/老虎.png" >

    </div>
    <div class="text" style="padding: 2rem" >
      <div class="common-div-css">
        <span>一卡通</span>补办<span>{{this.bknum}}</span>次
        <br/>
        <br/>
        粗心指数：<span>{{this.careless}}<br/>{{this.carelessms}}</span>
        <div>
          最长陪伴：<span>{{this.longestday}}天</span>
        </div>
        <div v-show="cardvisible1">最短陪伴：<span>{{this.shortestday}}天</span></div>
      </div>

      <!--<p style="margin-top:1rem; ":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-0.5s">一卡通补办 {{this.bknum}}次</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1s">粗心指数：0{{this.careless}}{{this.carelessms}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-1.5s">最长陪伴{{this.longestday}}天</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}"
         class="delay-2s">最短陪伴{{this.shortestday}}天</p>-->



    </div>
    <div style="position:absolute;top:2.5rem ;left: -6rem;right: 0;bottom: 0;">
      <img src="../../static/images/sidepage/11.png" >

    </div>
    <div style="position:absolute;top:3rem ;left: -6rem;right: 0;bottom: 0;">
      <img src="../../static/images/sidepage/1313.png" >
    </div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/生活篇.png" width="400" height="600"></div>
  </div>


</template>

<script>
    export default {
        name: "componentCard",
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
          cardvisible1:true,
          vardvisible2:false,

          bknum:'', //补卡次数
          bkpm:'',//补卡排名
          careless:'',//粗心指数
          carelessms:'',//粗心描述
          longestday:'', //陪伴最长时间
          shortestday:'',//陪伴最短时间

          xh :'',
          reissuetime:'',



        }
      },
      mounted() {
          this.selectstudentinfo();
        // this.longestday=localStorage.getItem('longestday');
        //
        //
        // this.shortestday=localStorage.getItem('shortestday');
        // this.bkpm=localStorage.getItem('bkpm');
        // this.bknum=localStorage.getItem('bknum');
        // this.careless=localStorage.getItem('careless');
        // this.carelessms=localStorage.getItem('carelessms')
        // if(this.bknum==0)
        // {
        //   this.cardvisible1=false;
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
              console.log(response.data);
              this.result = response.data;
              this.bknum= this.result.t_ykt_bk_pm.bknum;
              this.bkpm= this.result.t_ykt_bk_pm.bkpm;
              this.careless=this.result.t_ykt_bk_pm.careless;
              this.carelessms=this.result.t_ykt_bk_pm.carelessms;
              this.longestday=this.result.t_ykt_bk_time.longestday;
              this.shortesttime=this.result.t_ykt_bk_time.shortestday;
              if(this.bknum==0)
              {
                this.cardvisible1=false;
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
