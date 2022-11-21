<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    :router="true"
    background-color="#343434"
    text-color="#fff"
    active-text-color="#ffd04b"
    :unique-opened="true"
    @select="handleSelect"
  >
     <el-sub-menu :index="item.id" v-for="item in menuList" :key="item.id">
          <template #title>
                <span>{{item.title}}</span>
            </template>
            <el-menu-item :index="option.path" v-for="option in item.children" :key="option.id">{{option.title}}</el-menu-item>
     </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from './sideBarData'
console.log(menuList)
const activeIndex = '/ref'


</script>

<style scoped lang="less">
    .el-menu {
        height: 100%;
        background-color: #343434;
    }
</style>
