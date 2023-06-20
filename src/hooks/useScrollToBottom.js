import { onMounted, onUnmounted, ref } from 'vue'

import { _ } from 'lodash'

/*
 * @type {Function} useScrollToBottom - get the distance between the viewport's bottom and  the scrollHeight's bottom
 * @param {Function} reachBottomCB - callback while meet  the conditions
 * @property {number} number.clientHeight - the viewport's height
 * @property {number} number.scrollTop - the distance from the element's top  to its viewport's top
 * @property {number} number.scrollHeight - the whole height of the element's content
*/
export default function useScrollToBottom(reachBottomCB) {
  const clientHeight = document.documentElement.clientHeight
  const scrollHeight = ref(0)
  const scrollTop = ref(0)
  const getDistanceToBottom = _.throttle(() => {
    scrollHeight.value = document.documentElement.scrollHeight
    scrollTop.value = document.documentElement.scrollTop
    if (scrollHeight.value - (scrollTop.value + clientHeight) < 100) {
      if (reachBottomCB) reachBottomCB()
    }
  }, 500)
  onMounted(() => {
    window.addEventListener('scroll', getDistanceToBottom)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', getDistanceToBottom)
  })

  return { scrollTop }
}