<template>
  <div id="index">
    <div class="content">
      <div @click="goBack">返回上一页</div>
    </div>
  </div>
</template>
<script>
import BasePage from '../assets/basePage'
let index = new BasePage()
index.data = function () {
  return {
    msg: 'Welcome to Your Vue.js App'
  }
}
index.mounted = function () {
}
index.methods = {
  goBack: function () {
    this.$router.go(-1)
  }
}
export default index
</script>

<style scoped>
#index{
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
