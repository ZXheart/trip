<script setup>
import {
  useHotSuggestsStore, useCategoriesStore, useContentStore
} from '@/stores/index'

import HomeTop from './homeComponents/HomeTop.vue'
import HomeBanner from './homeComponents/HomeBanner.vue'
import HomeLocation from './homeComponents/HomeLocation.vue'
import HomePeriod from './homeComponents/HomePeriod.vue'
import HomeFilter from './homeComponents/HomeFilter.vue'
import HomeSuggests from './homeComponents/HomeSuggests.vue'
import HomeCategories from './homeComponents/HomeCategories.vue'
import HomeContent from './homeComponents/HomeContent.vue'

import { storeToRefs } from 'pinia'


// 1. fetch Home hotSuggestsData > put the data into pinia(hotSuggestsData)
const { fetchHotSuggests } = useHotSuggestsStore()
fetchHotSuggests()
// 2. fetch Home catagoriesData > put the data into pinia(categoriesData)
const { fetchCategories } = useCategoriesStore()
fetchCategories()
// 3. fetch Home contentData > put the data into pinia(contentData)
const { fetchContent } = useContentStore()
const { contentData } = storeToRefs(useContentStore())
if (contentData.value.length === 0) fetchContent()
</script>

<template>
  <div class="home">
    <HomeTop />
    <HomeBanner />
    <HomeLocation />
    <HomePeriod />
    <HomeFilter />
    <HomeSuggests />
    <HomeCategories />
    <HomeContent />
  </div>
</template>

<style lang="less" scoped>
.home {
  --van-calendar-popup-height: 90%;
  padding-bottom: 50px;
}
</style>