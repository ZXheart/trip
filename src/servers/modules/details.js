import axiosInstance from "../request"

export function getProductDetails(houseID) {
  return axiosInstance.get({
    url: '/detail/infos',
    params: {
      houseId: houseID
    }
  })
}