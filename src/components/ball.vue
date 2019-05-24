<template>
    <div id="ball">
      <div class="content">
        <div class="back" @click="goBack"></div>
        <test-ball></test-ball>
      </div>
    </div>
</template>

<script>
    /**
     * @author 68732
     * @date  2019/5/24
     * @Description: ball
     */
    import testBall from "@/components/testBall";
    export default {
        name: "ball",
        props: [],
        data() {
            return {}
        },
        watch: {},
        computed: {},
        created() {
        },
        mounted() {
        },
        methods: {
          goBack () {
            this.$router.go(-1);
          }
        },
        components: {
          "test-ball":testBall
        }
    }
</script>

<style scoped>
  #ball{
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
  .back{
    width: 100%;
    height: 100px;
    background-color: red;
  }
</style>
