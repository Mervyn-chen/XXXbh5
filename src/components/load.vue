<template>
    <div class="load-container">
        <h1>Loading...</h1>
        <h2>{{percent}}</h2>
    </div>
</template>
<script>
export default {
    name:'load',
    data(){
        return {
            percent:null,
            count: '',
            result:'',
          xh:''
        }
    },
    mounted(){
        this.preload();

      //this.getxh()
    },
    methods:{

        preload(){
            var imgList = [
              '/static/images/picture3.jpg',
                '/static/images/bg_1.jpg',
                '/static/images/bg_2.jpg',
                '/static/images/bg_5.jpg',
                '/static/images/music.png',
                '/static/images/picture2.jpg',
              '/static/images/picture4.jpg',
              '/static/images/picture_one.jpg',

            ]
            for(let i=0;i<imgList.length;i++){
              // console.log(imgList.length)
                let image = new Image();
                image.src = imgList[i];
                this.count++;
                console.log(this.count);
                image.onload = function() {
                     // 计算图片加载的百分数，绑定到percent变量
                     var percent = Math.floor(this.count / (imgList.length) *100);
                     this.percent = `${percent}%`
                }
            }
          localStorage.clear();

        },


    },
    watch:{
        count:function(val){
            // console.log(val);
            if (val=== 8) {
                var finished = true;
                //this.xh=this.$route.query.xh;
                var xh='150940333';
                //localStorage.setItem('xh',this.studentid);
                this.$router.push({path:'page?xh='+xh,query:{finished:true}})
            }
        },
    }

}
</script>
<style lang="scss" scoped>
    .load-container{
        width:100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        padding:2rem 0;
    }

    h1,h2{
        color:#fff;
        font-weight:bold;
        margin: auto;
        text-align: center;
        margin-bottom: 1rem;
    }
    h1{
        font-size:.4rem;
    }
    h2{
        font-size: .26rem;
    }
</style>
