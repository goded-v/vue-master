const stores = {}
stores.vuexNum = {
  state: {
    vuexNum: 1
  },
  mutations: {
    changeName: function (state, param) {
      state.vuexNum++;
    }
  }
}
export default stores
