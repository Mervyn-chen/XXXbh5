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
        v-model="message"
        label="数据准确性"
        type="textarea"
        placeholder="哪一部分数据你认为不够准确？"
        rows="1"
        autosize
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="message"
        label="页面排版"
        type="textarea"
        placeholder="你认为页面排版是否需要调整？怎么排序更合理？
或者哪些内容可以去掉？原因
"
        rows="1"
        autosize
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="message"
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

            Toast("感谢反馈");


        }

      }
    }
</script>

<style scoped>


</style>
