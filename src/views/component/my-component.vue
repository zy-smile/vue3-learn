<template>

  <slot :msg="msg" :user="username"></slot>
  <slot name="header"></slot>
<!--  <header>-->
<!--&lt;!&ndash;    具名插槽&ndash;&gt;-->
<!--    <slot name="header" :msg="msg" :user="username"></slot>-->
<!--  </header>-->
<!-- <main>-->
<!--   <slot :msg="msg">这是子组件</slot>-->
<!-- </main>-->
</template>

<script setup>
import {ref} from "vue";

const msg = ref('子组件插槽模板向父组件传递值')
const username = ref('lisi')
</script>

<style scoped lang="less">

</style>
