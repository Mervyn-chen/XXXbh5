<template>
  <div class="container">
    <div style="position:absolute;top: 1rem;left: 0rem;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/吃/596.png" >
    </div>
    <div style="position:absolute;top: 9.8rem;left: 0rem;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/吃/107.png" >
    </div>
    <div class="text" style="padding: 2rem" >
      <div class="common-div-css" style="margin-top: 0.5rem">
        <div v-show="eatvisible5" style="margin-top: 2rem"> 系统未采集到您的校园就餐信息<br/>
          东华美食，不够吸引你？
        </div>
        <div v-show="eatvisible1"><span>光顾</span>最多的餐厅:
        <br/>
          {{this.favoritecanteen1}}
        </div>

        <!--2.{{this.favoritecanteen2}}消费<span>{{this.favoritecanteen2je}}</span> 元-->
        <!--<div>-->
          <!--3.{{this.favoritecanteen3}}消费<span>{{this.favoritecanteen3je}}</span> 元-->
        <!--</div>-->
        <br/>
        <div  v-show="eatvisible2">
        最喜欢<span>吃</span>的摊位：
        <div v-show="eatvisible2">
          1.{{this.favorite1}}
        </div>
        <div v-show="eatvisible3">
        2.{{this.favorite2}}</div>
        <div v-show="eatvisible4">
        3.{{this.favorite3}}
        <br/>
        </div>
          </div>
        <div><br/>别了东华食堂，记得一日<span>三餐！</span></div>
      </div>



    </div>
    <div style="position:absolute;top:2.5rem ;left: -6rem;right: 0;bottom: 0;">
      <img src="../../static/images/sidepage/10.png" >

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
        name: "componentEat",
      data(){
        return {
          index:0,
          eatvisible1:true,
          eatvisible2:true,
          eatvisible3:true,
          eatvisible4:true,
          eatvisible5:false,

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
          favorite1:'', //第一食堂
          favorite1je:'',//第一消费金额
          favorite2:'', //第二食堂
          favorite2je:'',//第二消费金额
          favorite3:'', //第三食堂
          favorite3je:'',//第三消费金额
          favoritecanteen1:'', //第一食堂
          favoritecanteen1je:'',//第一消费金额
          favoritecanteen2:'', //第二食堂
          favoritecanteen2je:'',//第二消费金额
          favoritecanteen3:'', //第三食堂
          favoritecanteen3je:'',//第三消费金额

          xh :'',
          reissuetime:'',



        }
      },
      mounted() {
          this.selectstudentinfo();



      },
      methods:{


        selectstudentinfo(){
          // let id=this.account;

          this.xh=this.$route.query.xh;

          let studentid = this.xh.split('');
          console.log(studentid);
          let newMsg = "";
          for (let i=0;i<studentid.length;i++){
            let num = studentid[i].charCodeAt()-9;
            let str = String.fromCharCode(num);
            console.log(str);
            newMsg+=str;
          }
          console.log(newMsg);
          let id=newMsg;
          //console.log(id);
          //console.log(id);
          this.$ajax.get('http://localhost:8080//yktInfo/findByXh?Xh='+id)
            .then(response=>{
              this.result = response.data;
              this.favorite1=this.result.t_ykt_favorite_booth_pm.favorite1;
              this.favorite1je=this.result.t_ykt_favorite_booth_pm.favorite1je;
              this.favorite2=this.result.t_ykt_favorite_booth_pm.favorite2;
              this.favorite2je=this.result.t_ykt_favorite_booth_pm.favorite2je;
              this.favorite3=this.result.t_ykt_favorite_booth_pm.favorite3;
              this.favorite3je=this.result.t_ykt_favorite_booth_pm.favorite3je;
              this.favoritecanteen1=this.result.t_ykt_favorite_canteen_pm.favorite1;
              this.favoritecanteen1je=this.result.t_ykt_favorite_canteen_pm.favorite1je;
              this.favoritecanteen2=this.result.t_ykt_favorite_canteen_pm.favorite2;
              this.favoritecanteen2je=this.result.t_ykt_favorite_canteen_pm.favorite2je;
              this.favoritecanteen3=this.result.t_ykt_favorite_canteen_pm.favorite3;
              this.favoritecanteen3je=this.result.t_ykt_favorite_canteen_pm.favorite3je;
              if(this.favoritecanteen1==null){
                this.eatvisible1=false;




              }
              if(this.favorite1==null)
              {
                this.eatvisible2=false;
                this.eatvisible5=true;
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
      line-height: .6rem;
      font-size: .3rem;
      font-family: Georgia, serif;

    }

  }
</style>
