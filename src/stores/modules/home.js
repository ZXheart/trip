import { computed, ref } from "vue"
import { formatDifference, formatWithString } from '@/utils/formatDate'
import { getCategories, getContent, getHotSuggests } from "@/servers"

import { defineStore } from "pinia"

//* 1. [home > period state]
export const usePeriodStore = defineStore('periodStore', () => {
  const homeCalendarState = ref(false)
  // get default timestamp of checkIn(current) & checkOut(+24hours)
  const inTimestamp = ref(new Date().getTime())
  const outTimestamp = ref(new Date().getTime() + 86400000)
  // computed in&outTimestamp to 'legible string'
  const checkIn = computed(() => {
    return (inTimestamp, type) => {
      return formatWithString(inTimestamp, type)
    }
  })
  const checkOut = computed(() => {
    return (outTimestamp, type) => {
      return formatWithString(outTimestamp, type)
    }
  })
  // computed period of stay (checkOut - checkIn)
  const stayPeriod = computed(() => {
    return (outTimestamp, inTimestamp) => {
      return formatDifference(outTimestamp, inTimestamp)
    }
  })
  return {
    homeCalendarState, inTimestamp, outTimestamp, checkIn, checkOut, stayPeriod
  }
})

//* 2. [home > hot suggests state] 
export const useHotSuggestsStore = defineStore('hotSuggestsStore', () => {
  // hot suggests state
  const hotSuggestsData = ref({})
  // fetch hotSuggests data
  const fetchHotSuggests = async () => {
    const res = await getHotSuggests()
    hotSuggestsData.value = res.data
  }

  return { hotSuggestsData, fetchHotSuggests }
})

//* 3. [home > categories state]
export const useCategoriesStore = defineStore('categoriesStore', () => {
  // categories state
  const categoriesData = ref({})
  // fetch categories data
  const fetchCategories = async () => {
    const res = await getCategories()
    categoriesData.value = res.data
  }
  return {
    categoriesData, fetchCategories
  }
})

//* 4. [home > content(products) list state]
export const useContentStore = defineStore('contentStore', () => {
  // content list state
  const contentData = ref([])
  // page of current fetch
  const currentPage = ref(1)
  // fetch content data
  const fetchContent = async (pageCounter = currentPage.value) => {
    const res = await getContent(pageCounter)
    contentData.value.push(...await res.data)
  }
  return {
    contentData, currentPage, fetchContent
  }
})