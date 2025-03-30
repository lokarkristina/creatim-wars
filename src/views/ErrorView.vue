<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="grid justify-center gap-5 text-center page page-404 justify-items-center"
  >
    <div class="py-5 page-header">
      <h1 class="font-mono">404 - you seem lost</h1>
    </div>
    <div class="w-full iframe-wrapper">
      <iframe
        src="https://giphy.com/embed/dvD0OAETRfCXC"
        width="100%"
        height="100%"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>

    <RouterLink
      to="/"
      class="px-6 py-2 text-sm font-bold uppercase rounded-md button"
      >Back home</RouterLink
    >
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.frame-wrapper {
  aspect-ratio: 16/9;
}
</style>
