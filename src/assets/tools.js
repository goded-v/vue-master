 const tools = {
  maopao:function (arry) { // 冒泡排序
    if (arry.length === null || arry.length === undefined){
      return
    }
    for (var i = 0, len = arry.length; i < len; i++){
      for (var j = 0; j < len - 1 - i; j++){ // 依次比较相邻的两个数据
        if (arry[j] > arry[j + 1]){
          var temp = arry[j + 1];
          arry[j + 1] = arry[j];
          arry[j] = temp;
        }
      }
    }
    return arry;
  },
   // 统计一个字符串出现最多的字母
   countMaxstr: function (str) {
     if (str.length === 0) return "字符串为空";
     if (str.length === 1) return [str, 1];
     let arr = [];
     let numArr = []
     for (var i = 0; i < str.length; i++) {
       let num = 0;
       let x = str[i];
       if (arr.indexOf(x) === -1) {
         for (var j = 0; j < str.length; j++) {
           if (str[j] === x) {
             num++;
           }
         }
         numArr.push(num);
         arr.push(x);
       }
     }
     let maxNum = Math.max(...numArr);
     let maxStr = arr[numArr.indexOf(maxNum)];
     return [maxStr, maxNum];
   },

   // 不借助临时变量，进行两个整数的交换
   changeLocation : function (a,b) {
     b = b - a;
     a = a + b;
     a = a - b;
     return [a,b];
   }

}
export default tools;
/**
 * 注：当直接export const tools={}的时候，import时，要加用花括号把变量包上。如import {tools} from....;
 * 而 当使用 上面这种情况 ，在import时，就不需要上面的操作了。
 * 但是export default const tools；就会报错。因为export default命令其实只是输出一个叫做default 的变量，
 * 所以它后面不能跟申明变量的语句。
 * */
