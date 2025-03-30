<script setup lang="ts">
import { RouterView } from 'vue-router'
// components
import AppHeader from '@/components/layout/AppHeader.vue'
import StarrySky from '@/components/elements/StarrySky.vue'
</script>

<template>
  <!-- Some fancy bg, that's not in design, but I felt like it fits. -->
  <StarrySky />

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
  background: radial-gradient(
      ellipse,
      rgba(227, 214, 29, 0.4) 0%,
      rgba(0, 0, 0, 1) 70%
    )
    no-repeat center top/250% auto fixed;
}

body:has(.side-panel--open) {
  main {
    opacity: 0.35;
  }

  .mobile-menu-icon {
    opacity: 0;
  }
}
</style>
