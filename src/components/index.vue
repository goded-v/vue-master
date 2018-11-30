<template>
  <div id="index">
    <div class="content">
      <div @click="goBack">返回上一页</div>
      <div>作用域插槽</div>
      <child-slot>
        <div slot="index" slot-scope="user" >
          <li v-for="(item,index) in user.data">{{item.name}}：得分：{{item.pts}},篮板：{{item.ba}},助攻：{{item.to}}</li>
        </div>
      </child-slot>
    </div>
  </div>
</template>
<script>
import BasePage from '../assets/basePage';
import child from '@/components/slot';
let index = new BasePage()
index.data = function () {
  return {
    msg: 'Welcome to Your Vue.js App'
  }
}
index.mounted = function () {
  console.log(this)
}
index.methods = {
  goBack: function () {
    this.$router.go(-1)
  }
}
index.components={
  'child-slot':child,
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
