<script setup>
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'


import { useCityStore, useMainStore } from '@/stores'

// import state from pinia( city )
const { cityData, activeTab, backToTop } = storeToRefs(useCityStore())
const { currentCity } = storeToRefs(useMainStore())

// back to top
const content = ref()
watch(() => backToTop.value, newVal => {
  newVal && (content.value.scrollTop = 0 + 'px')
  backToTop.value = false
}, { immediate: true })

//return hot list array
const getHotList = computed(() => {
  return (currentObj) => {
    return ['#', ...currentObj?.cities.map(item => item.group)]
  }
})
// getCityName event
const router = useRouter()
const getCityName = (city) => {
  currentCity.value.ID = city.cityId
  currentCity.value.name = city.cityName
  router.back()
}
</script>

<template>
  <div class="city-list" ref="content">
    <!-- 直接加载国内外两个列表, 切换时显示/隐藏 -->
    <template v-for="(showTabVal, showTabKey) in cityData">
      <van-index-bar v-show="showTabKey === activeTab" highlight-color="#fd7e57" :index-list="getHotList(showTabVal)"
        :sticky="false">
        <!-- hot list -->
        <van-index-anchor index="热门" />
        <div class="hot-list">
          <template v-for="hotItem in showTabVal.hotCities">
            <div class="hot-item" @click="getCityName(hotItem)">{{ hotItem.cityName }}</div>
          </template>
        </div>
        <!-- city list start -->
        <template v-for="listings in showTabVal?.cities" :key="listings.group">
          <van-index-anchor :index="listings.group" />
          <template v-for="item in listings.cities" :key="item.cityName">
            <van-cell :title="item.cityName" @click="getCityName(item)" />
          </template>
        </template>
        <!-- city list end -->
      </van-index-bar>
    </template>
  </div>
</template>

<style lang="less" scoped>
.city-list {
  height: calc(100vh - 98px);
  overflow-y: auto;

  .hot-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    text-align: center;

    .hot-item {
      margin: 0 0 10px;
      width: 70px;
      height: 25px;
      line-height: 25px;
      background-color: #fff4ec;
      border-radius: 10px;
    }
  }
}
</style>