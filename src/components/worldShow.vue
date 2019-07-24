<template>
    <div :key="index" v-for="(item,index) in worldList">
      <tr>
        <td>{{item}}</td>
      </tr>
    </div>
</template>

<script>
    export default {
        name: "worldShow",
        porps:[''],
        data: function () {
        return {
          world:"我是好学生",
          worldList:[]
        }
      },
       mounted () {

       }
    }
</script>

<style scoped>

</style>
