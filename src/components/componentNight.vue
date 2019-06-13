<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/111191.png" width="400" height="600"></div>
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/111192.png" width="400" height="600"></div>
    <div class="text" >
      <div class="common-div-css" style="  margin-top: 2rem; margin-left: -1.5rem;padding: 1rem">
        <div v-show="nightvisible2" >收获季节，<br/>
       再回首曾经的荣誉成果：</div>
        <br/>
        <div v-show="nightvisible1" style="  margin-top: 2rem;" >
          翻过此页，将是一个<span>新</span>的篇章，<br/>
        更多的荣誉在等着你~
        </div>
        <div  class="info">

        <span style="line-height:150%;font-size: 0.35rem" >
        <li v-for="i in title1">{{i.fl}} {{i.mc}}</li>
          <li v-for="j in title2">{{j.title}} {{j.cs}}次</li>
        </span>
      </div>
      </div>
      <!--<p style="margin-top: 0rem; margin-left: 0rem; padding: 2rem":class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-0.5s">
        不知不觉中，积累了蛮多的荣誉成果！
      </p>
      <p style="margin-top: -3rem; margin-left: 0rem; padding: 1.5rem">{{this.studentinfo.title}}</p>-->
    </div>
    <div style="position:absolute;top:2.5rem ;left: -6rem;right: 0;bottom: 0;">
      <img src="../../static/images/sidepage/7.png" ></div>
    <div style="position:absolute;top:0 ;left: 0;right: 0;bottom: 0;">
      <img src="../../static/images/毕业生/学业篇左上角logo.png" width="400" height="600"></div>
  </div>

</template>

<script>
  export default {
    name: "componentNight",
    data(){
      return {
        nightvisible1:false,
        nightvisible2:true,

        index:0,
        xh:'',
        title1:[],
        unit1:{
          fl:"",
          mc:"",

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
        console.log(id);
        this.$ajax.get('http://localhost:8080/studentHonor/findByXh?Xh='+id)
          .then(response=>{
            // this.result = response.data;
            //console.log(response.data);
            if(response.data.student_jw_honor_others.length==0&&response.data.student_jw_honor_scholarships.length==0)
            {
              this.nightvisible1=true;
              this.nightvisible2=false;

            }
            // if(response.data.student_jw_honor_others.length+response.data.student_jw_honor_scholarships.length>6)
            // {
            //
            //
            //
            //
            //
            // }

            //console.log(response.data.student_jw_honor_scholarships[0]);
            //this.title2=response.data.student_jw_honor_scholarships[1];
            //console.log(this.title2);
            //this.unit2.title=response.data.student_jw_honor_scholarships[1].title;
            //console.log(this.unit2.title)

            //
            for(var i=0;i<response.data.student_jw_honor_others.length;i++) {
              this.unit1.fl = response.data.student_jw_honor_others[i].fl;
              this.unit1.mc = response.data.student_jw_honor_others[i].mc;
              this.title1.push(this.unit1);
              this.unit1={fl:"",
                mc:"",};

            }
            //console.log(this.title1);




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
            //console.log(this.title2)




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
    .info{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical
    }

  }

</style>
