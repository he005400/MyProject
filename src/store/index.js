import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    // 聚划算 切换页中商品数据
    list1: [],
    // 美团优选 切换页中商品数据
    list2: [],
    // 切换页数据 1为主页
    togglePage: 1
  },
  mutations: {
    initList1 (state, list) {
      state.list1 = list
    },
    initList2 (state, list) {
      state.list2 = list
    },
    changeToggleNum (state, num) {
      state.togglePage = num
    }
  },
  actions: {
    getList1 (context) {
      axios.get('/list1.json').then(({ data }) => {
        // console.log(data)
        context.commit('initList1', data)
      })
    },
    getList2 (context) {
      axios.get('/list2.json').then(({ data }) => {
        // console.log(data)
        context.commit('initList2', data)
      })
    }
  },
  getters: {
  },
  modules: {
  }
})
