/**
 * @author roy
 * @date 2019/3/1
 * @Description: 选择排序
*/
function selection_sort (arr) {
  var len = arr.length;
  var minIndex, swap;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) { //寻找最小的数
        minIndex = j; //将最小数的索引保存
      }
    }
    swap = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = swap;
  }
  return arr;
}
