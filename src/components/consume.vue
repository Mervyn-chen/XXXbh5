<template>
  <div class="container">
    <!--<div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">-->
      <!--<img src="/static/images/毕业生/消费图片.png" width="400" height="600">-->
    <!--</div>-->
    <div class="text" >
      <div class="common-div-css" style="margin-top: 2rem;">
        <span>{{this.xm}}，</span>
        <div>
          你通过一卡通累计消费<span>{{this.totalconsume}}</span>
          <br/>
        </div>


      </div>

    </div>
    <div id="main1" style="margin-top: 6rem;margin-left:1.5rem;width: 300px;height: 250px" ></div>

    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/消费logo左.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/生活篇.png" width="400" height="600"></div>
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
            console.log(this.result)


            localStorage.setItem('breakfastnum', this.result.t_ykt_meal_consume.breakfastnum);
            localStorage.setItem('breakfasttotal', this.result.t_ykt_meal_consume.breakfasttotal);
            localStorage.setItem('Breakfastavg', this.result.t_ykt_meal_consume.breakfastavg);
            localStorage.setItem('Lunchnum', this.result.t_ykt_meal_consume.lunchnum );
            localStorage.setItem('Lunchtotal', this.result.t_ykt_meal_consume.lunchtotal);
            localStorage.setItem('Lunchavg', this.result.t_ykt_meal_consume.lunchavg);
            localStorage.setItem('Dinnernum', this.result.t_ykt_meal_consume.dinnernum);
            localStorage.setItem('Dinnertotal', this.result.t_ykt_meal_consume.dinnertotal);
            localStorage.setItem('Dinneravg', this.result.t_ykt_meal_consume.dinneravg);
            localStorage.setItem('bknum', this.result.t_ykt_bk_pm.bknum);
            localStorage.setItem('bkpm', this.result.t_ykt_bk_pm.bkpm);
            localStorage.setItem('careless', this.result.t_ykt_bk_pm.careless);
            localStorage.setItem('carelessms', this.result.t_ykt_bk_pm.carelessms);
            localStorage.setItem('longestday',this.result.t_ykt_bk_time.longestday);
            localStorage.setItem('shortestday',this.result.t_ykt_bk_time.shortestday);
            localStorage.setItem('favorite1',this.result.t_ykt_favorite_booth_pm.favorite1);
            localStorage.setItem('favorite1je',this.result.t_ykt_favorite_booth_pm.favorite1je);
            localStorage.setItem('favorite2',this.result.t_ykt_favorite_booth_pm.favorite2);
            localStorage.setItem('favorite2je',this.result.t_ykt_favorite_booth_pm.favorite2je);
            localStorage.setItem('favorite3',this.result.t_ykt_favorite_booth_pm.favorite3);
            localStorage.setItem('favorite3je',this.result.t_ykt_favorite_booth_pm.favorite3je);
            localStorage.setItem('favoritecanteen1',this.result.t_ykt_favorite_canteen_pm.favorite1);
            localStorage.setItem('favoritecanteen1je',this.result.t_ykt_favorite_canteen_pm.favorite1je);
            localStorage.setItem('favoritecanteen2',this.result.t_ykt_favorite_canteen_pm.favorite2);
            localStorage.setItem('favoritecanteen2je',this.result.t_ykt_favorite_canteen_pm.favorite2je);
            localStorage.setItem('favoritecanteen3',this.result.t_ykt_favorite_canteen_pm.favorite3);
            localStorage.setItem('favoritecanteen3je',this.result.t_ykt_favorite_canteen_pm.favorite3je);
            localStorage.setItem('bathnum',this.result.t_ykt_bath_pm.bathnum);
            localStorage.setItem('bathpm',this.result.t_ykt_bath_pm.bathpm);
            localStorage.setItem('sm',this.result.t_ykt_bath_pm.sm);
            localStorage.setItem('qjzs',this.result.t_ykt_bath_pm.qjzs)

            localStorage.setItem('csjk',this.result.health_pm.csjk)
            localStorage.setItem('fyjk',this.result.health_pm.fyjk)
            localStorage.setItem('kbfy',this.result.health_pm.kbfy)
            localStorage.setItem('kbcs',this.result.health_pm.kbcs)
            localStorage.setItem('kbcspm',this.result.health_pm.kbcspm)
            localStorage.setItem('kbfypm',this.result.health_pm.kbfypm)
            localStorage.setItem('healthsm',this.result.health_pm.sm)
            // var c2016=this.consume2016;
            // console.log(c2016);
            // console.log(this.consume2017)
            // var c2017=this.consume2017;
            // console.log(c2017);
            // var c2018=this.consume2018;
            // var c2019=this.consume2019;
            //
            //
            // var servicedata=[
            //   {value:c2016, name:'2016年消费'},
            //   {value:c2017, name:'2017年消费'},
            //   {value:this.consume2018, name:'2018年消费'},
            //   {value:this.consume2019, name:'2019年消费'},
            // ];

            // console.log(servicedata);
            // console.log(111)
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
                  subtext: '一卡通消费记录采集开始时间为2016年4月',
                  subtextStyle:{
                          color:'#000000',
                          fontSize:10,

                  },
                },

                // tooltip: {
                //   // 触发类型（数据项，坐标轴，不触发） ['item', 'axis', 'none']
                //   trigger: 'none',
                //   // 坐标轴指示器
                //   axisPointer: {
                //     // 指示器类型(直线，阴影，十字) ['line', 'shadow', 'cross']
                //     type: 'shadow',
                //     // 坐标轴指示器的文本标签。
                //     label: {
                //       // 坐标轴指示器背景色
                //       backgroundColor: '#283b56'
                //     }
                //   }
                // },


                xAxis:{
                  data:["大一","大二","大三","大四"]
                },
                yAxis: {
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
                          '#C1232B','#B5C334','#FCCE10','#E87C25'
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


            //饼图的绘制
            // var myChart = echarts.init(document.getElementById('main1'));
            // // 绘制图表
            // myChart.setOption({
            //   title : {
            //     text: '各学年累计消费',
            //     subtext: '一卡通消费记录采集开始时间为2016年4月',
            //     textStyle:{
            //       color: '#663300',
            //       fontSize:20,
            //
            //
            //     },
            //     subtextStyle:{
            //       color:'#000000',
            //       fontSize:10,
            //
            //     },
            //     x:'center'
            //   },
            //   // tooltip : {
            //   //   trigger: 'item',
            //   //   formatter: "{a} <br/>{b} : {c} ({d}%)"
            //   // },
            //
            //   series : [
            //     {
            //       //name: '访问来源',
            //       type: 'pie',
            //       label: {
            //         normal: {
            //           show: true,
            //           ////数据在中间显示
            //           formatter: '{b}: {c}',
            //           textStyle : {
            //             //fontWeight : 300 ,
            //             fontSize : 8    //文字的字体大小
            //           },
            //         }
            //       },
            //       radius : '55%',
            //       center: ['50%', '60%'],
            //       data:[
            //         {value:this.consume2016, name:'2016年消费'},
            //         {value:this.consume2017, name:'2017年消费'},
            //         {value:this.consume2018, name:'2018年消费'},
            //         {value:this.consume2019, name:'2019年消费'},
            //
            //       ],
            //       itemStyle: {
            //         emphasis: {
            //           shadowBlur: 10,
            //           shadowOffsetX: 0,
            //           shadowColor: 'rgba(0, 0, 0, 0.5)'
            //         }
            //       }
            //     }
            //   ]
            // });





          },


      },
      methods:{


        selectstudentinfo(){
          // let id=this.account;

          this.xh=localStorage.getItem('xh');
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
              console.log(this.consume2016);
              console.log(this.consume2017);
              console.log(this.consume2018);
              console.log(this.consume2019);


              // this.studentinfo.hispitalrank = response.data.hispitalrank;
              // this.studentinfo.xh=response.data.xh;
              // this.studentinfo.breakfastnum=response.data.breakfastnum;
              // this.studentinfo.consume2016=response.data.consume2016;
              // this.studentinfo.consume2017=response.data.consume2017;
              // this.studentinfo.consume2018=response.data.consume2018;
              // this.studentinfo.consume2019=response.data.consume2019;
              // this.studentinfo.consumerank1=response.data.consumerank1;
              // this.studentinfo.consumerank2=response.data.consumerank2;
              // this.studentinfo.dinnercost=response.data.dinnercost;
              // this.studentinfo.hospitalconsume=response.data.hospitalconsume;
              // this.studentinfo.longesttime=response.data.longesttime;
              // this.studentinfo.lunchnum=response.data.lunchnum;
              // this.studentinfo.reissuerank=response.data.reissuerank;
              // this.studentinfo.shortesttime=response.data.shortesttime;
              // this.studentinfo.showerrank=response.data.showerrank;
              // this.studentinfo.totalconsume=response.data.totalconsume;



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

