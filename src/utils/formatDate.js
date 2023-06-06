import dayjs from "dayjs"

export function formatWithString(date) {
  return dayjs(date).format('MM月DD日')
}
export function formatDifference(checkOut, checkIn) {
  return dayjs(checkOut).diff(checkIn, 'day')
}
export function formatWithPoint(date) {
  return dayjs(date).format('MM.DD')
}