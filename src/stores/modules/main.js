import { defineStore } from "pinia"
import { ref } from "vue"

export const useMainStore = defineStore('mainStore', () => {
  const isLoading = ref(false)

  return { isLoading }
})
