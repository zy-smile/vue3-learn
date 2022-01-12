<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    :router="true"
    background-color="#333"
    text-color="#fff"
    active-text-color="#ffd04b"
    :unique-opened="true"
    @select="handleSelect"
  >
     <el-sub-menu index="1">
          <template #title>
                <span>组合api</span>
            </template>
          <el-menu-item index="/ref">响应式注册</el-menu-item>
            <el-menu-item index="1-2">watch监听</el-menu-item>
            <el-menu-item index="1-3">计算属性</el-menu-item>
     </el-sub-menu>
      <el-sub-menu index="2">
          <template #title>
                <span>首页</span>
            </template>
          <el-menu-item index="2-1">首页1</el-menu-item>
            <el-menu-item index="2-2">2</el-menu-item>
            <el-menu-item index="2-3">3</el-menu-item>
     </el-sub-menu>
  </el-menu>
</template>

<script>
export default {

}
</script>

<style scoped>
    .el-menu {
        height: 100%;
    }
</style>