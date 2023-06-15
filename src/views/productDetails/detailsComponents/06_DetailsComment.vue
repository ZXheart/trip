<script setup>
import { storeToRefs } from 'pinia'

import { useDetailsStore } from '@/stores/modules/details'

import DetailsCommonSlot from '@/components/details-common-slot/DetailsCommonSlot.vue'

const { currentProductInfos } = storeToRefs(useDetailsStore())
const mainPart = currentProductInfos.value.mainPart
const comment = mainPart.dynamicModule.commentModule


</script>

<template>
  <div class="details-comment">
    <DetailsCommonSlot title="热门评论" :showMore="`查看全部${comment.totalCount}条评论`">
      <template #content>
        <!-- * sub-score -->
        <div class="sub-scores">
          <div class="left">
            <div class="overall">
              {{ comment.overall }}
              <div class="bottom-line"></div>
            </div>
            <div class="title">
              <span class="score-title">{{ comment.scoreTitle }}</span>
              <span class="comment-count">{{ comment.totalCount }}条评论</span>
              <van-rate v-model="comment.overall" readonly allow-half color="#fd7e57" size="12px" />
            </div>
          </div>
          <div class="right">
            <template v-for="item in comment.subScores" :key="item">
              <span>{{ item }}</span>
            </template>
          </div>
        </div>
        <!-- * comment-tag -->
        <div class="comment-tag">
          <template v-for="item in comment.commentTagVo">
            <span :style="{ color: item.color, backgroundColor: item.backgroundColor }">
              {{ item.text }}
            </span>
          </template>
        </div>
        <!-- * comment -->
        <div class="comment">
          <div class="user-info">
            <img class="user-avatar" :src="comment.comment.userAvatars" alt="user avatar img~">
            <div class="user-name_checkin-date">
              <div class="user-name">{{ comment.comment.userName }}</div>
              <div class="checkin-date">{{ comment.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="comment-detail">
            {{ comment.comment.commentDetail }}
          </div>
        </div>
      </template>
    </DetailsCommonSlot>
  </div>
</template>

<style lang="less" scoped>
.details-comment {
  font-size: 12px;

  .sub-scores {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      flex: 1;
      display: flex;

      .overall {
        position: relative;
        z-index: 1;
        font-weight: 700;
        font-size: 48px;
        color: #000;

        .bottom-line {
          position: absolute;
          z-index: -1;
          left: 0;
          bottom: 10px;
          width: 85%;
          height: 5px;
          background-color: var(--primary-color);
        }
      }

      .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;

        span.score-title {
          color: #000;
        }

        span.comment-count {
          padding: 2px 0;
          color: var(--common-gray-color);
        }
      }
    }


    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      text-align: right;

      span {
        padding: 1px 0;
        width: 50%;
      }
    }
  }

  .comment-tag {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    span {
      margin-bottom: 5px;
      padding: 1px 2px;
      border-radius: 5px;
    }
  }

  .comment {
    padding: 10px;
    background-color: #f7f9fb;
    border-radius: 5px;

    .user-info {
      display: flex;
      align-items: center;

      img.user-avatar {
        margin-right: 5px;
        width: 32px;
        border-radius: 50%;
      }

      .user-name_checkin-date {
        display: flex;
        flex-direction: column;

        .checkin-date {
          margin-top: 2px;
          color: var(--common-gray-color);
        }
      }
    }

    .comment-detail {
      margin-top: 20px;
      color: #000;
    }
  }
}
</style>