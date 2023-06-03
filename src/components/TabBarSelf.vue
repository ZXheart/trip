<script setup>
import router from '@/router'
import { ref } from 'vue';

const tabBar = [
  {
    title: '首页',
    router: '/',
    url: 'src/assets/img/tabbar/tab_home.png',
    activeUrl: 'src/assets/img/tabbar/tab_home_active.png',
  },
  {
    title: '收藏',
    router: '/favor',
    url: 'src/assets/img/tabbar/tab_favor.png',
    activeUrl: 'src/assets/img/tabbar/tab_favor_active.png',
  },
  {
    title: '订单',
    router: '/order',
    url: 'src/assets/img/tabbar/tab_order.png',
    activeUrl: 'src/assets/img/tabbar/tab_order_active.png',
  },
  {
    title: '消息',
    router: '/message',
    url: 'src/assets/img/tabbar/tab_message.png',
    activeUrl: 'src/assets/img/tabbar/tab_message.png',
  },
]
let current = ref(0)
const switchRouter = (routerName, index) => {
  current.value = index
  router.push(routerName)
}
</script>

<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabBar">
      <div class="tab-bar-item" @click="switchRouter(item.router, index)">
        <img :src="index === current ? item.activeUrl : item.url" :alt="item.title">
        <span :class="{ active: current === index }">{{ item.title }}</span>
      </div>
    </template>

  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  padding: 0 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0;
  width: 100vw;
  height: 50px;
  box-shadow: 0 0 1px 1px #ccc;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 33px;
    }

    span.active {
      color: var(--primary-color)
    }
  }
}
</style>