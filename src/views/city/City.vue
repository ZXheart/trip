<script setup>
import { useCityStore } from '@/stores/index'
import CityTop from './cityComponents/CityTop.vue'
import CityList from './cityComponents/CityList.vue'

// fetchAllCity'data - put the data into pinia(cityData)
const { fetchAllCity } = useCityStore()
fetchAllCity()


</script>

<template>
  <div class="city">
    <CityTop />
    <CityList />
  </div>
</template>

<style scoped>
.city {
  --van-search-left-icon-color: var(--primary-color)
}
</style>