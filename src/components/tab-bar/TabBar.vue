<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'


const tabBar = [
  {
    title: '首页',
    router: '/',
    url: '/tabbar/tab_home.png',
    activeUrl: '/tabbar/tab_home_active.png',
  },
  {
    title: '收藏',
    router: '/Favor',
    url: '/tabbar/tab_favor.png',
    activeUrl: '/tabbar/tab_favor_active.png',
  },
  {
    title: '订单',
    router: '/Order',
    url: '/tabbar/tab_order.png',
    activeUrl: '/tabbar/tab_order_active.png',
  },
  {
    title: '消息',
    router: '/Message',
    url: '/tabbar/tab_message.png',
    activeUrl: '/tabbar/tab_message.png',
  },
]


//! fix bug when manually switching routes in search input that the [current] hasn't changed
const current = ref(0)
const route = useRoute()
watch(() => route.path, newVal => {
  const index = tabBar.findIndex(item => item.router === newVal)
  if (index === -1) return
  current.value = index
})

//? 

</script>

<template>
  <div class="tabbar" v-if="!route.meta.hiddenTabBar">
    <van-tabbar route v-model="current" active-color="#Fd7e57">
      <template v-for="(item, index) in tabBar" :key="item.title">
        <van-tabbar-item :to="item.router">
          <span>{{ item.title }}</span>
          <template #icon>
            <img :src="index === current ? item.activeUrl : item.url" :alt="item.title + 'img~'">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped></style>