<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useDetailsStore } from '@/stores/modules/details'

const { currentProductInfos } = storeToRefs(useDetailsStore())
const mainPart = currentProductInfos.value.mainPart
const priceIntroduction = mainPart.introductionModule

const tripleLine = ref(true)
const showMore = () => {
  tripleLine.value = false
}
</script>

<template>
  <div class="price-introduction">
    <h2 class="title">{{ priceIntroduction.title }}</h2>
    <div class="introduction-detail" :class="{ 'triple-line': tripleLine }">
      {{ priceIntroduction.introduction }}
      <van-icon v-if="tripleLine" class="show-more" @click="showMore" name="arrow-down" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.price-introduction {
  padding: 10px 16px 20px;
  background-color: #fff;

  h2.title {
    padding: 10px 0;
    font-weight: 700;
    font-size: 14px;
    color: #333;
  }

  .introduction-detail {
    position: relative;
    font-size: 12px;
    line-height: 1.2;

    .show-more {
      position: absolute;
      right: 7px;
      bottom: 0;
      width: 15px;
      height: 15px;
      line-height: 15px;
      background-color: #fff;
      color: #999;
    }
  }

  .triple-line {
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>