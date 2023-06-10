<script setup>
import { useMainStore } from '@/stores'
const mainStore = useMainStore()

const hideLoading = () => {
  mainStore.isLoading = false
}
</script>

<template>
  <div class="loading" @click="hideLoading" v-show="mainStore.isLoading">
    <div class="loading-BG">
      <img class="loading-GIF" src="@/assets/img/home/full-screen-loading.gif" alt="loading gif~">
    </div>
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, .3);

  .loading-BG {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

    .loading-GIF {
      margin-bottom: 10px;
      width: 70px;
      height: 70px;
    }
  }

}
</style>