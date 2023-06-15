<script setup>
import { storeToRefs } from 'pinia'

import { useDetailsStore } from '@/stores/modules/details'

import DetailsCommonSlot from '@/components/details-common-slot/DetailsCommonSlot.vue'

const { currentProductInfos } = storeToRefs(useDetailsStore())
const mainPart = currentProductInfos.value.mainPart
const landlord = mainPart.dynamicModule.landlordModule

// const str = '共1040条点评'
const matchStr = (str) => {
  const newStr = str.replace(/[^0-9]/ig, '')
  return str.split(newStr)
}
</script>

<template>
  <div class="details-landlord">
    <DetailsCommonSlot title="房东介绍" showMore="查看房东主页" BDTopColor="#eee">
      <template #content>
        <div v-if="Boolean(landlord.topScroll)" class="top-scroll">
          <img :src="landlord.topScroll" alt="top banner img~">
        </div>
        <div class="hotel-profiles">
          <div class="left">
            <img class="logo-icon" :src="landlord.hotelLogo" alt="hotel logo img~">
            <img v-if="landlord.landlordLevelUrl" class="level-icon" :src="landlord.landlordLevelUrl"
              alt="landlord level img~">
          </div>
          <div class="content">
            <div class="hotel-name">{{ landlord.hotelName }}</div>
            <div class="hotel-tags">
              <span v-for="item, index in landlord.hotelTags" :key="index" :style="{ color: item.tagText.color }">
                {{ item.tagText.text }}
                <i v-if="index < landlord.hotelTags.length - 1" class="line"></i>
              </span>
            </div>
            <span class="reception">前台接待</span>
          </div>
          <div class="right">
            <van-button size="small" color="linear-gradient(to right, rgb(253, 126, 87), rgb(252, 175, 63))">
              联系房东
            </van-button>
          </div>
        </div>
        <div v-if="landlord.hotelSummary" class="hotel-summary">
          <template v-for="item in landlord.hotelSummary">
            <div class="summary-item">
              <div class="title">{{ item.title }}</div>
              <div class="introduction">{{ item.introduction }}</div>
              <div class="tip">
                {{ matchStr(item.tip)[0] }}
                <span class="highlight">{{ item.highLight }}</span>
                {{ matchStr(item.tip)[1] }}
              </div>
            </div>
          </template>
        </div>
      </template>
    </DetailsCommonSlot>
  </div>
</template>

<style lang="less" scoped>
.details-landlord {

  .top-scroll {
    margin-top: 10px;

    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  .hotel-profiles {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      flex: 1;
      position: relative;

      img.logo-icon {
        width: 54px;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, .1);
        border-radius: 50%;
      }

      img.level-icon {
        position: absolute;
        right: 15px;
        bottom: -5px;
        width: 25px;
      }
    }

    .content {
      flex: 3;

      .hotel-name {
        font-size: 16px;
        font-weight: 700;
        color: #000;
      }

      .hotel-tags {
        display: flex;
        align-items: center;
        margin: 4px 0;
        font-size: 12px;

        span {
          display: flex;
          justify-content: center;
          align-items: center;

          .line {
            margin: 0 4px;
            height: 10px;
            line-height: 10px;
            border-right: 1px solid #9B9B9B;
          }
        }
      }

      .reception {
        padding: 2px 5px;
        background-color: #f1f3f5;
        border-radius: 3px;
        font-size: 12px;
      }
    }

    .right {
      flex: 1;
      text-align: center;

      .van-button {
        width: 100%;
        height: 25px;
      }
    }
  }

  .hotel-summary {
    display: flex;
    align-items: center;
    margin: 30px 0 10px;

    .summary-item {
      flex: 1;
      font-size: 12px;

      .title {
        color: var(--common-gray-color);
      }

      .introduction {
        font-weight: 700;
        font-size: 20px;
      }

      .tip {
        .highlight {
          color: var(--primary-color);
        }
      }
    }

  }
}
</style>