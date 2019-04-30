/**
 * @author roy
 * @date 2019/4/29
 * @Description: 抽象工厂模式
 */
var VehicleFactory = function (subType,superType) {
  if(typeof VehicleFactory[superType] === "function"){
    // 缓存类
    function F() {};
    // 继承父类属性和方法
    F.prototype = new VehicleFactory[superType]();
    // 将子类的constructor指向子类
    subType.constructor = subType;
    // 子类原型继承父类
    subType.prototype = new F();
  }else {
    // 不存在该抽象类抛出错误
    throw new Error("未创建该抽象类");
  }
}
// 汽车抽象类
VehicleFactory.Car = function () {
  this.type = "car";
}
VehicleFactory.Car.prototype = {
  getPrice:function () {
    return new Error('抽象方法不能调用');
  },
  getSpeed:function () {
    return new Error("抽象方法不能调用");
  }
}
// 公交车抽象类
VehicleFactory.Bus = function () {
  this.type = "bus";
}
VehicleFactory.Bus.prototype = {
  getPrice :function () {
    return new Error("抽象方法不能调用")
  },
  getPassengerNum:function () {
    return new Error("抽象方法不能调用")
  }
}
var BMW = function (price,speed) {
  if(this instanceof BMW){
    this.price = price;
    this.speed = speed;
  }else {
    return new BMW(price,speed)
  }

}
VehicleFactory(BMW,"Car");
BMW.prototype.getPrice = function () {
  return this.price;
}
BMW.prototype.getSpeed = function () {
  return this.speed;
}
var a =  new BMW('110',"111")
