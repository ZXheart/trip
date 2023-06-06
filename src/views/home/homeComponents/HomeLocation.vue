<script setup>
import { useRouter } from 'vue-router'
import { useCityStore } from '@/stores'
import { storeToRefs } from 'pinia'
const { currentCity } = storeToRefs(useCityStore())

// switchLocation
const router = useRouter()
const switchLocation = () => {
  router.push('/City')
}
// [refresh / get] location
const getLocation = () => {
  navigator.geolocation.getCurrentPosition(async pos => {
    console.log(pos)
  }, err => {
    console.log(err)
  }), { enableHighAccuracy: true }
}
</script>

<template>
  <div class="home-location">
    <div class="switch-location" @click="switchLocation">{{ currentCity.name }}</div>
    <div class="get-location" @click="getLocation">
      <span>我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="get position">
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 40px;

  .switch-location {
    flex-grow: 1;
  }

  .get-location {
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
</style>