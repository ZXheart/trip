<script setup>
import { computed } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
// computed discount amount
const discount = computed(() => {
  return props.item.data.productPrice - props.item.data.finalPrice
})
</script>

<template>
  <div class="type3">
    <img class="product-img" :src="item.data.image.url" alt="img~">
    <div class="type3-details">
      <div class="location">
        <img src="@/assets/img/home/location.png" alt="">
        {{ item.data.location }}
      </div>
      <div class="house-name">{{ item.data.houseName }}</div>
      <div class="summary-text">{{ item.data.summaryText }}</div>
      <div class="price">
        <span class="final-price">¥{{ item.data.finalPrice }}</span>
        <del class="product-price">¥{{ item.data.productPrice }}</del>
        <span class="discount">已减¥{{ discount }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url(@/assets/css/mixins.less);

.type3 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img.product-img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
  }

  .type3-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 10px;

    .location {
      font-size: 12px;
      color: var(--common-gray-color);

      img {
        position: relative;
        bottom: 1px;
        width: 15px;
      }
    }

    .house-name {
      .two-ellipsis()
    }

    .summary-text {
      font-size: 12px;
      color: var(--common-gray-color);
    }

    .price {
      .final-price {
        margin-right: 5px;
        color: var(--primary-color);
      }

      .product-price {
        margin-right: 5px;
        color: var(--common-gray-color);
      }

      .discount {
        padding: 0 2px;
        line-height: 2;
        color: #fff;
        font-size: 12px;
        background-image: linear-gradient(#FF6666, #FF9F9F);
        border-radius: 5px;
      }
    }
  }

}
</style>