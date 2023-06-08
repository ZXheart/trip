<script setup>
import { useHotSuggestsStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';

// import state of hotSuggestsData from pinia( home > useHotSuggestsStore )
const { hotSuggestsData } = storeToRefs(useHotSuggestsStore())

// hot suggests search function 
const router = useRouter()
const search = () => {
  router.push('/search')
}
</script>

<template>
  <div class="home-hot-suggests">
    <div class="keywords">
      <h4>关键字/位置/民宿名</h4>
    </div>
    <div class="hot-suggests">
      <template v-for="item in hotSuggestsData" :key="item.tagText.text">
        <span :style="{ backgroundColor: item.tagText.background.color, color: item.tagText.color }">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="search-btn">
      <van-button round type="success" size="large" color="linear-gradient(to right, #fd7e57, #fcaf3f)"
        @click="search">开始搜索</van-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-hot-suggests {
  --van-button-large-height: 40px;
  margin-top: 20px;
  padding-left: 10px;

  .keywords {
    color: var(--common-gray-color);
  }

  .hot-suggests {
    margin: 20px 0;
    padding: 0 40px 0 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    span {
      margin: 5px 7px;
      padding: 3px 5px;
      border-radius: 10px;
      font-size: 12px;
    }
  }

  .search-btn {
    padding: 0 20px 0 10px;
  }
}
</style>