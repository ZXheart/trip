<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

import { useDetailsStore } from '@/stores/modules/details'
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
const mainPart = currentProductInfos.value.mainPart


// * A. fetch product details of house 
const route = useRoute()
const router = useRouter()
try {
  fetchProductDetails(route.params.houseID)
} catch (e) {
  console.log(e, "Failed to fetch product details")
  router.push('notFound')
}

// * B. watching scroll's change
const { scrollTop } = useScrollToBottom()
// ! plan 1.
// const showDetailsTab = computed(() => {
//   console.log(scrollTop.value)
//   return scrollTop.value >= 200
// })
// ! plan 2.
const showDetailsTab = ref(false)
watch(() => scrollTop.value, newVal => {
  showDetailsTab.value = (newVal > 300)
})


// * C
const getTop = (value) => {

}

</script>

<template>
  <div v-if="Object.keys(currentProductInfos).length" class="product-details" v-memo="[mainPart]">
    <DetailsTab v-if="showDetailsTab" />
    <DetailsNavBar />
    <DetailsBanner />
    <DetailsDescription />
    <DetailsFacilities :ref="getTop" />
    <DetailsLandlord />
    <DetailsComment />
    <DetailsNotice />
    <DetailsMap />
    <DetailsPriceIntroduction />
    <DetailsBottomLogo />
  </div>
</template>

<style lang="less" scoped>
.product-details {
  background-color: #F1f3f5;
}
</style>