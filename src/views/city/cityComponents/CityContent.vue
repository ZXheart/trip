<script setup>
import { useCityStore } from '@/stores'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
// 获取数据
const { cityData, activeTab } = storeToRefs(useCityStore())

const currentTab = computed(() => cityData.value[activeTab.value])
</script>

<template>
  <div class="city-content">
    <p v-for="item in currentTab">
      {{ item }}
    </p>

  </div>
</template>

<style scoped>
.city-content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>