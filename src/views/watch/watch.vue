<template>
  <input type="file" accept="image/*" multiple>
  <input type="file" accept="audio/*">
  <button @click="$router.push({path: '/readonly'})">带有历史记录</button>
  <button @click="$router.replace({path: '/readonly'})">不带历史记录</button>
</template>

<script>
export default {

}
</script>

<style>

</style>