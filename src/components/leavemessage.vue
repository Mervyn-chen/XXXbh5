import vueSeamlessScroll from 'vue-seamless-scroll'
<template>
  <div class="container">
    <div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      <!--<img src="/static/images/毕业生/早晚时间.png" width="400" height="600">-->
      <img src="/static/images/毕业生/矩形 958.png" width="400" height="250">
      <img src="/static/images/毕业生/飞机1.png" >
    </div>

    <div class="text" >
      <div class="common-div-css" style="margin-top: 5rem;left: 10%;">
        <vue-seamless-scroll :data="listData" class="seamless-warp">
          <ul class="item">
            <li v-for="item in listData">
              <span class="title" v-text="item.message"></span>
              <span class="date" v-text="item.mtime"></span>
            </li>
          </ul>
        </vue-seamless-scroll>

        <div>
          <textarea placeholder="100字以内" maxlength="100" style="height: 0.8rem;width: 5.2rem;margin-top: 0.8rem" @input="descInput" v-model="desc" />
          <button type="button" v-on:click="save()" style="vertical-align:top;margin-top: 0.8rem;margin-left: 0rem">留言</button>
          <!--  <span style="margin-bottom: 6rem"></span>-->
        </div>

      </div>

    </div>

  </div>



</template>

<script>

  //import { Swipe, SwipeItem,cell} from 'vant';
  /*   export default {
         name: "leavemessage",
       data:{
         return{
           txtVal: 0,
           desc:"",
           animate:true,
           list:[
             {"name":"于先生1","site":"北京门头沟区1","gsmc":"柠檬树装饰1"},
             {"name":"于先生2","site":"北京门头沟区2","gsmc":"柠檬树装饰2"},
             {"name":"于先生3","site":"北京门头沟区3","gsmc":"柠檬树装饰3"},
             {"name":"于先生4","site":"北京门头沟区4","gsmc":"柠檬树装饰4"},
             {"name":"于先生5","site":"北京门头沟区5","gsmc":"柠檬树装饰5"},
             {"name":"于先生6","site":"北京门头沟区6","gsmc":"柠檬树装饰6"},
             {"name":"于先生7","site":"北京门头沟区7","gsmc":"柠檬树装饰7"},
             {"name":"于先生8","site":"北京门头沟区8","gsmc":"柠檬树装饰8"},
             {"name":"于先生9","site":"北京门头沟区9","gsmc":"柠檬树装饰9"},
             {"name":"于先生10","site":"北京门头沟区10","gsmc":"柠檬树装饰10"},
             {"name":"于先生11","site":"北京门头沟区11","gsmc":"柠檬树装饰11"}
           ]
         }

       },
         /!*data(){
           return {
             index:0,
             studentinfo:{

               xh:'',
               title:'',

             },
           }
         },*!/
         mounted(){
           setInterval (this.selectLeaveMessageInfo, 2000)
         },
         methods:{
           selectLeaveMessageInfo(){
             let con1 = this.$refs.rollul;
             con1[0].style.marginTop='30px';
             this.animate=!this.animate;
             var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
             setTimeout(function(){
               that.list.push(that.list[0]);
               that.list.shift();
               con1[0].style.marginTop='0px';
               that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
             },0)




            /!*
     *!/



           }
         },


     }*/




  export default {
    name: "leavemessage",
    data(){
      return {
        animate:true,
        txtVal: 0,
        desc:"",
        //component:{vueSeamlessScroll},
        listData: [/*{
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第二行无缝滚动第二行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第三行无缝滚动第三行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第四行无缝滚动第四行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行无缝滚动第五行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第六行无缝滚动第六行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第七行无缝滚动第七行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第八行无缝滚动第八行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第九行无缝滚动第九行',
          'date': '2017-12-16'
        }*/]
      }
    },
    mounted(){
      setInterval (this.selectLeaveMessageInfo, 2000)
    },
    methods:{
      selectLeaveMessageInfo(){
        this.xh=localStorage.getItem('xh');
        this.$ajax.get('http://10.199.180.242:8080/massage/findByXh?Xh='+this.xh)
          .then(response=>{
            // this.result = response.data;
            console.log(response.data);
            this.listData = response.data;
          }).catch(function (err) {
          console.log(err);
        })

      },
      descInput(){
        this.txtVal = this.desc.length;
      },save(){
        this.xh=localStorage.getItem('xh');
        let Xh=this.xh;
        let message=this.desc;

        $.post("http://10.199.180.242:8080/massage/save",
          {
            Xh:Xh,
            message:message
          },
          function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
          });
      }
    },
  }



</script>

<style lang="scss" scoped>
  @import '../../static/css/commdiv.css';
  .container {
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#DEC6C6), to(#95B3EB));
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

  .seamless-warp {
    height: 300px;
    overflow: hidden;
  }


</style>
