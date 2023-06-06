import { defineStore } from "pinia"
import { getAllCity } from '@/servers'
import { ref } from "vue"

export const useCityStore = defineStore('cityStore', () => {
  const cityData = ref({})
  const activeTab = ref('')
  const backToTop = ref(false)
  const currentCity = ref({ ID: '48', name: '北京' })

  const fetchAllCity = async () => {
    const res = await getAllCity()
    cityData.value = res.data
  }

  return { cityData, activeTab, backToTop, currentCity, fetchAllCity, }
})
