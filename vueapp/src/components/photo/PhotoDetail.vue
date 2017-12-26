<template>
 
  <vue-touch @swipeleft="swipeleft" @swiperight="swiperight" @tap="tap" class="detail" :style="styleObj">
     
  </vue-touch>
</template>
<script>
export default{
    data(){
     return{
         nowIndex :0        
        }
    },
    computed:{     
            styleObj(){
              return{
                  background: `#000 url(${this.$store.state.photoList[this.nowIndex].src}) no-repeat center/contain`                 
                // background: "#000 url("+this.$store.state.photoList[this.nowIndex].src+") no-repeat center/contain"
              }
            }
    },
    methods:{
        swipeleft(){
            this.nowIndex--;
            if(this.nowIndex == -1){
                this.nowIndex = this.$store.state.photoList.length-1;
            }
        },
        swiperight(){
            this.nowIndex++;
             if(this.nowIndex == this.$store.state.photoList.length){
                this.nowIndex = 0;
            }
        },
        tap(){
            this.$router.go(-1);          
        }
    },
mounted(){
    // console.log(this.$store.state.photoList[this.$route.params.index].src);
    this.nowIndex = this.$route.params.index;
}
}    
</script>
<style scope>
.detail{
    margin:1rem 0;
    position:absolute;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
}

</style>