<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const getLocation = () => {
  router.push('/City')
}
const getPosition = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log(res)
  }, err => {
    console.log(err)
  })
}
</script>

<template>
  <div class="home-search">
    <div class="search-top" @click="getLocation">
      <span class="location">河南</span>
      <div class="position" @click="getPosition">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="get position">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-search {
  .search-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 40px;

    .location {
      flex-grow: 1;
    }

    .position {
      width: 80px;

      span {
        position: relative;
        top: 1px;
        margin-right: 5px;
      }

      img {
        width: 15px;
      }
    }
  }
}
</style>