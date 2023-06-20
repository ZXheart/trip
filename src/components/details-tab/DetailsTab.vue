<script setup>
import { ref } from 'vue'

const emits = defineEmits(['emitTitle'])

const currentTab = ref(0)

const tabTitle = ref(['概览', '设施', '房东', '点评', '须知', '周边'])
const onClickTab = ({ title, name }) => {
  emits('emitTitle', title, name)
}

defineExpose({
  currentTab
})
</script>

<template>
  <div class="details-tab">
    <van-tabs v-model:active="currentTab" color="#fd7e57" @click-tab="onClickTab" title-active-color="#fd7e57">
      <template v-for="item in tabTitle" :keys="item">
        <van-tab :title="item"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>
.details-tab {
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
}
</style>