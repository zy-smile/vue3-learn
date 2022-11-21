<template>
  <MyButton class="my-button" @click="clickHandle"></MyButton>
  <MyButton class="my-button" @click="clickHandle" type="primary" :pre-icon="Plus"></MyButton>
  <MyButton class="my-button" @click="clickHandle" type="danger"></MyButton>
</template>

<script setup>
import MyButton from '../../components/common/my-button.vue'
import { Plus } from '@element-plus/icons-vue'
function clickHandle() {
  alert('click me')
}
</script>

<style scoped lang="less">
.my-button {
  margin: 20px;
}
</style>
