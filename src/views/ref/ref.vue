<template>
  <el-page-header content="响应式数据" @back="goBack" title="返回"/>
    <el-button type="primary" @click="clickhandle">点击+1</el-button>
    <h2>{{count}}</h2>
    <h2>对象1: {{data.count}}</h2>
    <h2>对象2: {{obj.count}}</h2>
    <h2>数组： {{arr[0].count}}</h2>
</template>

<script>
import {ref,reactive,unref} from 'vue'
export default {
    name: 'ref',
    setup() {
        const count = ref(1)
        const data = ref({
            count: 1
        })
        const obj = reactive({
            count: 1
        })
        const arr = ref([{
            count: 1
        },{
            count: 2
        }])
        const dataarr = reactive([
            {count: 1},
            {count: 2}
        ])
        
        // console.log(data); 
        // console.log(data.count);//undefined
        // console.log(obj);
        // console.log(obj.count); 1
        console.log(arr);
        console.log(dataarr);
        function clickhandle() {
            count.value ++
            data.value.count++
            obj.count++
            arr.value[0].count = 2
            console.log(unref(arr));
        }
        return {
            count,
            data,
            obj,
            arr,
            clickhandle
        }
    }
}
</script>

<style>
.el-page-header {
    margin-bottom: 30px;
}
</style>