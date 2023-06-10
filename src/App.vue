<script setup>
import TabBar from './components/tab-bar/TabBar.vue'
import Loading from './components/loading/Loading.vue'


</script>

<template>
  <RouterView />
  <Loading />
  <TabBar />
</template>

<style scoped></style> 