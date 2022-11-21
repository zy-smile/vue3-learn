<template>
  <h3>组件插槽</h3>

  <my-component #default="{msg}">

    子组件动态内容
    {{msg}}

  </my-component>

</template>

<script setup>
import MyComponent from './my-component.vue'
</script>

<style scoped lang="less">

</style>
