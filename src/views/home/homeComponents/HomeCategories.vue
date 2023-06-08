<script setup>
import { useCategoriesStore } from '@/stores'
import { storeToRefs } from 'pinia'

// import state of categoriesData from pinia( home > useCategoriesStore)
const { categoriesData } = storeToRefs(useCategoriesStore())
</script>

<template>
  <div class="home-categories">
    <template v-for="(item, index) in categoriesData" :key="item.id">
      <div class="categories-item">
        <img class="icon" :src="item.pictureUrl" alt="img~">
        <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.home-categories {
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 0 10px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .categories-item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 70px;

    img.icon {
      width: 30px;
    }

    span.text {
      padding-top: 5px;
      font-size: 12px;
    }
  }
}
</style>