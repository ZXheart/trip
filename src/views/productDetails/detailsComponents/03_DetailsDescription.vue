<script setup>
import { storeToRefs } from 'pinia'

import { useDetailsStore } from '@/stores/modules/details'

const { currentProductInfos } = storeToRefs(useDetailsStore())
const mainPart = currentProductInfos.value.mainPart
const houseName = mainPart.topModule.houseName
const houseTags = mainPart.topModule.houseTags
const commentBrief = mainPart.topModule.commentBrief
const nearByPosition = mainPart.topModule.nearByPosition


const showComment = () => {
  console.log('666')
}
const showMap = () => {
  console.log('666')
}
</script>

<template>
  <div class="details-description">
    <!-- A. house name-->
    <div class="house-name">{{ houseName }}</div>
    <!-- B. house tags -->
    <div class="house-tags">
      <template v-for="item in houseTags">
        <div v-if="item?.tagText" class="tags-item" :key="item.tagCode"
          :style="{ color: item.tagText.color, backgroundColor: item.tagText.background.color }">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!-- C. comment brief -->
    <div class="comment-brief">
      <div class="left">
        <span class="overall">{{ commentBrief.overall }}</span>
        <span class="score-title">{{ commentBrief.scoreTitle }}</span>
        <span class="brief">' {{ commentBrief.commentBrief }} '</span>
      </div>
      <div class="right" @click="showComment">
        <span class="total-count">{{ commentBrief.totalCount }}条评论</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- D. near by position -->
    <div class="near-by-position">
      <div class="left">
        <span class="address">{{ nearByPosition.address }}</span>
      </div>
      <div class="right" @click="showMap">
        <span class="total-count">地图•周边</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.details-description {
  padding: 20px 16px 5px;
  background-color: #fff;

  .house-name {
    font-size: 20px;
    font-weight: 700;
    color: #000;
  }

  .house-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;

    .tags-item {
      font-size: 12px;
      margin: 2px 2px;
      padding: 1px 3px;
      border-radius: 2px;
    }
  }

  .comment-brief,
  .near-by-position {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 0 10px;
    font-size: 12px;
    background-color: #f5f7fa;
    height: 8vw;

    .left {

      .overall {
        padding: 0 2px;
        font-size: 16px;
        font-weight: 700;
        color: #000;
      }

      .score-title {
        padding: 0 2px;
        font-weight: 600;
        color: #000;
      }
    }

    .right {
      color: var(--primary-color);
    }
  }

  .near-by-position {
    .left {
      .address {
        color: #000;
        font-weight: 700;
        font-size: 12px;
      }
    }
  }
}
</style>