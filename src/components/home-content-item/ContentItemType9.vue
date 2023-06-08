<script setup>
import { computed } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
// computed current item's <commentScore> to Number
const value = computed(() => {
  return Number(props.item.data.commentScore)
})
</script>

<template>
  <div class="type9">
    <img class="product-img" :src="item.data.image.url" alt="img~">
    <div class="type9-details">
      <div class="summaryText">{{ item.data.summaryText }}</div>
      <div class="house-name">{{ item.data.houseName }}</div>
      <div class="bottom">
        <div class="comment">
          <van-rate v-model="value" readonly allow-half color="#fff" :size="13" />
        </div>
        <div class="final-price">¥{{ item.data.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url(@/assets/css/mixins.less);

.type9 {
  position: relative;

  img.product-img {
    border-radius: 10px;
    width: 100%;
  }

  .type9-details {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 10px;
    color: #fff;
    font-size: 14px;

    .house-name {
      margin-top: 5px;
      .two-ellipsis()
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 10vw;
    }
  }
}
</style>