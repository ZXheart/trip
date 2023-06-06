<script setup>

</script>

<template>
  <div class="home-banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
      <van-swipe-item><img src="@/assets/img/home/banner.webp" alt="welcome~"></van-swipe-item>
      <van-swipe-item><img src="@/assets/img/home/banner.webp" alt="welcome~"></van-swipe-item>
      <van-swipe-item><img src="@/assets/img/home/banner.webp" alt="welcome~"></van-swipe-item>
    </van-swipe>
  </div>
</template>

<style scoped>
.home-banner img {
  width: 100vw;
}
</style>