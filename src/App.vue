<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <!-- Page header. -->
  <AppHeader />

  <!-- Main page content. -->
  <RouterView />
</template>

<style>
#app {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100dvh;
}

body:has(.side-panel--open) {
  main {
    opacity: 0.35;
  }

  .mobile-menu-icon {
    opacity: 0;
  }
}

.header a {
  font-weight: bold;
}
</style>
