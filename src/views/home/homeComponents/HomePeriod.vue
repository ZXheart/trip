<script setup>
import { ref } from 'vue'
import { usePeriodStore } from '@/stores'
import { storeToRefs } from 'pinia';

// import state of period from pinia( home > usePeriodStore )
const { inTimestamp, outTimestamp, checkIn, checkOut, stayPeriod
} = storeToRefs(usePeriodStore())

//calendar event
const calendarState = ref(false)
const showCalendar = () => {
  calendarState.value = true
}
const onConfirm = (value) => {
  inTimestamp.value = value[0]
  outTimestamp.value = value[1]
  calendarState.value = false
}

</script>

<template>
  <div class="home-period" @click="showCalendar">
    <div class="check-in">
      <span>入住</span>
      <div>{{ checkIn(inTimestamp) }}</div>
    </div>
    <div class="period-of-stay">共 {{ stayPeriod(outTimestamp, inTimestamp) }} 晚</div>
    <div class="check-out">
      <span>离店</span>
      <div>{{ checkOut(outTimestamp) }}</div>
    </div>
  </div>
  <div class="home-calendar">
    <van-calendar v-model:show="calendarState" @confirm="onConfirm" type="range" color="#fd7e57" />
  </div>
</template>

<style lang="less" scoped>
.home-period {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;

  >div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    >span {
      color: var(--common-gray-color);
    }
  }

  .check-in {
    padding-left: 10px;
  }
}
</style>
