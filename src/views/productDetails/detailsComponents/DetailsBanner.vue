<script setup>
import { useRoute } from 'vue-router'


const route = useRoute()
</script>

<template>
  <div class="details-banner">
    {{ route.params.houseID }}
  </div>
</template>

<style scoped></style>