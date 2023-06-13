<script setup>
import { storeToRefs } from 'pinia'

import { useDetailsStore } from '@/stores/modules/details'

import DetailsCommonSlot from '@/components/details-common-slot/DetailsCommonSlot.vue'


const { currentProductInfos } = storeToRefs(useDetailsStore())
const mainPart = currentProductInfos.value.mainPart
const facilityModule = mainPart.dynamicModule.facilityModule
const houseFacilities = facilityModule.houseFacility.houseFacilitys
const facilitySort = facilityModule.houseFacility.facilitySort

</script>

<template>
  <div class="details-facilities">
    <DetailsCommonSlot title="房屋设施" showMore="查看全部设施" BGColor="#f7f9fb">
      <template #content>
        <template v-for="item in houseFacilities">
          <div class="a-row" v-if="facilitySort.includes(item.groupId)" :key="item.groupId">
            <div class="left">
              <img class="icon" :src="item.icon" alt="facility icon~">
              <span class="group-name">{{ item.groupName }}</span>
            </div>
            <div class="right">
              <div class="facility-name" v-for="fcName in item.facilitys.slice(0, 4)" :key="fcName.name">
                <van-icon name="passed" /> <span>{{ fcName.name }}</span>
              </div>
            </div>
          </div>
        </template>
      </template>
    </DetailsCommonSlot>
  </div>
</template>

<style lang="less" scoped>
.details-facilities {
  font-size: 12px;

  .a-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20vw;

    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img.icon {
        width: 15px;
      }

      .group-name {
        margin-top: 5px;
      }
    }

    .right {
      flex: 3;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      .facility-name {
        margin: 3px 0;
        width: 50%;

        .van-icon {
          color: #17d2bc;
        }
      }
    }
  }
}
</style>