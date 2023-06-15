import { defineStore } from "pinia"
import { getAllCity } from '@/servers'
import { ref } from "vue"

export const useCityStore = defineStore('cityStore', () => {
  const cityData = ref({})
  const activeTab = ref('')
  const backToTop = ref(false)

  const fetchAllCity = async () => {
    const res = await getAllCity()
    cityData.value = await res.data
  }

  return { cityData, activeTab, backToTop, currentCity, fetchAllCity, }
})
