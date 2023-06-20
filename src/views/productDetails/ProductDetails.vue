<script setup>
import { ref, watch, computed, onMounted, nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

import { useDetailsStore } from '@/stores'

import useScrollToBottom from '@/hooks/useScrollToBottom'

import DetailsTab from '@/components/details-tab/DetailsTab.vue'
import DetailsNavBar from './detailsComponents/01_DetailsNavBar.vue'
import DetailsBanner from './detailsComponents/02-DetailsBanner.vue'
import DetailsDescription from './detailsComponents/03_DetailsDescription.vue'
import DetailsFacilities from './detailsComponents/04_DetailsFacilities.vue'
import DetailsLandlord from './detailsComponents/05_DetailsLandlord.vue'
import DetailsComment from './detailsComponents/06_DetailsComment.vue'
import DetailsNotice from './detailsComponents/07_DetailsNotice.vue'
import DetailsMap from './detailsComponents/08_DetailsMap.vue'
import DetailsPriceIntroduction from './detailsComponents/09_DetailsPriceIntroduction.vue'
import DetailsBottomLogo from './detailsComponents/10_DetailsBottomLogo.vue'

const { fetchProductDetails } = useDetailsStore()
const { currentProductInfos } = storeToRefs(useDetailsStore())

/*
 ! A. 
 * fetch product details of house 
 */
const route = useRoute()
const router = useRouter()
try {
  fetchProductDetails(route.params.houseID)
} catch (e) {
  console.log(e, "Failed to fetch product details")
  router.push('notFound')
}

/*
 ! B.
 * watching scroll's change
*/
const { scrollTop } = useScrollToBottom()
const showDetailsTab = computed(() => {
  return scrollTop.value >= 300
})

/* 
! C. 
* create an object(elArr) for storage keys and values as: "{
* '概览' : <div class="details-description" name="概览">
* '设施' : <div class="details-facilities" name="设施">
* '房东' : <div class="details-landlord" name="房东">
*  ...
* }" 
*/
const elArr = {}
const getEl = (el) => {
  if (el) {
    elArr[el.$el.getAttribute('name')] = el.$el
  }
}

/*
! D.
* scrolls the document element to a particular set of coordinates while `<DetailsTab>` has been on clicked
*/
const isClick = ref(false)
const currentDistance = ref(0)
const getTitle = (title) => {
  isClick.value = true
  if (title === '概览') {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  else {
    document.documentElement.scrollTo({
      top: elArr[title].offsetTop - 45,
      behavior: 'smooth'
    })
    currentDistance.value = elArr[title].offsetTop
    // console.log('curr', currentDistance.value)
  }
}
/* 
! E. it's really fucking hard !!!
* 
*/
const tabRef = ref()
const offsetTopArr = ref([])
watch(() => scrollTop.value, newVal => {
  if (currentDistance.value === newVal + 45) isClick.value = false
  if (isClick.value) return

  const valuesArr = Object.values(elArr)
  offsetTopArr.value = valuesArr.map(item => item.offsetTop)

  if (tabRef.value !== undefined && tabRef.value !== null) {
    tabRef.value.currentTab = offsetTopArr.value.findIndex(item => item - 45 >= newVal) - 1
  }
})
</script>

<template>
  <div v-if="Object.keys(currentProductInfos).length" class="product-details">
    <DetailsTab ref="tabRef" v-if="showDetailsTab" @emit-title="getTitle" />
    <!-- v-memo="[showDetailsTab]" -->
    <DetailsNavBar />
    <DetailsBanner />
    <DetailsDescription name="概览" :ref=getEl />
    <DetailsFacilities name="设施" :ref=getEl />
    <DetailsLandlord name="房东" :ref=getEl />
    <DetailsComment name="点评" :ref=getEl />
    <DetailsNotice name="须知" :ref=getEl />
    <DetailsMap name="周边" :ref=getEl />
    <DetailsPriceIntroduction />
    <DetailsBottomLogo />
  </div>
</template>

<style lang="less" scoped>
.product-details {
  background-color: #F1f3f5;
}
</style>