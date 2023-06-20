<script setup>
import TabBar from './components/tab-bar/TabBar.vue'
import Loading from './components/loading/Loading.vue'


</script>

<template>
  <RouterView v-slot="props">
    <KeepAlive include="Home">
      <component :is="props.Component" />
    </KeepAlive>
  </RouterView>
  <Loading />
  <TabBar />
</template>

<style scoped></style> 