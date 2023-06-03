import { defineStore } from "pinia"
import { getAllCity } from '@/servers'
import { ref } from "vue"

export const useCityStore = defineStore('cityStore', () => {
  const cityData = ref({})
  const activeTab = ref(0)
  const fetchAllCity = async () => {
    const res = await getAllCity()
    cityData.value = res.data
  }

  return { cityData, fetchAllCity, activeTab }
})
