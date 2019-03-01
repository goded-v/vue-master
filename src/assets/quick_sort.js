/**
 * @author roy
 * @date 2019/3/1
 * @Description: 快速排序
 * 第一趟排序时将数据分成两部分，一部分比另一部分的所有数据都要小。然后递归调用，在两边都实行快速排序。
*/
function quick_sort (arr) {
  if(arr.length<=1){
    return arr;
  }
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex,1)[0];

  var left = [];
  var right = [];
  for (var i = 0;i<arr.length;i++) {
    if(arr[i]<pivot){
      left.push(arr[i]);
    }else {
      right.push(arr[i]);
    }
  }

  return quick_sort(left).concat([pivot],quick_sort(right));
}
