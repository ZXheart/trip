<script setup>

</script>

<template>
  <div class="home-filter">
    <div class="price">价格不限</div>
    <div class="number">人数不限</div>
  </div>
</template>

<style lang="less" scoped>
.home-filter {
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 20px;
  color: var(--common-gray-color);

  >div {
    flex: 1;
  }

  .price {
    padding-left: 10px;
  }

  .number {
    margin-left: -10px;
    text-align: center;
  }
}
</style>