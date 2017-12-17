import vue from'vue'
import vuex from 'vuex'
//import default from 'vue';
vue.use(vuex);

const state={
    count:1
};

const mutations={
    add(state,number){
        state.count+=number;
    },
    reduce(state){
        state.count--;
    }
}

const getters = {
    //相当于computed
    count2(state){  
        return state.count+=100;
    }
}

const actions = {
    //通过actions再去调用mutations里的方法
    addAction({commit}){
        commit('add',10);
    },
    reduceAction({commit}){
        commit('reduce');
    }
}
export default new vuex.Store({
    state,
    mutations,
    getters,
    actions
});