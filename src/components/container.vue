<template>
 
  <div class="container">
      <Header/>
       <div class="leftbar">
            <left-bar></left-bar>
        </div>
      <div class="content">
          <router-view></router-view>
      </div>
  </div>
</template>

<script setup>
import Header from '../components/header.vue'
import LeftBar from '../components/leftbar.vue'
</script>

<style scoped>
    .leftbar {
        position: absolute;
        left: 0;
        top: 60px;
        bottom: 0;
        width: 200px;
    }
    .container {
        height: 100%;
    }
    .content {
        position: absolute;
        left: 200px;
        top: 60px;
        bottom: 0;
        right: 0;
        margin: auto;
    }
</style>