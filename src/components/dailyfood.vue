<template>
  <div class="container">
    <div style="position:absolute;top: 1rem;left: 0rem;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/西红柿.png" >
      <img src="../../static/images/毕业生/蘑菇.png" >

    </div>
    <div style="position:absolute;top: 9rem;left: 0rem;right: 0;bottom: 0;">
      <!--<img src="/static/images/毕业生/荷包蛋.png" >-->
      <!--<img src="/static/images/毕业生/锅底.png" >-->
    </div>
    <div id="main2" style="margin-top: 2rem;margin-left:1rem;width: 300px;height: 250px" ></div>
    <!--<div class="text" style="padding: 1.5rem" >-->
      <!--<div class="common-div-css" style="margin-top: -2rem;">-->

        <!--<div v-show="dailyfoodvisible1">-->
          <!--<span>享受健康</span>早餐{{this.breakfastnum}}次<br/>-->
          <!--早餐平均消费:<span>{{this.Breakfastavg}}元</span>-->
        <!--</div>-->
        <!--<div v-show="dailyfoodisible2">-->
        <!--<span>饱食美味</span>午餐{{this.Lunchnum}}次<br/>-->
        <!--<span>午</span>餐平均消费:<span>{{this.Lunchavg}}元</span>-->
        <!--</div>-->
        <!--<div v-show="dailyfoodvisible3">-->
          <!--在夜宵摊-->
          <!--<span>一掷千金</span>{{this.Dinnernum}}次<br/>-->
          <!--<span>晚餐</span>平均消费:<span>{{this.Dinneravg}}元</span>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div id="main3" style="margin-top: 0rem;margin-left:1rem;width: 300px;height: 250px" ></div>

    <div style="position:absolute;top:2.5rem ;left: -6rem;right: 0;bottom: 0;">
      <img src="../../static/images/sidepage/8.png" >

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
        name: "dailyfood",
      data(){
        return {
          dailyfoodvisible1:true,
          dailyfoodisible2:true,
          dailyfoodvisible3:true,
          dailyfoodvisible4:true,
          dailyfoodvisible5:true,
          dailyfoodvisible6:true,

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
          this.$ajax.get('http://10.199.180.242:8080//yktInfo/findByXh?Xh='+id)
            .then(response=>{
              console.log(response.data);
              this.result = response.data;
              this.breakfastnum = this.result.t_ykt_meal_consume.breakfastnum;
              this.breakfasttotal= this.result.t_ykt_meal_consume.breakfasttotal;
              this.Breakfastavg=this.result.t_ykt_meal_consume.breakfastavg;
              this.Lunchnum=this.result.t_ykt_meal_consume.lunchnum ;
              this.Lunchtotal=this.result.t_ykt_meal_consume.lunchtotal;
              this.Lunchavg=this.result.t_ykt_meal_consume.lunchavg;
              this.Dinnernum=this.result.t_ykt_meal_consume.dinnernum;
              this.Dinnertotal=this.result.t_ykt_meal_consume.dinnertotal;
              this.Dinneravg=this.result.t_ykt_meal_consume.dinneravg;
              if(this.Breakfastavg==null||this.breakfastnum==null){
                 this.dailyfoodvisible1=false;


              }
              if(this.Lunchavg==null||this.Lunchnum==null)
              {
                this.dailyfoodisible2=false;
              }
              if(
                this.Dinneravg==null||this.Dinnernum==null
              ){
                this.dailyfoodvisible3=false
              }

            }).catch(function (err) {
            console.log(err);
          })
        }
      },
      watch:{
        result:function () {
          console.log(this.result);

          //饼图的绘制
          var myChart = echarts.init(document.getElementById('main2'));
          // 绘制图表
          myChart.setOption({
            title : {
              text: '三餐消费',
              subtext: '',
              textStyle:{
                color: '#663300',
                fontSize:20,


              },
              subtextStyle:{
                color:'#000000',
                fontSize:10,

              },
              x:'center'
            },
            // tooltip : {
            //   trigger: 'item',
            //   formatter: "{a} <br/>{b} : {c} ({d}%)"
            // },
            color:[
              '#006400','#EE7700','#4169E1'
            ],

            series : [
              {
                //name: '访问来源',
                type: 'pie',
                label: {
                  normal: {
                    show: true,
                    ////数据在中间显示
                    formatter: '{b}: {c}',
                    textStyle : {
                      //fontWeight : 300 ,
                      fontSize : 10    //文字的字体大小
                    },
                  }
                },
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                  {value:this.breakfasttotal, name:'早餐'},
                  {value:this.Lunchtotal, name:'午餐'},
                  {value:this.Dinnertotal, name:'晚餐'},


                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                  }
                }
              }
            ]
          });

          //直方图绘制
          var myChart = echarts.init(document.getElementById('main3'));
          myChart.setOption(
            {
              title:{
                text:'就餐次数',
                //textAlign:'left',
                //textVerticalAlign:'auto',
                left:100,
                textStyle:{
                  color: '#663300',
                  fontSize:20,
                  //align:'center' ,  //水平对齐
                  //left: 35, //设置偏移量

                },
                subtext: '',
                subtextStyle:{
                  color:'#000000',
                  fontSize:10,

                },
              },

              xAxis:{
                data:["早餐","午餐","晚餐"]
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
                        '#C1232B','#00AA00','#5599FF'
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
                data:[this.breakfastnum,this.Lunchnum,this.Dinnernum]

              },
              ],



            }
          );


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
