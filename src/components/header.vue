
<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#e9e9e9"
    text-color="#666"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
   
      <el-menu-item>首页1</el-menu-item>
      <el-menu-item>2</el-menu-item>
      <el-menu-item>3</el-menu-item>
  </el-menu>
</template>

<script setup>
    import {ref} from 'vue'
    const activeIndex = ref('1')
</script>

<style scoped>
    .el-menu {
        margin-left: -1px;
        height: 60px;
    }
</style>