<script setup lang="ts">
import { RouterLink } from 'vue-router'
// components
import MenuLinks from '@/components/menus/MenuLinks.vue'
import MenuMain from '@/components/menus/MenuMain.vue'
import SidePanel from '@/components/layout/SidePanel.vue'
// composables
import { useSidePanel } from '@/composables/useSidePanel.ts'
// icons
import { Icon } from '@iconify/vue'

const { openPanel } = useSidePanel()
</script>

<template>
  <header
    class="header w-[85vw] md:w-[90vw] max-w-(--content-size) lg:max-w-(--header-size) mx-auto max-lg:flex items-center justify-between"
    role="banner"
    aria-label="Main site header"
  >
    <!-- Main navigation menu with internal links. -->
    <div class="grid lg:grid-flow-col items-center py-4 gap-3.5">
      <nav aria-label="Main navigation">
        <MenuMain class="max-lg:hidden"></MenuMain>
      </nav>

      <!-- Site logo with link to homepage. -->
      <RouterLink
        to="/"
        class="max-w-[100px] sm:max-w-[175px] lg:max-w-[210px]"
        aria-label="Home"
      >
        <img
          src="@/assets/logo.png"
          class="object-contain logo"
          alt="Star Wars logo"
          width="210"
          height="auto"
        />
      </RouterLink>

      <!-- Secondary navigation menu for external and additional links. -->
      <nav aria-label="Secondary navigation">
        <MenuLinks class="hidden lg:grid"></MenuLinks>
      </nav>
    </div>

    <!-- Only display on mobile. -->
    <div class="lg:hidden">
      <!-- Mobile menu side panel with trigger link. -->
      <button
        class="text-3xl transition-opacity opacity-60 mobile-menu-icon rotate-y-180 hover:opacity-100"
        aria-label="Open navigation menu"
        aria-expanded="false"
        aria-controls="side-panel"
        @click="openPanel"
      >
        <span class="sr-only">Open Menu</span>
        <Icon icon="ix:app-menu" />
      </button>

      <!-- Side panel component with navigation menus. -->
      <!-- @todo add transitions. -->
      <SidePanel>
        <nav aria-label="Mobile navigation">
          <!-- The main menu links. -->
          <MenuMain />
          <!-- The additional page links. -->
          <MenuLinks />
        </nav>
      </SidePanel>
    </div>
  </header>
</template>

<style>
.header a {
  text-transform: uppercase;
  font-weight: bold;
  color: var(--color-white);
}
</style>
