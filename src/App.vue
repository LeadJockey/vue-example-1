<template>
  <div>
    <h1>App</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    console.log('app mounted')
  }
}
</script>

<style>
</style>
