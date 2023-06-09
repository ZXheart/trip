<script setup>
import { usePeriodStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

// import period state from pinia
const { inTimestamp, outTimestamp, checkIn, checkOut } = storeToRefs(usePeriodStore())

// back & menu event
const router = useRouter()
const backspace = () => {
  router.back()
}
const menu = () => {
  // router()
}
const chooseLocationPage = () => {
  router.push('/city')
}
const showCalendar = () => {
}
</script>

<template>
  <div class="search-navbar">
    <van-nav-bar @click-left="backspace" @click-right="menu" :border="false">
      <template #left>
        <img src="@/assets/img/common/icon_nav_back.png" alt="back">
      </template>
      <template #title>
        <div class="title-details">
          <div class="title-left">
            <div class="location" @click="chooseLocationPage">
              <div class="line"></div>
              <span>广州</span>
            </div>
            <div class="period" @click="showCalendar">
              <span class="check-in">住<b>{{ checkIn(inTimestamp, 'MM.DD') }}</b></span>
              <span class="check-out">离<b>{{ checkOut(outTimestamp, 'MM.DD') }}</b></span>
              <i></i>
            </div>
          </div>
          <div class="title-right">
            <input type="search" placeholder="搜索博尔塔拉的景点, ...">
          </div>
        </div>
      </template>
      <template #right>
        <img src="@/assets/img/home/icon-right-menu.png" alt="menu">
      </template>
    </van-nav-bar>
  </div>
</template>

<style lang="less" scoped>
.search-navbar {
  :deep(.van-nav-bar__title) {
    max-width: 75%;
  }

  .title-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    .title-left {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1px;
      background-color: #f1f3f5;
      height: 35px;
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;

      .location {
        position: relative;
        padding: 0 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;

        .line {
          position: absolute;
          right: 0;
          top: -3px;
          width: 1px;
          height: 36px;
          background-color: #fff;
        }
      }

      .period {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1px 8px;
        height: 30px;
        font-size: 12px;
        font-weight: 400;
        color: var(--common-gray-color);

        span {
          line-height: 1;

          b {
            padding-left: 5px;
            color: #404040;
          }
        }

        i {
          position: absolute;
          right: 0;
          bottom: 2px;
          width: 0;
          height: 0;
          border-top: 3px solid transparent;
          border-left: 3px solid transparent;
          border-right: 3px solid #000;
          border-bottom: 3px solid #000;

        }
      }
    }

    .title-right {
      padding: 0 7px;
      background-color: #f1f3f5;
      height: 35px;
      line-height: 30px;
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;

      input {
        width: 99%;
        border: none;
        outline: none;
        background-color: #f1f3f5;
        font-size: 12px;
        font-weight: 400;
        vertical-align: middle;
      }

      input::placeholder {
        color: var(--common-gray-color);
      }
    }
  }

  :deep(.van-nav-bar__left) {
    img {
      width: 8px;
    }
  }

  :deep(.van-nav-bar__right) {
    img {
      width: 18px;
    }
  }
}
</style>