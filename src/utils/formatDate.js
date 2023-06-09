import dayjs from "dayjs"

export function formatWithString(date, type = 'MM月DD日') {
  return dayjs(date).format(type)
}
export function formatDifference(checkOut, checkIn) {
  return dayjs(checkOut).diff(checkIn, 'day')
}