<template>
  <div class="container">
    <!--<div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">-->
      <!--<img src="/static/images/毕业生/消费图片.png" width="400" height="600">-->
    <!--</div>-->
    <div class="text" >
      <div  class="common-div-css" style="margin-top: 4rem;" v-show="consumevisible3">系统未采集到你的信息</div>
      <div class="common-div-css" style="margin-top: -4rem;">
        <span>{{this.xm}}</span>


       <div v-show="consumevisible1" >
          一卡通累计消费<br/><span>{{this.totalconsume}}</span>元
          <br/>
        超过<span>{{this.pm}}%</span>的学生


      </div>

    </div>
    <div v-show="consumevisible1" id="main1" style="margin-top: 6rem;margin-left:1.7rem;width: 300px;height: 250px" ></div>
    <div v-show="consumevisible1"  class="common-div-css" style="margin-top:-1rem;font-size: 10px "> 数据采集起止时间：2016.4~2019.6</div>
    </div>
      <div style="position:absolute;top:2.5rem ;left: -6rem;right: 0;bottom: 0;">
      <img src="../../static/images/sidepage/9.png" >

    </div>
    <div style="position:absolute;top:3rem ;left: -6rem;right: 0;bottom: 0;">
      <img src="../../static/images/sidepage/1313.png" >
    </div>

    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/生活篇.png" width="400" height="600"></div>
  </div>

</template>

<script>
  import echarts from 'echarts';
    export default {

        name: "consume",
      data(){
        return {
          index:0,
          servicedata:[],
          pm:'',
          consumevisible1:true,
          consumevisible2:true,
          consumevisible3:false,


          favoritecanteen1:'', //第一食堂
          favoritecanteen1je:'',//第一消费金额
          favoritecanteen2:'', //第二食堂
          favoritecanteen2je:'',//第二消费金额
          favoritecanteen3:'', //第三食堂
          favoritecanteen3je:'',//第三消费金额

          breakfastnum:'',//早餐次数
          breakfasttotal:'',//早餐总额
          Breakfastavg:'',//早餐平均,
          Lunchnum :'',//午餐次数
          Lunchtotal:'', //午餐总额
          Lunchavg :'',//午餐平均
          Dinnernum :'',//晚餐次数
          Dinnertotal :'',//晚餐总额
          Dinneravg:'',// 晚餐平均
          bknum:'', //补卡次数
          bkpm:'',//补卡排名
          careless:'',//粗心指数
          carelessms:'',//粗心描述
          longestday:'', //陪伴最长时间
          shortestday:'',//陪伴最短时间

          favorite1:'', //第一食堂
          favorite1je:'',//第一消费金额
          favorite2:'', //第二食堂
          favorite2je:'',//第二消费金额
          favorite3:'', //第三食堂
          favorite3je:'',//第三消费金额


          bathnum:'', //洗浴次数
          bathpm:'',//洗浴排名
          qjzs:'',// 清洁指数
          sm:'',//说明

          kbcs:'',// 看病次数
          kbcspm:'',//看病次数排名
          csjk:'',// 看病次数健康指数
          kbfy:'',// 看病费用
          kbfypm:'',//看病费用排名
          fyjk:'', //看病费用健康指数
          healthsm:'',//看病说明

          consumerank3:'',
          hispitalrank:'',
          breakfastnum:'',
          consume2016:'',
          consume2017:'',
          consume2018:'',
          consume2019:'',
          consumerank1:'',
          consumerank2:'',
          dinnercost:'',
          longesttime:'',
          lunchnum:'',
          reissuerank:'',
          shortesttime:'',
          showerrank:'',
          totalconsume:'',
          xh :'',
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
          c2016:''




        }
      },
      beforeCreate:function(){
          listHypervisors(this)
      },
      created(){

      },
      mounted() {

        this.selectstudentinfo();





        //   this.consume2016 = localStorage.getItem('consume2016');
        //   this.consume2017 = localStorage.getItem('consume2017');
        //   this.consume2018 = localStorage.getItem('consume2018');
        //   this.consume2019 = localStorage.getItem('consume2019');
        // console.log(this.consume2016);this.consume2016=localStorage.getItem('consume2016');


        this.xm=localStorage.getItem('xm');
        console.log(xm);




      },
      watch:{
          result:function () {
            console.log(this.result);
            //直方图的绘制
            var myChart = echarts.init(document.getElementById('main1'));
            myChart.setOption(
              {
                title:{
                  text:'各学年累计消费',
                  textStyle:{
                    color: '#663300',
                    fontSize:20,
                    position:'center'
                  },
                  subtext: '',
                  subtextStyle:{
                          color:'#000000',
                          fontSize:10,

                  },
                },

                xAxis:{
                  data:["大一","大二","大三","大四"]
                },
                yAxis: {
                  //show:false,
                  type: 'value',
                  // min: 0,
                  // max: 4000,
                  //interval: 1000,
                  //grid 组件离容器左侧的距离。默认值是10%。
                  grid: {
                    left: 35
                  },
                  //y轴颜色
                  axisLine: {
                    lineStyle: {
                      //color: '#fff'
                    }
                  },
                  axisLabel:{
                    margin: 0,
                  },
                  //坐标轴内线的样式
                  splitLine: {
                    lineStyle: {
                      color: '#666',
                      type:'dashed'//虚线
                    }
                  }
                },

                series:[{
                  name:'',
                  // 直方图
                  type:'bar',
                  barWidth:30,
                  itemStyle: {
                    normal: {
                      //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                      color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#00AA00','#5599FF','#E87C25'
                        ];
                        return colorList[params.dataIndex]
                      },
                      //以下为是否显示，显示位置和显示格式的设置了
                      label: {
                        show: true,
                        position: 'top',
                        textStyle: { //数值样式
                          color: 'black',
                          fontSize: 10
                        },
//                             formatter: '{c}'
                        //formatter: '{b}\n{c}'
                      }
                    }
                  },
                  // barGap: '-100%', // Make series be overlap
                  // barCategoryGap: 15,
                  data:[this.consume2016,this.consume2017,this.consume2018,this.consume2019]

                },
                ],



              }
            );







          },


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
              this.totalconsume=this.result.t_ykt_consume.totalconsume;
              console.log(this.totalconsume);
              this.consume2016=this.result.t_ykt_consume.consume1;

              this.consume2017=this.result.t_ykt_consume.consume2;
              this.consume2018=this.result.t_ykt_consume.consume3;
              this.consume2019=this.result.t_ykt_consume.consume4;
              this.pm=this.result.t_ykt_consume_pm.totalconsumepm;
              if(this.result.t_ykt_consume.totalconsume==null)
              {
                this.consumevisible1=false;
                this.consumevisible3=true;
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
      line-height: .8rem;
      font-size: .35rem;
      font-family: Georgia, serif;

    }
    .highcharts-container {
      width: 800px;
      height: 400px;
    }

  }
</style>

