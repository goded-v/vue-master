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
import tools from '@/assets/tools';
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
  /**
   * 原型链理解
   * */
  var A = function() {};
  var a = new A();
  console.log(a.__proto__);  // A {};  实例对象a的原型是构造器A的原型对象console.log(a.__proto__.__proto__);
  console.log(a.__proto__.__proto__);// Object {} 构造器A的原型是function Object的原型对象console.log(a.__proto__.__proto__.__proto__);
  console.log(a.__proto__.__proto__.__proto__);// null
  // this.prototypeExtend();//js 原型继承方法
  this.classExtend();//class 继承方法
}
HelloWorld.methods = {
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
