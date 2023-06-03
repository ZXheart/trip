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
    router: '/Favor',
    url: 'src/assets/img/tabbar/tab_favor.png',
    activeUrl: 'src/assets/img/tabbar/tab_favor_active.png',
  },
  {
    title: '订单',
    router: '/Order',
    url: 'src/assets/img/tabbar/tab_order.png',
    activeUrl: 'src/assets/img/tabbar/tab_order_active.png',
  },
  {
    title: '消息',
    router: '/Message',
    url: 'src/assets/img/tabbar/tab_message.png',
    activeUrl: 'src/assets/img/tabbar/tab_message.png',
  },
]
let current = ref(0)

</script>

<template class="test">
  <van-tabbar v-model="current" active-color="#Fd7e57">
    <template v-for="(item, index) in tabBar" :key="item.title">
      <van-tabbar-item :to="item.router">
        <span>{{ item.title }}</span>
        <template #icon>
          <img :src="index === current ? item.activeUrl : item.url" :alt="item.title">
        </template>
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<style lang="less" scoped></style>