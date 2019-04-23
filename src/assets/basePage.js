const mixin = {
  mounted () {
    console.log('挂载组件' + this.$route.path + '>>>>>>>>>')
  }
}
class basePage {
  constructor () {
    this.mixins = [mixin] sd
  }
}
/**
 *const basePage = function () {
 *       this.mixins = [mixin]
 *  }
 *此方法和constructor构造的对象一样
 *
 * */
export default basePage
