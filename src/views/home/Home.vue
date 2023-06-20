<script setup>
import { ref, computed, onActivated, onDeactivated } from 'vue'
import { storeToRefs } from 'pinia'

import {
  useHotSuggestsStore, useCategoriesStore, useContentStore
} from '@/stores/index'

import useScrollToBottom from '@/hooks/useScrollToBottom'

import SearchBar from '@/components/home-search-bar/SearchBar.vue'
import HomeCalendar from '@/components/home-calendar/HomeCalendar.vue'

import HomeTop from './homeComponents/HomeTop.vue'
import HomeBanner from './homeComponents/HomeBanner.vue'
import HomeLocation from './homeComponents/HomeLocation.vue'
import HomePeriod from './homeComponents/HomePeriod.vue'
import HomeFilter from './homeComponents/HomeFilter.vue'
import HomeSuggests from './homeComponents/HomeSuggests.vue'
import HomeCategories from './homeComponents/HomeCategories.vue'
import HomeContent from './homeComponents/HomeContent.vue'

//* A. fetch Home hotSuggestsData & put it into pinia(hotSuggestsData)
const { fetchHotSuggests } = useHotSuggestsStore()
fetchHotSuggests()

//* B. fetch Home catagoriesData & put it into pinia(categoriesData)
const { fetchCategories } = useCategoriesStore()
fetchCategories()

//* C. fetch Home contentData & put it into pinia(contentData)
const { fetchContent } = useContentStore()
const { contentData } = storeToRefs(useContentStore())
if (contentData.value.length === 0) fetchContent()

//* D 
const { scrollTop } = useScrollToBottom()
const newRes = ref(0)
onDeactivated(() => {
  newRes.value = scrollTop.value
})
onActivated(() => {
  document.documentElement.scrollTo({
    top: newRes.value
  })
})
</script>

<template>
  <div class="home">
    <SearchBar />
    <HomeCalendar />

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