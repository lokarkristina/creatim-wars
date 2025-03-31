<script setup lang="ts">
import { RouterView } from 'vue-router'
// components
import AppHeader from '@/components/layout/AppHeader.vue'
import StarrySky from '@/components/elements/StarrySky.vue'
import AppToaster from './components/elements/AppToaster.vue'
</script>

<template>
  <!-- Some fancy bg, that's not in design, but I felt like it fits. -->
  <StarrySky />

  <!-- Page header. -->
  <AppHeader />

  <!-- Main page content. -->
  <main
    role="main"
    class="w-[85vw] md:w-[90vw] max-w-(--content-size) mx-auto py-12 md:py-24 lg:py-36"
  >
    <RouterView />
  </main>

  <!-- Toaster notifications. -->
  <AppToaster />
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
