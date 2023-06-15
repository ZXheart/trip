<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import { useMainStore } from '@/stores'


const { currentCity, getLocationLoading } = storeToRefs(useMainStore())
const { getCurrentCity } = useMainStore()

// * A. choose location manually
const router = useRouter()
const switchLocation = () => {
  router.push('/City')
}

// * B. getting location while the first time come into the home page
(() => getCurrentCity())()

// * C. [refresh / get] location
const getLocation = () => {
  getCurrentCity()
}
</script>

<template>
  <div class="home-location">
    <div class="switch-location" @click="switchLocation">
      {{ currentCity.name }}
    </div>
    <div class="get-location" @click="getLocation">
      <span class="text">我的位置</span>
      <img v-if="!getLocationLoading" src="@/assets/img/home/icon_location.png" alt="get position">
      <van-loading v-if="getLocationLoading" type="spinner" color="#fd7e57" size="15px" />
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
    display: flex;
    width: 80px;

    span.text {
      margin-right: 5px;
    }

    img {
      width: 15px;
    }
  }
}
</style>