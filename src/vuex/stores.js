const stores = {}
stores.vuexNum = {
  state: {
    vuexNum: 1
  },
  mutations: {
    changeName: function (state) {
      state.vuexNum++;
    }
  }
}
export default stores
