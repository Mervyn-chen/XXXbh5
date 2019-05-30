import vueSeamlessScroll from 'vue-seamless-scroll'
<template>
  <div class="container">
    <!--<div style="position:absolute;top: 0;left: 0rem;right: 0;bottom: 0;">
      &lt;!&ndash;<img src="/static/images/毕业生/早晚时间.png" width="400" height="600">&ndash;&gt;
      <img src="/static/images/毕业生/矩形 958.png" width="400" height="250">
      <img src="/static/images/毕业生/飞机1.png" >
    </div>-->

    <div class="text" >
      <!--<div class="common-div-css" style="margin-top: 2.6rem;">

      </div>-->
      <vue-seamless-scroll :data="listData" class="seamless-warp">
        <ul class="item">
          <li v-for="item in listData">
            <span class="title" v-text="item.title"></span>
            <span class="date" v-text="item.date"></span>
          </li>
        </ul>
      </vue-seamless-scroll>





    </div>

  </div>
<!--  <div >
    <van-swipe style="position: absolute;margin-top: 6rem" :autoplay="3000" indicator-color="blue" vertical>
      <van-swipe-item>1213143qwrqwrqwreqt </van-swipe-item>
      <van-swipe-item>14141asfdsafaf</van-swipe-item>
      <van-swipe-item>141414</van-swipe-item>
      <van-swipe-item>141515</van-swipe-item>
    </van-swipe>

    <van-cell-group style="position:absolute;top: 10rem;left: 0rem;right: 0;bottom: 0;">
      <van-field
        v-model="message"
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        rows="1"
        autosize
      />
    </van-cell-group>
    </div>-->




</template>

<script>
  //import { Swipe, SwipeItem,cell} from 'vant';
 /*   export default {
        name: "leavemessage",
      data:{
        return{
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




           /!* this.xh=localStorage.getItem('xh');
            let id=this.xh;
            this.$ajax.get('http://10.199.180.242:8080//T_student_jw_honor/findByXh?Xh='+id)
              .then(response=>{
                // this.result = response.data;
                console.log(response.data);
                this.studentinfo.title = response.data.title;
              }).catch(function (err) {
              console.log(err);
            })*!/



          }
        },


    }*/




  export default {
    name: "leavemessage",
    data(){
      return {
        animate:true,
        //component:{vueSeamlessScroll},
        listData: [{
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
        }]
      }
    },
    mounted(){
      setInterval (this.selectLeaveMessageInfo, 2000)
    },
    methods:{
      selectLeaveMessageInfo(){


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
    height: 229px;
    overflow: hidden;
  }


</style>
