const stores = {}
stores.vuexNum = {
  state: {
    vuexNum: 1
  },
  mutations: {
    changeName: function (state) {
      state.vuexNum++;
    },
    changeNameB: function (state) {
      state.vuexNum++;
    }
  },
  // A的修改
  changeNameB: function (state) {
    state.vuexNum++;
  }
  // b的改动
}
export default stores
