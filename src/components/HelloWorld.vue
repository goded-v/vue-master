<template>
  <div id="HelloWorld">
    <div class="content">
      <div @click="goIndex">{{msg}}</div>
      <div @click="numChange">vuex的值为{{vuexNum}}</div>
    </div>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import BasePage from '../assets/basePage';
import tools from '@/assets/tools.js';
let HelloWorld = new BasePage()
HelloWorld.data = function () {
  return {
    transitionName: 'router-slide',
    msg: '跳转到下一页'
  }
}
HelloWorld.computed = {
  vuexNum: function () {
    return this.$store.state.vuexNum.vuexNum
  }
}
HelloWorld.mounted = function () {
  let arry = ['6','5','1','2','4','3','7'];
  let newArry = tools.maopao(arry);
  console.log(newArry);
}
HelloWorld.methods = {
  goIndex: function () {
    this.$router.push({path: 'HelloWorld/index'})
  },
  numChange: function () {
    this.$store.commit('changeName');
  },
}
export default HelloWorld
</script>
<style scoped >
  #HelloWorld{
    position: absolute;
    top: 0px;
    bottom: 0px;
    background-color: #000;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  .content{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    position: absolute;
    -webkit-overflow-scrolling: touch;
    background-color: white;

  }
</style>
