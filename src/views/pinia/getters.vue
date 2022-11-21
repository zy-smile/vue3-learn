<template>
  <h3>getters</h3>
  <span>数量：</span>
  <span>{{doublecount}}</span>
  <el-button type="primary" @click="addHandle">自增++</el-button>
</template>
<!--<script setup>-->
<!--import { useIndex } from "../../store/useIndex";-->
<!--import {storeToRefs} from "pinia";-->
<!--const counter = useIndex()-->
<!--const { doublecount } = storeToRefs(counter)-->
<!--function addHandle() {-->
<!--  counter.add()-->
<!--}-->
<!--</script>-->
<script>
  import {useIndex} from "../../store/useIndex";
  import { mapState, mapActions } from 'pinia'
  export default {
    methods: {
      ...mapActions(useIndex,['add']),
      addHandle() {
        this.add()
      }
    },
    computed: {
      ...mapState(useIndex, ['doublecount'])
    }
  }

</script>
