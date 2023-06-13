<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

import { useDetailsStore } from '@/stores/modules/details'

import DetailsNavBar from './detailsComponents/01_DetailsNavBar.vue'
import DetailsBanner from './detailsComponents/02-DetailsBanner.vue'
import DetailsDescription from './detailsComponents/03_DetailsDescription.vue'
import DetailsFacilities from './detailsComponents/04_DetailsFacilities.vue'
import DetailsLandlord from './detailsComponents/05_DetailsLandlord.vue'


const { fetchProductDetails } = useDetailsStore()
const { currentProductInfos } = storeToRefs(useDetailsStore())

// * fetch product details of house 
const route = useRoute()
fetchProductDetails(route.params.houseID)
</script>

<template>
  <div v-if="Object.keys(currentProductInfos).length" class="product-details">
    <DetailsNavBar />
    <DetailsBanner />
    <DetailsDescription />
    <DetailsFacilities />
    <DetailsLandlord />
  </div>
</template>

<style lang="less" scoped>
.product-details {
  background-color: #F1f3f5;
}
</style>