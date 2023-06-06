<script setup>
import { useHotSuggestsStore } from '@/stores/index'

import HomeTop from './homeComponents/HomeTop.vue'
import HomeBanner from './homeComponents/HomeBanner.vue'
import HomeLocation from './homeComponents/HomeLocation.vue'
import HomePeriod from './homeComponents/HomePeriod.vue'
import HomeFilter from './homeComponents/HomeFilter.vue'
import HomeSuggests from './homeComponents/HomeSuggests.vue'

// fetch Home hotSuggests'data - put the data into pinia(hotSuggestsData)
const { fetchHotSuggests } = useHotSuggestsStore()
fetchHotSuggests()
</script>

<template>
  <div class="home">
    <HomeTop />
    <HomeBanner />
    <HomeLocation />
    <HomePeriod />
    <HomeFilter />
    <HomeSuggests />
  </div>
</template>

<style lang="less" scoped>
.home {
  --van-calendar-popup-height: 90%;
  padding-bottom: 50px;
}
</style>