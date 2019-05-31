<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/荣誉成果图片1.png" width="400" height="600"></div>
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/荣誉成果图片2.png" width="400" height="600"></div>
    <div class="text" >
      <div class="common-div-css" style="  margin-top: 3rem;">
        收获季节，<br/>
       再回首曾经的荣誉成果：
        <br/>
        <br/>
        <span style="line-height:150%;font-size: 0.35rem">
        <li v-for="i in title1">{{i.title}} {{i.cs}}次</li>
          <li v-for="j in title2">{{j.title}} {{j.cs}}次</li>
        </span>

      </div>
      <!--<p style="margin-top: 0rem; margin-left: 0rem; padding: 2rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">
        不知不觉中，积累了蛮多的荣誉成果！
      </p>
      <p style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">{{this.studentinfo.title}}</p>-->
    </div>
    <div style="position:absolute;top: 0rem;left: 0; right: 0;bottom: 0;"><img src="/static/images/毕业生/荣誉成果篇.png" width="400" height="600"></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="/static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
  </div>

</template>

<script>
  export default {
    name: "componentNight",
    data(){
      return {
        index:0,
        xh:'',
        title1:[],
        unit1:{
          title:"",
          cs:'',

        },
        title2:[],
        unit2:{
          title:"",
          cs:'',
        },
        studentinfo:{

          xh:'',



        },
      }
    },
    mounted(){
      this.selectstudentinfo();
    },
    methods:{
      selectstudentinfo(){
        // let id=this.account;
        this.xh=localStorage.getItem('xh');
        let id=this.xh;
        this.$ajax.get('http://10.199.180.242:8080/studentHonor/findByXh?Xh='+id)
          .then(response=>{
            // this.result = response.data;
            console.log(response.data);

            //console.log(response.data.student_jw_honor_scholarships[0]);
            //this.title2=response.data.student_jw_honor_scholarships[1];
            //console.log(this.title2);
            //this.unit2.title=response.data.student_jw_honor_scholarships[1].title;
            //console.log(this.unit2.title)

            //
            for(var i=0;i<response.data.student_jw_honor_others.length;i++) {
              this.unit1.title = response.data.student_jw_honor_others[i].title;
              this.unit1.cs = response.data.student_jw_honor_others[i].cs;
              this.title1.push(this.unit1);
              this.unit1={title:"",
                cs:'',};

            }
            console.log(this.title1)



            for(var j=0;j<response.data.student_jw_honor_scholarships.length;j++)
            {
              this.unit2.title=response.data.student_jw_honor_scholarships[j].title;
              this.unit2.cs=response.data.student_jw_honor_scholarships[j].cs;
              this.title2.push(this.unit2);
              this.unit2={
                title:"",
                cs:'',
              };

            }
            console.log(this.title2)




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
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#D8CDE2), to(#B4D6F7));
    background-size: cover;
    text-align: center;
    .img {
      width: 7rem;
      margin: .6rem 0;
    }

  }

</style>
