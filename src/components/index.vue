<template>
  <div id="index">
    <div class="content">
      <div @click="goBack">返回上一页</div>
      <div>作用域插槽</div>
      <child-slot>
        <div slot="index" slot-scope="user" >
          <li v-for="(item,index) in user.data" :key=index>{{item.name}}：得分：{{item.pts}},篮板：{{item.ba}},助攻：{{item.to}}</li>
        </div>
      </child-slot>
      <div class="indexContent"></div>
    </div>
  </div>
</template>
<script>
import BasePage from '../assets/basePage'
import child from '@/components/slot'
let index = new BasePage()
index.data = function () {
  return {
    msg: 'Welcome to Your Vue.js App'
  }
}
index.created = function () {
  // let id = this.$route.query.id
}
index.mounted = function () {
  this.init()
  let a = [0, 1, 2, 3];
  let b;
  let c = a;
  b = a;
  b[0] = 2;
  console.log(a);
  console.log(b);
  console.log(c)
}
index.methods = {
  goBack: function () {
    this.$router.go(-1)
  },
  init: async function () {
    await this.test()
    console.log(1)
  },
  test: function () {
    console.log(2)
    setTimeout(function () {
      console.log(3)
    }, 500)
  }
}
index.components = {
  'child-slot': child
}
export default index
</script>

<style scoped>
  /*@import '../assets/scss/index.scss';*/
  /*.indexContent{*/
  /*  @include bg_color();*/
  /*  width: 100%;*/
  /*  height: 200px;*/
  /*}*/
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
