<template>
  <h2>pinia</h2>
  <span>数量：</span><span>{{count}}</span>
  <el-button type="primary" @click="addHandle">点击++</el-button>
</template>
<script setup>
import { useIndex } from '../../store/useIndex'
import { storeToRefs } from 'pinia'
const counter = useIndex()
const { add } = counter
const { count } = storeToRefs(counter)
function addHandle() {
  add()
}
</script>
