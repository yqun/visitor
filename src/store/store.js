import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    userId: '', //用户身份
    appoint: {} // 邀请，申请信息。
  },
  mutations: {
    Appoint (state, data) {
      state.appoint = data
    },
    UserId (state, id) {
      state.userId = id
    }
  }
});

export default store;
