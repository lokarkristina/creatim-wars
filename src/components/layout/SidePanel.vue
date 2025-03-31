<script setup lang="ts">
// @todo there's a bit of repetition with header component, make DRY!
import { Icon } from '@iconify/vue'
// composables
import { useSidePanel } from '@/composables/useSidePanel'

const { isOpen, closePanel } = useSidePanel()

// @todo Add & remove event listeners for listening on
// Esc keypress and clicking outside the side panel.
</script>

<template>
  <div
    class="side-panel fixed inset-y-0 start-0 grid-rows-[auto_1fr_auto] bg-black z-50 py-5 px-6 max-w-[85vw] w-full gap-6 grid content-start"
    :class="[isOpen ? 'side-panel--open' : 'side-panel--closed']"
  >
    <div class="flex items-center justify-between side-panel__header">
      <!-- Site logo with link to homepage. -->
      <RouterLink to="/" class="max-w-28 pb-2.5 border-b border-accent">
        <img src="@/assets/logo.png" class="logo" alt="Star Wars logo" />
      </RouterLink>

      <button class="icon" @click="closePanel">
        <Icon icon="ix:close" />
      </button>
    </div>

    <div class="mt-6 side-panel__body">
      <slot />
    </div>

    <!-- @todo <div class="p-5 border-t side-panel__footer border-t-white/20">footer.</div> -->
  </div>
</template>

<style scoped>
.side-panel--open {
  translate: 0% 0%;
}

.side-panel--closed {
  translate: -100% 0%;
}
</style>
