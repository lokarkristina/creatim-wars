<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>Header.</header>

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
