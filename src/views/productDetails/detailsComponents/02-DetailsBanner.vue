<script setup>
import { ref, computed, useSlots } from 'vue'
import { storeToRefs } from 'pinia'

import { useDetailsStore } from '@/stores/modules/details'

const { currentProductInfos } = storeToRefs(useDetailsStore())
const housePics = currentProductInfos.value.mainPart.topModule.housePicture.housePics

/* 
! 1.
! makes `housePics` into an Object likes: {
*  【卧室】：['item1','item2','item3',...],
*  【卫生间】：['item1','item2','item3',...],
*  【其他】：['item1','item2','item3',...],
*  ...
!} 
*/
const albumGroup = {}
housePics.forEach(item => {
  if (!albumGroup[item.title]) {
    albumGroup[item.title] = []
  }
  albumGroup[item.title].push(item)
})

/* 
! 2.
! get all different titles of `housePics.title` and push them into `albumTitle`
*/
const albumTitle = []
housePics.forEach(current => {
  albumTitle.find(item => item === current.title) === undefined && albumTitle.push(current.title)
})


//! 3. currentAlbumIndex & event of switch currentAlbumIndex 
const currentAlbum = ref(0)
const switchAlbum = (index) => {
  currentAlbum.value = index
}

//! 4. get `currentAlbum` who need to rendering
const rendersAlbum = computed(() => {
  /* 
  * Object.keys(albumGroup) : ` ['【卧室】：','【卫生间】：''【其他】：'...]`
  * currentAlbum.value : 0, 1, 2, 3, 4...
  * albumGroup[Object.keys(albumGroup)[currentAlbum.value]] : albumGroup.【卧室】：...
  */
  return albumGroup[Object.keys(albumGroup)[currentAlbum.value]]
})

//! 5. cut `【】：` and fuck `RegExp` every times
const matchStr = (title) => {
  return title.match(/(?<=【).*?(?=】：)/)
}

// const currentPic = ref(rendersAlbum.length)
// const slots = useSlots()
// console.log(slots.indicator)
</script>

<template>
  <div class="details-banner">
    <van-swipe class="my-swipe" style="height: 250px;" :autoplay="4000">
      <van-swipe-item class="swipe-list" v-for="(pic, picIndex) in rendersAlbum" :key="picIndex">
        <img :src="pic.albumUrl" alt="house pic~">
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <div class="album-title" v-for="(item, index) in albumTitle" :class="{ active: index === currentAlbum }"
            :key="item" @click="switchAlbum(index)">
            {{ matchStr(item)[0] }}
            <span v-if="index === currentAlbum">{{ active + 1 }} / {{ total }}</span>
          </div>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.details-banner {

  .my-swipe {

    .swipe-list {
      img {
        width: 100%;
      }
    }

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 2px 10px;

      font-size: 12px;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      border-radius: 5px;

      .album-title {
        margin: 0 2px;
        padding: 0 3px;
      }

      .album-title.active {
        background-color: #fff;
        color: #000;
        border-radius: 5px;
      }
    }
  }
}
</style>