import axiosInstance from "../request"

// get hot suggests 
export function getHotSuggests() {
  return axiosInstance.get({
    url: "/home/hotSuggests"
  })
}