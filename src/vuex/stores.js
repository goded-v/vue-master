const stores = {}
stores.vuexNum = {
  state: {
    vuexNum: 1
  },
  mutations: {
    changeName: function (state) {
      state.vuexNum++;
    }
  },
  // A的修改
  changeNameA: function (state) {
    state.vuexNum++;
  }
}
export default stores
