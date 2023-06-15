<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useDetailsStore } from '@/stores/modules/details'

import DetailsCommonSlot from '@/components/details-common-slot/DetailsCommonSlot.vue'

const { currentProductInfos } = storeToRefs(useDetailsStore())
const mainPart = currentProductInfos.value.mainPart
const position = mainPart.dynamicModule.positionModule

const baiduMap = ref()

onMounted(() => {
  const map = new BMapGL.Map(baiduMap.value)
  const point = new BMapGL.Point(position.longitude, position.latitude)
  const marker = new BMapGL.Marker(point)
  map.centerAndZoom(point, 15)
  map.addOverlay(marker)
})
</script>

<template>
  <div class="details-map">
    <DetailsCommonSlot title="位置周边" showMore="查看更多周边信息">
      <template #content>
        <div class="baidu-map" ref="baiduMap">

        </div>
      </template>
    </DetailsCommonSlot>
  </div>
</template>

<style lang="less" scoped>
.details-map {
  .baidu-map {
    height: 300px;
  }
}
</style>