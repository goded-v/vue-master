<template>
    <div>
      <div>球员得分情况</div>
      <slot :data="list" name="index"></slot>
    </div>
</template>

<script>
    export default {
        name: "slot-part",
       data:function () {
        return {
          list:[
            {'name':'jordan', 'pts':'30', 'ba':'7', 'to':'5'},
            {'name':'james', 'pts':'28', 'ba':'7', 'to':'7'},
            {'name':'kobe', 'pts':'25', 'ba':'5', 'to':'5'}
            ]
        }
      }
    }
</script>

<style scoped>

</style>
