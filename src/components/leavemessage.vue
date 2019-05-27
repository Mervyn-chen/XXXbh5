<template>

  <div  >
    <!--<div style="position:absolute;top: 0em;left: 0em;right: 0;bottom: 0;">-->
      <!--<img src="/static/images/毕业生/矩形%20958.png" ></div>-->

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


    </div>



    <!--<div>-->

      <!--<van-swipe :autoplay="3000" indicator-color="white" vertical>-->
      <!--<van-swipe-item>1</van-swipe-item>-->
      <!--<van-swipe-item>2</van-swipe-item>-->
      <!--<van-swipe-item>3</van-swipe-item>-->
      <!--<van-swipe-item>4</van-swipe-item>-->
    <!--</van-swipe>-->
    <!--<van-cell-group>-->
      <!--<van-field-->
        <!--v-model="message"-->
        <!--label="留言"-->
        <!--type="textarea"-->
        <!--placeholder="请输入留言"-->
        <!--rows="1"-->
        <!--autosize-->
      <!--/>-->
    <!--</van-cell-group>-->
    <!--</div>-->





</template>

<script>
  import { Swipe, SwipeItem,cell} from 'vant';
    export default {
        name: "leavemessage"
    }
</script>

<style lang="scss" scoped>
  .container{
    background-color: #F3F3F3 ;
    background-size: cover;
    text-align: center;
    .img{
      height: 5.7rem;
      margin:.6rem 0;
      // width:100%;
    }
    .text{
      line-height: .6rem;
      font-size: .5rem;
      font-family: Georgia, serif;

    }

  }
</style>
