<script setup>
import { storeToRefs } from 'pinia'

import { useContentStore } from '@/stores'
import useScrollToBottom from '@/hooks/useScrollToBottom'

import ContentItemType9 from '@/components/home-content-item/ContentItemType9.vue'
import contentItemType3 from '@/components/home-content-item/ContentItemType3.vue'
import { useRouter } from 'vue-router'

//* A. [pinia] > state of contentData, currentPage
const { contentData, currentPage } = storeToRefs(useContentStore())

//* B. [pinia] > function of fetch Home's contentData
const { fetchContent } = useContentStore()

//* C. [hooks] > fetch more data when the scroll almost towards the end(bottom)
useScrollToBottom(() => {
  currentPage.value += 1
  fetchContent(currentPage.value)
})

//* D. [local] > into product details page
const router = useRouter()
const getDetails = (item) => {
  router.push('/ProductDetails/' + item.data.houseId)
}
</script>
 
<template>
  <div class="home-content">
    <div class="content-title">
      <van-icon name="fire" color="#fd7e57" />
      <h1 class="title">热门精选</h1>
    </div>
    <div class="content-list">
      <template v-for="(item, index) in contentData" :key="item.data.houseId">
        <div class="content-item">
          <ContentItemType9 v-if="item.discoveryContentType === 9" :item="item" @click="getDetails(item)" />
          <contentItemType3 v-else-if="item.discoveryContentType === 3" :item="item" @click="getDetails(item)" />
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-content {
  margin-top: 20px;
  padding: 0 10px;

  .content-title {
    display: flex;
    align-items: center;
    font-size: 20px;

    h1.title {
      font-weight: 700;
    }
  }

  .content-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    align-items: center;

    >div {
      margin-top: 10px;
      width: 45vw;
      height: 60vw;
      border-radius: 10px;
      background-color: #f1f3f5;

      &:nth-child(2n+1) {
        margin-right: 10px;
      }

      >div {
        height: 100%;
      }
    }
  }
}
</style>