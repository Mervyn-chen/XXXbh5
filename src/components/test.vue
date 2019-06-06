<template>
  <div>

    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>

</template>

<script>

    export default {

        name: "test",
      data() {
        return {
          swiperOption: {
            pagination: ".swiper-pagination",
            loop: true
          },
          swiperList: [
            {
              id: "0001",
              imgUrl:
                "../../static/images/img/image/1.png"
            },
            {
              id: "0002",
              imgUrl:
                "../../static/images/img/image/2.png"
            },
            {
              id: "0003",
              imgUrl:
                "../../static/images/img/image/3.png"
            },
            {
              id: "0004",
              imgUrl:
                "../../static/images/img/image/6.png"
            },
            {
              id: "0005",
              imgUrl:
                "../../static/images/img/image/7.png"
            },
            {
              id: "0006",
              imgUrl:
                "../../static/images/img/image/8.png"
            },
            {
              id: "0007",
              imgUrl:
                "../../static/images/img/image/9.png"
            },
            {
              id: "0008",
              imgUrl:
                "../../static/images/img/image/4.png"
            },
            {
              id: "0009",
              imgUrl:
                "../../static/images/img/image/5.png"
            },
            {
              id: "0010",
              imgUrl:
                "../../static/images/img/image/10.png"
            },
            {
              id: "0011",
              imgUrl:
                "../../static/images/img/image/11.png"
            },
            {
              id: "0012",
              imgUrl:
                "../../static/images/img/image/13.png"
            },
            {
              id: "0013",
              imgUrl:
                "../../static/images/img/image/12.png"
            },
            {
              id: "0014",
              imgUrl:
                "../../static/images/img/image/23.png"
            },
            {
              id: "0015",
              imgUrl:
                "../../static/images/img/image/27.png"
            },
            {
              id: "0016",
              imgUrl:
                "../../static/images/img/image/28.png"
            },
            {
              id: "0017",
              imgUrl:
                "../../static/images/img/image/29.png"
            },
            {
              id: "0018",
              imgUrl:
                "../../static/images/img/image/30.png"
            },
            {
              id: "0019",
              imgUrl:
                "../../static/images/img/image/31.png"
            },
            {
              id: "0020",
              imgUrl:
                "../../static/images/img/image/32.png"
            },
            {
              id: "0021",
              imgUrl:
                "../../static/images/img/image/33.png"
            },
            {
              id: "0022",
              imgUrl:
                "../../static/images/img/image/44.png"
            },
          ]
        };
      }
    }
</script>

<style scoped>
  /*.wrapper >>> .swiper-pagination-bullet-active { // 对样式进行穿透*/
  /*background: #fff;*/
  /*}*/

  .wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-bottom: 31.25%;
  }

  .swiper-img {
    width: 100%;
  }



</style>
