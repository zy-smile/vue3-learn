<template>
  <div>
    <button :class="['my-'+ type]" v-bind="$attrs">
      <el-icon v-if="preIcon">
        <component :is="preIcon"></component>
      </el-icon>
      <slot>默认</slot>
    </button>
  </div>
  <div></div>
</template>

<script setup>
import {toRefs} from "vue";

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  preIcon: {
    type: Function,
    default: ''
  }
})
const { type, preIcon } = toRefs(props)

</script>

<style scoped lang="less">
button {
  width: 96px;
  height: 36px;
  outline: none;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.my-primary {
  background-color: #55b3ee;
  color: #fff;
}
.my-danger {
  background-color: #ff4444;
  color: #fff;
}
</style>
