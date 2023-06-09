<script setup>
import { computed, watch, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import { usePeriodStore } from '@/stores'
import useScrollToBottom from '@/hooks/useScrollToBottom'
import HomeCalendar from '../home-calendar/HomeCalendar.vue'

// ## two plans for watching the [showSearchBar's] change
const { scrollTop } = useScrollToBottom()
// 1. plan > A
// const showSearchBar = ref(false)
// watch(() => scrollTop.value, (newVal, oldVal) => {
//   showSearchBar.value = newVal >= 400
// })

// 2. plan > B
const showSearchBar = computed(() => {
  return scrollTop.value >= 400
})

// ## import state of period
const { homeCalendarState, inTimestamp, outTimestamp, checkIn, checkOut }
  = storeToRefs(usePeriodStore())
const searchValue = ref('')

const router = useRouter()
const intoSearchPage = () => {
  router.push()
}

const showCalendar = () => {
  homeCalendarState.value = true
}
</script>

<template>
  <div class="search-bar" v-if="showSearchBar">
    <div class="search-details">
      <div class="search-left" @click="showCalendar">
        <div class="period">
          <span class="check-in">住<b>{{ checkIn(inTimestamp, 'MM.DD') }}</b></span>
          <span class="check-out">离<b>{{ checkOut(outTimestamp, 'MM.DD') }}</b></span>
          <i></i>
        </div>
      </div>
      <div class="search-right">
        <div class="line"></div>
        <!-- <input type="search" placeholder="关键字/位置/民宿名"> -->
        <van-search right-icon="search" left-icon="none" background="#f7f8fa" v-model="searchValue"
          @focus="intoSearchPage" placeholder="关键字/位置/民宿名" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-bar {
  --van-search-padding: 0;
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;

  .search-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    background-color: #f7f8fa;
    border-radius: 10px;

    .search-left {

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

    .search-right {
      flex: 2;
      position: relative;

      .line {
        position: absolute;
        left: 0;
        bottom: -6px;
        height: 46px;
        width: 1.5px;
        background-color: #fff;
      }
    }
  }
}
</style>