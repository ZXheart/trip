import { defineStore } from "pinia"
import { ref } from "vue"

export const useMainStore = defineStore('mainStore', () => {
  const globalLoading = ref(false)
  const getLocationLoading = ref(false)
  const currentCity = ref({ ID: 48, name: '北京' })

  // * get current position
  const getCurrentPosition = async () => {
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(pos => {
        resolve(pos)
      }, err => {
        console.log(err)
      }, {
        enableHighAccuracy: true
      })
    })
  }

  // *  get current city
  const getCurrentCity = () => {
    // 34.815224 113.559952( Long may the sunshine~ )
    getLocationLoading.value = !getLocationLoading.value
    getCurrentPosition().then(res => {
      const myGeo = new BMapGL.Geocoder()
      myGeo.getLocation(new BMapGL.Point(res.coords.longitude, res.coords.latitude), result => {
        if (result) {
          currentCity.value.name = result.addressComponents.city.replace('市', '')
          getLocationLoading.value = !getLocationLoading.value
        }
      })
    })
  }
  return { globalLoading, getLocationLoading, currentCity, getCurrentCity }

})
