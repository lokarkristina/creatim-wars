<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header" role="header">
    <!-- Main menu. -->
    <nav class="menu menu--main">
      <router-link to="/">Upcoming</router-link>
      <router-link to="/">Legacy</router-link>
    </nav>

    <!-- Page logo. -->
    <router-link to="/">
      <img src="@/assets/logo.png" class="logo" alt="Star Wars logo" />
    </router-link>

    <ul class="menu menu--info">
      <li>
        <a
          href="https://www.starwars.com/news/category/merchandise"
          target="_blank"
        >
          Merch
        </a>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.logo {
  max-width: 210px;
  object-fit: contain;
}
</style>
