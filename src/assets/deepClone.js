/**
 * @author roy
 * @date 2019/4/23
 * @Description: deepClone
*/
module.exports = {
  deepClone:function () {
    if (!data || !(data instanceof Object) || typeof data === "function") {
      return data;
    }
    var constructor = data.constructor;
    var result = new constructor();
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        result[key] = deepClone(data[key]);
      }
    }
    return result ;
  },
  deepClone2:function (p, c) {
    var c = c || {};
    for(var i in p){
      if(typeof p[i] === 'object'){
        c[i] = (p[i].constructor === Array) ? [] : {};
        deepClone2(p[i],c[i]);
      }else{
        c[i] = p[i];
      }
    }
  }
  
}
