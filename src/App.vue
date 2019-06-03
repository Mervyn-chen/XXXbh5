<template>
  <div id="app">

     <!--<audio src="../static/audio/background2.mp3" autoplay loop preload></audio>-->
    <router-view></router-view>
    <div class="swiper-button-next" @click="close"><i class="icon "></i></div>
        <div class="audio">
          <!--隐藏audio标签-->
          <audio autoplay="autoplay" id="music1">
    <!--        <source src="https://test.app.bhfae.com:8443/files/file/2177691016.mp3">-->
    <!--<source src="../static/audio/background2.mp3">   -->
    <source src="../static/audio/background3.mp3">   
      </audio>
        </div>


  </div>
</template>

<script>

export default {
  name: 'App',
  mounted: {

  },
  methods: {
    close() {
      var audio = document.getElementById('music1');
      if (audio.paused) {
        audio.play();  // 播放
      } else {
        audio.pause();// 暂停
      }
    },
    audioAutoPlay(id) {
      let audio = document.getElementById(id),
          play = function(){
            audio.play();
            document.removeEventListener("touchstart",play, false);
          };
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
          play();
        }, false);
        document.addEventListener('YixinJSBridgeReady', function() {
          play();
        }, false);
        document.addEventListener("touchstart",play, false);
    }

  }
}
</script>


<style>
body,html{
  width:100%;
  height:100%;
  overflow: hidden;
  font-family: "微软雅黑" ;
  font-size:12px;
}
.container{
    width:100%;
    height:100%;
    overflow: hidden;
    position:absolute;
}
</style>
<style lang="scss" scoped>
  #app{
    height:100%;
  }
  .icon{
    display:inline-block;
    width:20px;
    height:20px;
    background: url(../static/images/music.png) no-repeat;
    background-size: 100%;
    margin:10px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 100;

  }
</style>
