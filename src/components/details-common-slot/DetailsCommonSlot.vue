<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '默认标题'
  },
  showMore: {
    type: String,
    default: ''
  },
  BGColor: {
    type: String,
    default: '#fff'
  },
  BDTopColor: {
    type: String,
    default: "#fff"
  }
})
const moreFacilities = () => {
  console.log('to', props.title)
}
</script>

<template>
  <div class="detail-common-slot">
    <div class="header">
      {{ title }}
    </div>
    <div class="content">
      <slot name="content">6</slot>
    </div>
    <div class="footer" v-if="showMore.length" @click="moreFacilities">
      {{ showMore }}<van-icon name="arrow" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-common-slot {
  margin-top: 10px;
  padding: 0 16px;
  background-color: #fff;

  .header {
    height: 10vw;
    line-height: 10vw;
    font-size: 20px;
    font-weight: 700;
    color: #000;
    border-bottom: 1px solid #eee;
  }

  .content {
    margin: 5px 0;
    border-radius: 5px;
    background-color: v-bind('props.BGColor');
  }

  .footer {
    text-align: right;
    height: 10vw;
    line-height: 10vw;
    font-size: 14px;
    color: var(--primary-color);
    border-top: 2px solid v-bind('props.BDTopColor');
  }
}
</style>
