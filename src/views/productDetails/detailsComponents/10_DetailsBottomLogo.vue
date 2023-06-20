<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useDetailsStore } from '@/stores/modules/details'

const { currentProductInfos } = storeToRefs(useDetailsStore())
const mainPart = currentProductInfos.value.mainPart
const ensure = mainPart.ensureModule

// const toTop = ref()
// onMounted(() => {
//   console.log(toTop.value.offsetTop)
// })
</script>

<template>
  <div class="details-bottom-logo" ref="toTop">
    <img class="slogan-img" :src="ensure.icon" alt="bottom logo img~">
  </div>
</template>

<style lang="less" scoped>
.details-bottom-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 40px;
  background-color: #fff;

  img.slogan-img {
    width: 33%;
  }
}
</style>