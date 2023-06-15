<script setup>
import { storeToRefs } from 'pinia'

import { useDetailsStore } from '@/stores/modules/details'

import DetailsCommonSlot from '@/components/details-common-slot/DetailsCommonSlot.vue'

const { currentProductInfos } = storeToRefs(useDetailsStore())
const mainPart = currentProductInfos.value.mainPart
const rules = mainPart.dynamicModule.rulesModule
</script>

<template>
  <div class="detail-notice">
    <DetailsCommonSlot title="预定须知">
      <template #content>
        <div class="order-rules">
          <template v-for="item, index in rules.orderRules" :key="index">
            <div class="a-row">
              <span class="item-title">{{ item.title }}</span>
              <span class="item-introduction">{{ item.introduction }}</span>
            </div>
          </template>
        </div>
      </template>
    </DetailsCommonSlot>
  </div>
</template>

<style lang="less" scoped>
.detail-notice {
  display: flex;
  justify-content: center;
  font-size: 12px;

  .order-rules {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .a-row {
      display: flex;
      margin: 5px 0;
      width: 100%;

      span.item-title {
        flex: 1;
        margin-right: 5px;
        color: #666;
      }

      span.item-introduction {
        flex: 4;
        margin-right: 5px;
        color: #333;
      }
    }

  }
}
</style>
