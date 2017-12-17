<template>
<div>
     <h1>计数器:{{$store.state.count}}</h1>
     <h1>{{count2}}</h1>
  <button @click="$store.commit('add',10)">+</button>
  <!-- <button @click="$store.commit('reduce')">-</button> -->
  <button @click="reduce">-</button>
  <p>
      <button @click="addAction">jia</button>
        <button @click="reduceAction">减？</button>
  </p>
</div>
 
</template>

<script>
import store from "@/vuex/store";
//import {mapState} from 'vuex'  //方法二，mapState对象
import { mapState, mapMutations, mapGetters,mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  store,
  /*  computed:{
        count1(){  //名称和上面的count1对应
            return this.$store.state.count;
        }
    }, */
  /*  computed:mapState({
        count1:state=>state.count
    }) */
  //computed:mapState(['count'])
  computed: {
    // ...mapState(['count']),
    ...mapGetters(["count2"])
  },
  methods:{
      ...mapMutations(["add","reduce"]),
      ...mapActions(['addAction','reduceAction'])
  } 
};
</script>

<style>

</style>
