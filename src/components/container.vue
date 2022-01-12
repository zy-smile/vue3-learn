<template>
  <div class="leftbar">
      <left-bar></left-bar>
  </div>
  <div class="container">
      <Header/>
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
    top: 0;
    bottom: 0;
    margin: auto;
    width: 200px;
}
.container {
    margin-left: 200px;
    height: 100%;
}
.content {
    padding: 20px;
}
</style>