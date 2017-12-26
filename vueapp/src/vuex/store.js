import Vue from 'vue'  //不用写@,直接去nodemodules找
import Vuex from 'vuex'
//import default from 'vue-router';
Vue.use(Vuex)

const state = {
    photoList:[]  //名字随便起的
}

const mutations = {
    setPhotoList(state,status){
        state.photoList=status;
    }
}

const getters = {

}

const actions = {
    //也可以写业务逻辑
    setPhotoList({commit},status){
        commit('setPhotoList',status);
    }
}

export default new Vuex.Store({
    state,
    mutations,
     getters,
    actions
})