<template>
  <div id="HelloWorld">
    <div class="content">
      <div @click="goIndex">{{msg}}</div>
      <div @click="numChange">vuex的值为{{vuexNum}}</div>
      <div class="itemClass" style="background-color: red" @click="changeTheme('theme1')"></div>
      <div class="itemClass" style="background-color: yellow" @click="changeTheme('theme2')"></div>
      <div class="itemClass" style="background-color: black" @click="changeTheme('theme3')"></div>
      <div class="itemClass-div">我是主题</div>
    </div>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import BasePage from '../assets/basePage';
import tools from '@/assets/tools';
import {promise} from '@/assets/promise';
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
  // let arry = ['6','5','1','2','4','3','7'];
  // let newArry = tools.maopao(arry);
  // console.log(newArry);
  // /**
  //  * 原型链理解
  //  * */
  // var A = function() {};
  // var a = new A();
  // console.log(a.__proto__);  // A {};  实例对象a的原型是构造器A的原型对象console.log(a.__proto__.__proto__);
  // console.log(a.__proto__.__proto__);// Object {} 构造器A的原型是function Object的原型对象console.log(a.__proto__.__proto__.__proto__);
  // console.log(a.__proto__.__proto__.__proto__);// null
  // this.prototypeExtend();//js 原型继承方法
  // this.classExtend();//class 继承方法
  // promise();
  // async function async1(){
  //   console.log('async1 start')
  //   await async2()
  //   console.log('async1 end')
  // }
  // async function async2(){
  //   console.log('async2')
  // }
  // console.log('script start')
  // setTimeout(function(){
  //   console.log('setTimeout')
  // },0)
  // async1();
  // new Promise(function(resolve){
  //   console.log('promise1')
  //   resolve();
  // }).then(function(){
  //   console.log('promise2')
  // })
  // console.log('script end')
}
HelloWorld.methods = {
  changeTheme:function(theme){
    window.document.documentElement.setAttribute('data-theme', theme)
  },
  goIndex: function () {
    this.$router.push({path: 'HelloWorld/index'})
  },
  numChange: function () {
    this.$store.commit('changeName');
  },
  prototypeExtend:function () {//原型链继承方法
    function Student(props) {
      this.name = props.name || 'Unname';
    }
    Student.prototype.hello = function () {
      console.log('Hello,' + this.name + '!');
    }
    function PrimaryStudent(props) {
      Student.call(this,props);
      this.grade = props.grade || 1;
    }
    function inherits(Child, Parent) {//原型链继承方法
      var F = function () {};// 空函数F:
      F.prototype = Parent.prototype;// 把F的原型指向Parent.prototype:
      Child.prototype = new F();// 把Child的原型指向一个新的F对象，F对象的原型正好指向Parent.prototype:
      /**
      * 把Child原型的构造函数修复为Child
       * 注意如果不修改constructor，那么他的实例的constructor就变成了F
      * */
      Child.prototype.constructor = Child;
    }
    //实现原型链继承
    inherits(PrimaryStudent,Student);

    //绑定其他方法到PrimaryStudent原型
    PrimaryStudent.prototype.geGrade = function () {
      return this.grade;
    }
    let xiaoMing = new PrimaryStudent('xiaoMing');
    console.log(xiaoMing);
  },
  classExtend:function () {//class 继承
    class Student {
      constructor(name){
        this.name = name || '无名氏';
      }
      hello(){
        console.log('Hello, ' + this.name + '!');
      }
    }
    class PrimaryStudent extends Student { //class 继承
      constructor(name, grade) {
        /**
         *  记得用super调用父类的构造方法!
         *  这是重点
         * */
        super(name);
        this.grade = grade || 1;
      }
      myGrade() {
        console.log('I am at grade ' + this.grade);
      }
    }
    let luozheng = new PrimaryStudent();
    luozheng.hello();
    luozheng.myGrade();
  }
}
export default HelloWorld
</script>
<style scoped lang="scss">
  @import '../assets/scss/test';
    .itemClass{
      width: 100px;
      height: 20px;
    }
  .itemClass-div{
    width: 100px;
    height: 200px;
    margin:  100px auto;
    @include bg_color();
  }
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
