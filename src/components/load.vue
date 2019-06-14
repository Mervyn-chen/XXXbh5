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
          xh:'',
          sign:'',
          token:'',
        }
    },
    mounted(){
        this.preload();
        this.getUrlParam();

      //this.getxh()
    },
    methods:{
      getUrlParam() {//封装方法
        this.xh=this.$route.query.timestamp;
        this.sign=this.$route.query.sign;
        this.token=this.$route.query.token;
        console.log(this.xh)
        console.log(this.sign)
        console.log(this.token);
        let info={

          timestamp:this.xh,
         sign:this.sign,
         token:this.token,

        };
        console.log(info)
        this.$ajax.post("http://localhost:8080/decoding/findXh",
           JSON.stringify(info),{
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then(response => {
            this.result = response.data;
            console.log(response.data)
          localStorage.setItem('xh',this.result);
          this.$router.push({path:'page',query:{finished:true}})
          }).catch(function (err) {
          console.log(err);
        })

      },


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
         // localStorage.clear();

        },


    },
    watch:{
        count:function(val){
            // console.log(val);
            if (val=== 8) {
                var finished = true;
              this.xh=this.$route.query.timestamp;
              this.sign=this.$route.query.sign;
              this.token=this.$route.query.token;
              console.log(this.xh)
              console.log(this.sign)
              console.log(this.token);
              // var id = getUrlParam("timestamp");//26
              // var dataId = getUrlParam("token");//3
              // var sign = getUrlParam("sign");//3
              // console.log(id);
                //var xh='151410209';
                //localStorage.setItem('xh',this.studentid);
               // this.$router.push({path:'page',query:{finished:true}})
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
