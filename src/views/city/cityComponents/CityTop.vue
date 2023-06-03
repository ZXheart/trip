<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useCityStore } from '@/stores'
import { storeToRefs } from 'pinia'
// 获取数据
const { cityData, activeTab } = storeToRefs(useCityStore())
// 搜索框
const router = useRouter()
const searchValue = ref('')
const onCancel = () => {
  router.push('/')
}
// 标签页

</script>

<template>
  <div class="city-top">
    <!-- 搜索框 -->
    <van-search v-model="searchValue" placeholder="城市/区域/位置" show-action shape="round" @cancel="onCancel" />
    <!-- 标签页 -->
    <van-tabs v-model:active="activeTab" color="#fd7e57">
      <template v-for="(value, key) in cityData">
        <van-tab :title="value.title" :name="key"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style scoped></style>