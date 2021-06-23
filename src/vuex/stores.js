const stores = {}
stores.vuexNum = {
  state: {
    vuexNum: 1
  },
  // A的修改
  changeNameB: function (state) {
    state.vuexNum++;
  }
  // b的改动
}
export default stores
