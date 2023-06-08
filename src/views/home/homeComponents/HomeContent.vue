<script setup>
import { watch } from 'vue'
import { _ } from 'lodash'
import { storeToRefs } from 'pinia'

import { useContentStore } from '@/stores'
import useScrollToBottom from '@/hooks/useScrollToBottom'

import ContentItemType9 from '@/components/home-content-item/ContentItemType9.vue'
import contentItemType3 from '@/components/home-content-item/ContentItemType3.vue'


// import state of [contentData&currentPage] from pinia( home > useContentStore)
const { contentData, currentPage } = storeToRefs(useContentStore())

// import function of fetch Home contentData
const { fetchContent } = useContentStore()

// hooks
useScrollToBottom(() => {
  currentPage.value += 1
  fetchContent(currentPage.value)
})

// const { scrollTop } = useScrollToBottom()
// watch(() => scrollTop.value, (newVal, oldVal) => {
//   if (newVal >= 100) console.log('666')
// })
</script>

<template>
  <div class="home-content">
    <div class="content-title">
      <div class="icon"></div>
      <h1 class="title">热门精选</h1>
    </div>
    <div class="content-list">
      <template v-for="(item, index) in contentData" :key="item.data.houseId">
        <div class="content-item">
          <ContentItemType9 v-if="item.discoveryContentType === 9" :item="item" />
          <contentItemType3 v-else-if="item.discoveryContentType === 3" :item="item" />
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

    .icon {
      margin-right: 2px;
      width: 20px;
      height: 23px;
      background-image: url(@/assets/img/sprite.png);
      background-repeat: no-repeat;
      background-position: bottom left;

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