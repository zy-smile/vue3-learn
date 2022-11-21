<template>
    <h3>Ref</h3>
    <el-row>
      <span>数字：</span><span>{{count}}</span>
    </el-row>
  <el-row>
    <span>count是否是ref:</span><span>{{flag}}</span>
  </el-row>

  <el-button type="primary" @click="addHandle">自增+1</el-button>

  <el-row>
    <span>state:</span> <span>{{state.count}}</span>
    <el-button @click="addStateHandle">自增++</el-button>
  </el-row>
</template>

<script setup>
import {isRef, ref, shallowRef, unref} from "vue";

//ref
const count = ref(1)
function addHandle() {
  count.value++
}
//isRef
const flag = isRef(count)

//unref --- isRef语法糖
const uncount = unref(count)
console.log(uncount)

const state = shallowRef({count: 1})
function addStateHandle() {
  // state.value.count++ 不是响应性
  state.value = { count: 2}
}



</script>
<style>
.el-row {
  display: flex;
  align-items: center;
  margin: 20px;
}
</style>
