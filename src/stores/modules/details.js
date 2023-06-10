import { defineStore } from "pinia"
import { getProductDetails } from '@/servers'
import { ref } from "vue"

export const useDetailsStore = defineStore('detailsStore', () => {
  const currentProductInfos = ref({})

  const fetchProductDetails = async () => {
    const res = await getProductDetails(houseID)
    currentProductInfos.value = res.data
  }

  return { fetchProductDetails }
})