<template>
   <header>
       <div class="logo">
            <img src="../assets/logo.png" alt="">
            <h2>Vue学习{{count}}</h2>
       </div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#f1f1f1"
            text-color="#666"
            active-text-color="#ffd04b"
            @select="handleSelect"
        >

            <el-menu-item>首页1</el-menu-item>
            <el-menu-item>2</el-menu-item>
            <el-menu-item>3</el-menu-item>
        </el-menu>
   </header>
</template>

<script setup>
    import {ref} from 'vue'
    const activeIndex = ref('1')
    import { useIndex } from '../store/useIndex'
    import {storeToRefs} from "pinia";
    const counter = useIndex()
    const { count } = storeToRefs(counter)
</script>

<style scoped lang="less">
    header {
        display: flex;
        background-color: #f1f1f1;
    }
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 199px;
        height: 60px;
        background-color: #343434;
        border-bottom: 1px solid #555;
        box-sizing: border-box;
        img {
            display: block;
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
        h2 {
            color: #f1f1f1;
        }
    }
    .el-menu {
        flex: 1;
        height: 60px;
    }
</style>
