<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/绩点篇.png" width="400" height="600"></div>
    <div id="greatscore" style="width:100%;height: 300px;margin-top: 2.5rem" ></div>
    <div class="text" >
      <div class="common-div-css" style="margin-top:-2rem; left: 24%;">
        <!--<div style="letter-spacing: 0px;">四年时光，画出了GPA方向</div>-->
        <!--无论指向何方，都记录了青春和成长...-->
        <br/>
        <br/>
        <!--平均绩点:<span>{{this.studentinfo.gradepoint}}</span>-->
         专业年级排名：<span>{{this.studentinfo.majorrank}}</span>
        <div>
          学霸指数:<span>{{this.studentinfo.xbzs}}{{this.studentinfo.xbsm}}</span>
        </div>

      </div>

    </div>

    <div style="position:absolute;top:0 ;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/绩点.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
  </div>

</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "componentEight",
      data(){
        return {

          count:{},
          result:{},
          index:0,
          xh:'',
          studentinfo:{
            xbsm: '',
            xh:'',
            gradepoint:'',
            majorrank:'',
           xbzs:'',

          },
        }
      },
      mounted(){
        this.selectstudentinfo();
        this.initpan();


      },
      watch:{
        result:function () {
          console.log(this.result)
          var myChart = echarts.init(document.getElementById('greatscore'));
          myChart.setOption({

            tooltip : {
              formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
              show : false,
              feature : {
                mark : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                width: 2,
                shadowColor : '#000', //默认透明
                shadowBlur: 0,
              }
            },


            series : [

              {
                min:0,
                max:5,
                splitNumber:10,

                type:'gauge',
                detail : {formatter:'{value}'},
                data:[{value: this.studentinfo.gradepoint, name: 'GPA'}],
                title: {				// 仪表盘标题。
                  show: true,				// 是否显示标题,默认 true。
                  offsetCenter: [0,-40],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                  color: "#707070",			// 文字的颜色,默认 #333。
                  fontSize: 20,			// 文字的字体大小,默认 15。
                },
                axisLabel: {			// 刻度标签。
                  show: true,				// 是否显示标签,默认 true。
                  distance: 5,			// 标签与刻度线的距离,默认 5。
                  color: "#707070",			// 文字的颜色,默认 #fff。
                  fontSize: 10,			// 文字的字体大小,默认 5。
                  formatter: "{value}",	// 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。 示例:// 使用字符串模板，模板变量为刻度默认标签 {value},如:formatter: '{value} kg'; // 使用函数模板，函数参数分别为刻度数值,如formatter: function (value) {return value + 'km/h';}
                },



              },

            ]


          })

        }
        },

      methods:{
        selectstudentinfo(){
          // let id=this.account;
          this.xh=this.$route.query.xh;
          let id=this.xh;
          this.$ajax.get('http://10.199.180.242:8080//t_student_jw_gradepoint/findByXh?Xh='+id)
            .then(response=>{


              this.result = response.data;
              console.log(response.data);
              this.studentinfo.xbsm = response.data.xbsm;
              this.studentinfo.xh=response.data.xh;
              this.studentinfo.gradepoint=response.data.gradepoint;
              this.studentinfo.majorrank=response.data.majorrank;
              this.studentinfo.xbzs=response.data.xbzs;


            }).catch(function (err) {
            console.log(err);
          })
        },
        initpan(){
          var gradepoint=this.studentinfo.gradepoint;
          console.log(gradepoint);


        }
      },
    }
</script>


<style lang="scss" scoped>
  @import '../../static/css/commdiv.css';
  .container {
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#D8CDE2), to(#B4D6F7));
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
