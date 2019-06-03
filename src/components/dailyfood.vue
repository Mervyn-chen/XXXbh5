<template>
  <div class="container">
    <div style="position:absolute;top: 1rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/西红柿.png" >
      <img src="/static/images/毕业生/蘑菇.png" >

    </div>
    <div style="position:absolute;top: 9rem;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/荷包蛋.png" >
      <img src="/static/images/毕业生/锅底.png" >
    </div>
    <div class="text" style="padding: 1.5rem" >
      <div class="common-div-css" style="">
        早餐平均消费:<span>{{this.Breakfastavg}}元</span>总消费<span>{{this.breakfasttotal}}</span>元
        <div>
          <span>午</span>餐平均消费:<span>{{this.Lunchavg}}元</span>总消费<span>{{this.Lunchtotal}}</span>元
        </div>
        <span>晚餐</span>平均消费:<span>{{this.Dinneravg}}元</span>总消费<span>{{this.Dinnertotal}}</span>元
        <div>
          <span>享受健康</span>早餐{{this.breakfastnum}}次
        </div>
        <span>饱食美味</span>午餐{{this.Lunchnum}}次
        <div>
          在夜宵摊
          <span>一掷千金</span>{{this.Dinnernum}}次
        </div>
      </div>
      <!--<p style="margin-top: 1rem; ":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">
      早餐平均消费:{{this.Breakfastavg}} 总消费：{{this.breakfasttotal}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1s">
      午餐平均消费:{{this.Lunchavg}}总消费：{{this.Lunchtotal}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1.5s">
      晚餐平均消费:{{this.Dinneravg}}总消费：{{this.Dinnertotal}}</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-2s">

      享受健康早餐{{this.breakfastnum}}次</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-2s">
      饱食美味午餐{{this.Lunchnum}}次</p>
      <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-2.5s">
      在夜宵摊一掷千金{{this.Dinnernum}}次</p>
-->

    </div>
    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/三餐logo.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/生活篇.png" width="400" height="600"></div>
  </div>


</template>

<script>
    export default {
        name: "dailyfood",
      data(){
        return {
          index:0,
          xm:'',
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

          breakfastnum:'',//早餐次数
          breakfasttotal:'',//早餐总额
          Breakfastavg:'',//早餐平均,
          Lunchnum :'',//午餐次数
          Lunchtotal:'', //午餐总额
          Lunchavg :'',//午餐平均
          Dinnernum :'',//晚餐次数
          Dinnertotal :'',//晚餐总额
          Dinneravg:'',// 晚餐平均



        }
      },
      mounted() {
        this.selectstudentinfo();
        //location.reload()//刷新
        // this.breakfastnum=localStorage.getItem('breakfastnum')
        // console.log(this.breakfastnum)
        // this.breakfasttotal=localStorage.getItem('breakfasttotal')
        // console.log(this.breakfasttotal)
        // this.Breakfastavg=localStorage.getItem('Breakfastavg')
        // console.log(this.Breakfastavg)
        //
        // this.Lunchnum=localStorage.getItem('Lunchnum')
        // console.log(this.Lunchnum)
        // this.Lunchavg=localStorage.getItem('Lunchavg')
        // this.Lunchtotal=localStorage.getItem('Lunchtotal')
        // this.Dinnernum=localStorage.getItem('Dinnernum')
        // this.Dinneravg=localStorage.getItem('Dinneravg')
        // this.Dinnertotal=localStorage.getItem('Dinnertotal')
        // console.log(this.Dinnertotal)
        this.xm=localStorage.getItem('xm')


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
              this.breakfastnum= this.result.t_ykt_meal_consume.breakfastnum;
              this.breakfasttotal= this.result.t_ykt_meal_consume.breakfasttotal;
              this.Breakfastavg=this.result.t_ykt_meal_consume.breakfastavg;
              this.Lunchnum=this.result.t_ykt_meal_consume.lunchnum ;
              this.Lunchtotal=this.result.t_ykt_meal_consume.lunchtotal;
              this.Lunchavg=this.result.t_ykt_meal_consume.lunchavg;
              this.Dinnernum=this.result.t_ykt_meal_consume.dinnernum;
              this.Dinnertotal=this.result.t_ykt_meal_consume.dinnertotal;
              this.Dinneravg=this.result.t_ykt_meal_consume.dinneravg;

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
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#FAACA8), to(#717EA2));
    background-size: cover;
    text-align: center;
    .img{
      height: 5.7rem;
      margin:.6rem 0;
      // width:100%;
    }
    .text{
      line-height: 0.8rem;
      font-size: .35rem;
      font-family: Georgia, serif;

    }

  }
</style>
