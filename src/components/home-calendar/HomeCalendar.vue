<script setup>
import { usePeriodStore } from '@/stores'
import { storeToRefs } from 'pinia'

// import state of period from pinia( home > usePeriodStore )
const { homeCalendarState, inTimestamp, outTimestamp } = storeToRefs(usePeriodStore())

//calendar confirm event
const onConfirm = (value) => {
  inTimestamp.value = value[0]
  outTimestamp.value = value[1]
  homeCalendarState.value = false
}
</script>

<template>
  <div class="home-calendar">
    <van-calendar v-model:show="homeCalendarState" @confirm="onConfirm" type="range" color="#fd7e57" />
  </div>
</template>

<style scoped></style>