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
    return result ;static
  }
}
