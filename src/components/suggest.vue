<template>
  <div>
    <van-nav-bar
      title="毕业季推文意见反馈表"
      left-text="返回"
      left-arrow
      border
      @click-left="back"

    />



      <van-cell-group>
        <van-field
          v-model="message"
          label="亲爱的同学："
          type="textarea"
          placeholder="衷心感谢你对我们工作的支持，为了给毕业生展现更加准确和丰富的四年大学学习生活的点点滴滴，为了不断提高我们的服务质量，完善我们的工作，请填写以下意见反馈，期盼你提出宝贵的意见和建议，谢谢！"
          rows="1"
          autosize
          disabled
        />
      </van-cell-group>
    <van-cell title="请为各个篇章评分"  />

    <van-cell-group>
    <van-cell title="学业篇" value="内容" >

      <van-rate
        v-model="value1"
        icon="like"
        void-icon="like-o"
      />
    </van-cell>
    <van-cell title="图书馆篇" value="内容" >

        <van-rate
          v-model="value2"
          icon="like"
          void-icon="like-o"
        />
    </van-cell>
      <van-cell title="生活篇" value="内容" >

        <van-rate
          v-model="value3"
          icon="like"
          void-icon="like-o"
        />
      </van-cell>
      <van-cell title="整体评价" value="内容" >

        <van-rate
          v-model="value4"
          icon="like"
          void-icon="like-o"
        />
      </van-cell>
    </van-cell-group>


    <van-cell-group>
      <van-field
        v-model="dataquality"
        label="数据准确性"
        type="textarea"
        placeholder="哪一部分数据你认为不够准确？"
        rows="1"
        autosize
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="pagerank"
        label="页面排版"
        type="textarea"
        placeholder="你认为页面排版是否需要调整？怎么排序更合理？
或者哪些内容可以去掉？原因?
"
        rows="1"
        autosize
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="showcontent"
        label="展现"
        type="textarea"
        placeholder="你还希望展现哪些其他的内容？"
        rows="1"
        autosize
      />
    </van-cell-group>
    <van-button style="width: 100%" type="info" @click="submit">确认提交</van-button>






  </div>

</template>

<script>
  import { Toast } from 'mint-ui'
  import Input from 'element-ui';
    export default {
        name: "suggest",
      data(){
          return{
            value1:'',
            value2:'',
            value3:'',
            value4:'',
            mtime:'',
            dataquality:'',
            pagerank:'',
            showcontent:'',


          }
      },
      methods:{
          back() {
            this.$router.go(-1)
          },
        submit(){
          this.xh=localStorage.getItem('xh',this.xh);
          console.log(this.xh);
          let info={

            xh:this.xh,
            message:this.dataquality,
            mtime:'',
            study:this.value1,
            library:this.value2,
            life:this.value3,
            totalscore:this.value4,
            pagerank :this.pagerank,
            showdetail:this.showcontent


          };
          console.log(info)

          //let message=this.desc;

         /* $.ajax({
            type: "POST",   //提交的方法
            url:"http://localhost:8080/feedback/save", //提交的地址
            data:JSON.stringify(info),// 序列化表单值
            contentType: "application/json",
            async: false,
            error: function(request) {  //失败的话
              alert("Connection error");
            },
            success: function(data) {  //成功
              alert(1);  //就将返回的数据显示出来
             // window.location.href="跳转页面"
            }
          });*/


          this.$ajax.post("http://localhost:8080/feedback/save",
            JSON.stringify(info),{

            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then(response => {
            console.log(response.data);
            if (response.data == "success") {
              Toast("感谢反馈");
              //this.$router.push({path: '/menu'});
              this.$router.go(-1)
            }
            else {
              Toast("反馈失败！");
              //this.$router.push({path: '/orders/SurgeryOrder'});
            }
          }).catch(function (err) {
            console.log(err)
          });





        }

      }
    }
</script>

<style scoped>


</style>
