<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <AppHeader />

  <main role="main">
    <RouterView />
  </main>
</template>

<style>
#app {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100dvh;
}
</style>
