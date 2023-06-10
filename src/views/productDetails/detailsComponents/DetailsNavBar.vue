<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const onClickLeft = () => {
  router.back()
}
</script>

<template>
  <div class="details-navbar">
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<style lang="less" scoped>
.details-navbar {
  --van-nav-bar-text-color: var(--primary-color);
  --van-nav-bar-icon-color: var(--primary-color);

  :deep(.van-nav-bar__title) {
    color: var(--primary-color);
    font-weight: 400;
    font-size: 14px;
  }
}
</style>
