<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/绩点篇.png" width="400" height="600"></div>
    <div class="text" >
      <div class="common-div-css" style="margin-top: 3.05rem; left: 24%;">
        <div style="letter-spacing: 0px;">听说，大学里</div>
        有一个令人闻风丧胆的指标？
        <br/><br/>
        平均绩点:<span>{{this.studentinfo.gradepoint}}</span>
        <div>
          学霸指数:<span>{{this.studentinfo.xbzs}}{{this.studentinfo.xbsm}}</span>
        </div>
        专业年级排名：<span>{{this.studentinfo.majorrank}}</span>
      </div>

    </div>
    <div id="greatscore" style="width:100%;height: 300px" ></div>
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

      methods:{
        selectstudentinfo(){
          // let id=this.account;
          this.xh=localStorage.getItem('xh');
          let id=this.xh;
          this.$ajax.get('http://10.199.180.242:8080//t_student_jw_gradepoint/findByXh?Xh='+id)
            .then(response=>{
              // this.result = response.data;
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
          var myChart = echarts.init(document.getElementById('greatscore'));
          myChart.setOption({
            tooltip : {
              formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
              show : true,
              feature : {
                mark : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            series : [
              {
                name:'业务指标',
                type:'gauge',
                detail : {formatter:'{value}%'},
                data:[{value: this.studentinfo.gradepoint, name: '平均绩点'}]
              }
            ]


          })

        }
      },
    }
</script>


<style lang="scss" scoped>
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
