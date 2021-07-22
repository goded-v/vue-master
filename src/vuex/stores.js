const stores = {}
stores.vuexNum = {
  state: {
    vuexNum: 1
  },
<<<<<<< HEAD
  mutations: {
    changeName: function (state) {
      state.vuexNum++;
    }
  },
  // A的修改
  changeNameA: function (state) {
=======
  // A的修改
  changeNameB: function (state) {
>>>>>>> testB
    state.vuexNum++;
  }
  // b的改动
}
export default stores
