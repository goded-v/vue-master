/**
 * @author roy
 * @date 2019/2/27
 * @Description: js工厂模式
*/
export const jsFactoryMode ={
  //简单的工厂模式
  // 函数CreatePerson能接受三个参数name,age,sex等参数，可以无数次调用这个函数，每次返回都会包含三个属性和一个方法的对象。
  // 工厂模式是为了解决多个类似对象声明的问题;也就是为了解决实列化对象产生重复的问题。
  CreatePerson : function (name,age,sex) {
    var obj = new Object();
    obj.name = name ;
    obj.age = age;
    obj.sex = sex;
    obj.sayName = function () {
      return this.name;
    }
    return obj;
  },
}

var BicycleShop = function (name) {
    this.name = name;
    this.method = function () {
      return this.name;
    }
  };
BicycleShop.prototype = {
  constructor:BicycleShop,
  //买车方法
  sellBicycle : function (model) {
    var bicycle = this.createBicycle(model);
    //业务a
    bicycle.A();
    //业务b
    bicycle.B();

    return bicycle;
  },
  createBicycle:function (modle) {
    throw new Error("父类是抽象类不能直接调用，需要之类重写该方法");
  },
};
//实现原型链继承
function extend(Sub,Sup){
  //Sub表示子类 ，Sup表示超类
  //先定义一个空函数
  var F = function () {

  };
  //设置空函数的原型为超类的原型
  F.prototype = Sup.prototype;

  //实例化空函数，并把超类原型应用传递给子类
  Sub.prototype = new F();

  //重置子类原型的构造器为子类自身
  /**
   *
   * 注意如果不修改constructor，那么他的实例的constructor就变成了F
   * */
  Sub.prototype.constructor = Sub;

  //在子类中保存超类的原型，避免子类与超类耦合
  Sub.sup = Sub.prototype;

  if(Sup.prototype.constructor === Object.prototype.constructor) {
    // 检测超类原型的构造器是否为原型自身
    Sup.prototype.constructor = Sup;
  }
}
var BicycleChild = function (name) {
  this.name = name;
  //继承构造函数父类中的属性和方法
  BicycleShop.call(this.name);
}
// 子类继承父类原型方法
extend(BicycleChild,BicycleShop);

// BicycleChild 子类重写父类的方法
BicycleChild.prototype.createBicycle = function(){
  var A = function(){
    console.log("执行A业务操作");
  };
  var B = function(){
    console.log("执行B业务操作");
  };
  return {
    A: A,
    B: B
  }
}
var childClass = new BicycleChild("龙恩");
console.log(childClass);
