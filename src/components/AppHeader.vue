<script setup lang="ts">
import { RouterLink } from 'vue-router'
// componenets
import MenuLinks from '@/components/MenuLinks.vue'
import MenuMain from '@/components/MenuMain.vue'
import SidePanel from '@/components/SidePanel.vue'
// composables
import { useSidePanel } from '@/composables/useSidePanel'

const { openPanel } = useSidePanel()
</script>

<template>
  <header
    class="header w-[85vw] md:w-[90vw] max-w-(--content-size) lg:max-w-(--header-size) mx-auto max-lg:flex items-center justify-between"
    role="header"
  >
    <!-- Main navigation menu with internal links. -->
    <div class="grid lg:grid-flow-col items-center py-4 gap-3.5">
      <MenuMain class="hidden lg:block"></MenuMain>

      <!-- Site logo with link to homepage. -->
      <RouterLink
        to="/"
        class="max-w-[100px] sm:max-w-[175px] lg:max-w-[210px]"
      >
        <img
          src="@/assets/logo.png"
          class="logo object-contain"
          alt="Star Wars logo"
        />
      </RouterLink>

      <!-- Secondary navigation menu for external and additional links. -->
      <MenuLinks class="hidden lg:grid"></MenuLinks>
    </div>

    <!-- Only display on mobile. -->
    <div class="lg:hidden">
      <!-- Mobile menu side panel with trigger link. -->
      <button
        class="mobile-menu-icon"
        title="Open the side menu"
        @click="openPanel"
      >
        Open Menu
      </button>
      <SidePanel>
        <MenuMain />
        <MenuLinks />
      </SidePanel>
    </div>
  </header>
</template>
