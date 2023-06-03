import axiosInstance from "../request"

export function getAllCity() {
  return axiosInstance.get({
    url: "/city/all"
  })
}