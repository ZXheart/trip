<script setup>
import { useCityStore } from '@/stores/index'
import CityTop from './cityComponents/CityTop.vue'
import CityContent from './cityComponents/CityContent.vue'

// 发送网络请求
const { fetchAllCity } = useCityStore()
fetchAllCity()


</script>

<template>
  <div class="city">
    <CityTop />
    <CityContent />
  </div>
</template>

<style scoped>
.city {
  --van-search-left-icon-color: var(--primary-color)
}
</style>