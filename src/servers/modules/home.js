import axiosInstance from "../request"

// get hot suggests 
export function getHotSuggests() {
  return axiosInstance.get({
    url: "/home/hotSuggests"
  })
}
// get categories
export function getCategories() {
  return axiosInstance.get({
    url: "/home/categories"
  })
}

// get content list
export function getContent(pageCounter) {
  return axiosInstance.get({
    url: '/home/houselist',
    params: {
      page: pageCounter
    }
  })
}