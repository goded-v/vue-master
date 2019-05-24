<template>
    <div id="scrollBall" :style="{top:currentTop+'px',left:currentLeft+'px',width:currentWith+'px',height:currentHeight+'px'}"></div>
</template>

<script>
    /**
     * @author 68732
     * @date  2019/5/24
     * @Description: scrollBall
     */
    export default {
        name: "scrollBall",
        props: [],
        data() {
            return {
              currentTop:100,
              currentLeft:100,
              currentWith:40,
              currentHeight:40
            }
        },
        watch: {},
        computed: {},
        created() {
        },
        mounted() {
          let me = this;
          let _x_start, _y_start, _x_move, _y_move, _x_end, _y_end, left_start, top_start;
          // 按下
          document.getElementById('scrollBall').addEventListener("touchstart",function (e) {
            _x_start = e.touches[0].pageX;// 起始点击位置
            _y_start = e.touches[0].pageY;// 起始点击位置
            left_start = me.currentLeft// 元素左边距
            top_start = me.currentTop;// 元素上边距
          },false)
          // 移动
          document.getElementById("scrollBall").addEventListener("touchmove", function (e) {
            e.preventDefault();// 取消事件的默认动作。
            _x_move = e.touches[0].pageX;// 当前屏幕上所有触摸点的集合列表
            _y_move = e.touches[0].pageY;// 当前屏幕上所有触摸点的集合列表
            // 左边距=当前触摸点-鼠标起始点击位置+起始左边距
            debugger
            me.currentLeft = parseFloat(_x_move) - parseFloat(_x_start) + parseFloat(left_start);
            // 上边距=当前触摸点-鼠标起始点击位置+起始上边距
            me.currentTop = parseFloat(_y_move) - parseFloat(_y_start) + parseFloat(top_start);
          }, false);
          // 松开
          document.getElementById("scrollBall").addEventListener("touchend", function (e) {
            var bodyW =  document.documentElement.clientWidth / 2;// 屏幕宽的一半
            var bodyH = document.documentElement.clientHeight;// 屏幕高
            _x_end = e.changedTouches[0].pageX;// 松开位置
            _y_end = e.changedTouches[0].pageY;// 松开位置
            var divH = me.currentHeight;// 元素高
            var divW = me.currentWith;// 元素宽
            //当最终位置在屏幕左半部分
            if (_x_end < bodyW) {
              me.currentLeft = 0;
            } else if (_x_end >= bodyW) {//当最终位置在屏幕左半部分
              me.currentLeft = document.documentElement.clientWidth - parseFloat(divW);
            }
            //当元素顶部在屏幕外时
            if (parseFloat(me.currentTop) < 0) {
              //置于顶部
              me.currentTop = 0;// 置于顶部
            }
            //当元素底部在屏幕外时
            if (bodyH - _y_end < parseFloat(divH) / 2) {
              //置于底部
              me.currentTop = bodyH - parseFloat(divH);
            }
          },false);
        },
        methods: {},
        components: {}
    }
</script>

<style scoped>
  #scrollBall{
    position: absolute;
    background-image: url("./img/apple.png");
    background-size: 100% 100%;
  }
</style>
