import { computed, ref } from "vue"
import { formatDifference, formatWithPoint, formatWithString } from '@/utils/formatDate'

import { defineStore } from "pinia"
import { getHotSuggests } from "@/servers"

// 1. [home > calendar state]
export const usePeriodStore = defineStore('periodStore', () => {
  //default: get timestamp of checkIn(current) & checkOut(+24hours)
  const inTimestamp = ref(new Date().getTime())
  const outTimestamp = ref(new Date().getTime() + 86400000)
  // computed in&outTimestamp to 'legible string'
  const checkIn = computed(() => {
    return (inTimestamp, isString = true) => {
      if (isString) { return formatWithString(inTimestamp) }
      else { return formatWithPoint(inTimestamp) }
    }
  })
  const checkOut = computed(() => {
    return (outTimestamp, isString = true) => {
      if (isString) { return formatWithString(outTimestamp) }
      else { return formatWithPoint(outTimestamp) }
    }
  })
  //computed period of stay (checkOut - checkIn > day)
  const stayPeriod = computed(() => {
    return (outTimestamp, inTimestamp) => {
      return formatDifference(outTimestamp, inTimestamp)
    }
  })
  return {
    inTimestamp, outTimestamp, checkIn, checkOut, stayPeriod
  }
})

// 2. [home > hot suggests state] 
export const useHotSuggestsStore = defineStore('hotSuggestsStore', () => {

  // hot suggests state
  const hotSuggestsData = ref({})

  // fetchHotSuggests state
  const fetchHotSuggests = async () => {
    const res = await getHotSuggests()
    hotSuggestsData.value = res.data
  }

  return { hotSuggestsData, fetchHotSuggests }
})