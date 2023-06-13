import { defineStore } from "pinia"
import { getProductDetails } from '@/servers'
import { ref } from "vue"

export const useDetailsStore = defineStore('detailsStore', () => {
  const currentProductInfos = ref({})

  const fetchProductDetails = async (houseID) => {
    const res = await getProductDetails(houseID)
    currentProductInfos.value = await res.data
  }

  return { currentProductInfos, fetchProductDetails }
})