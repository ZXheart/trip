<script setup>
import DetailsNavBar from './detailsComponents/DetailsNavBar.vue'
import DetailsBanner from './detailsComponents/DetailsBanner.vue'

</script>

<template>
  <div class="product-details">
    <DetailsNavBar />
    <DetailsBanner />
  </div>
</template>

<style lang="less" scoped>
.product-details {
  background-color: #f1f3f5;
}
</style>