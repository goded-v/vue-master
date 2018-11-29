<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .router-slide-enter-active, .router-slide-leave-active {
    transition: all .3s;
  }
  .router-slide-enter, .router-slide-leave-active {
    transform: translateX(100%);
  }
</style>
