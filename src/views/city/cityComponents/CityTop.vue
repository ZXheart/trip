<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useCityStore } from '@/stores'
import { storeToRefs } from 'pinia'
// get data from pinia store
const { cityData, activeTab, backToTop } = storeToRefs(useCityStore())
// search input > back to last page when clicking
const router = useRouter()
const searchValue = ref('')
const onCancel = () => {
  router.back()
}
// tag click event
const toTop = () => {
  backToTop.value = true
}
</script>

<template>
  <div class="city-top">
    <!-- 搜索框 -->
    <van-search v-model="searchValue" placeholder="城市/区域/位置" show-action shape="round" @cancel="onCancel" />
    <!-- 标签页 -->
    <van-tabs v-model:active="activeTab" color="#fd7e57" @click-tab="toTop">
      <template v-for="(value, key) in cityData">
        <van-tab :title="value.title" :name="key"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style scoped>
.city-top {
  position: relative;
  z-index: 9;
}
</style>