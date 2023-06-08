<script setup>
import TabBar from './components/tab-bar/TabBar.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <RouterView></RouterView>
  <TabBar v-if="!route.meta.hiddenTabBar"></TabBar>
</template>

<style scoped></style> 