<script setup>
import { useContentStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { _ } from 'lodash'
import { ref } from 'vue'

// import state of [contentData&currentPage] from pinia( home > useContentStore)
const { contentData, currentPage } = storeToRefs(useContentStore())

// import function of fetch Home contentData
const { fetchContent } = useContentStore()

/**
 * 1. scrollHeight: the whole height of the element's content
 * 2. scrollTop: the distance of the scroll to top
 * 3. clientHeight: the viewport's height
 * 4. [scrollTop - (scrollTop + clientHeight) = distance to the bottom]
 */
let scrollHeight = document.documentElement.scrollHeight
let scrollTop = document.documentElement.scrollTop
let clientHeight = document.documentElement.clientHeight

window.addEventListener('scroll', _.throttle(() => {
  scrollTop = document.documentElement.scrollTop
  scrollHeight = document.documentElement.scrollHeight
  if (scrollHeight - (scrollTop + clientHeight) < 100) {
    currentPage.value += 1
    fetchContent(currentPage.value)
  }
}, 500))

const value = ref(5)
</script>

<template>
  <div class="home-content">
    <div class="content-title">
      <div class="icon"></div>
      <h1 class="title">热门精选</h1>
    </div>
    <div class="content-list">
      <template v-for="(item, index) in contentData" :key="item.data.houseId">
        <div class="content-item">
          <!-- type9 -->
          <div class="type9" v-if="item.discoveryContentType === 9">
            <img class="product-img" :src="item.data.image.url" alt="img~">
            <div class="type9-details">
              <div class="summaryText">{{ item.data.summaryText }}</div>
              <div class="house-name">{{ item.data.houseName }}</div>
              <div class="bottom">
                <div class="comment">
                  <van-rate v-model="value" readonly color="#fff" :size="13" />
                </div>
                <div class="final-price">¥{{ item.data.finalPrice }}</div>
              </div>
            </div>
          </div>
          <!-- type3 -->
          <div class="type3" v-if="item.discoveryContentType === 3">
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
                <span class="discount">{{ item.data.priceTipBadge.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url(@/assets/css/mixins.less);

.home-content {
  margin-top: 20px;
  padding: 0 10px;

  .content-title {
    display: flex;
    align-items: center;
    font-size: 20px;

    h1.title {
      font-weight: 700;
    }

    .icon {
      margin-right: 2px;
      width: 20px;
      height: 23px;
      background-image: url(@/assets/img/sprite.png);
      background-repeat: no-repeat;
      background-position: bottom left;

    }
  }

  .content-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    align-items: center;

    >div {
      margin-top: 10px;
      width: 45vw;
      height: 60vw;
      border-radius: 10px;
      background-color: #f1f3f5;

      &:nth-child(2n+1) {
        margin-right: 10px;
      }

      >div {
        height: 100%;
      }
    }

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


  }
}
</style>