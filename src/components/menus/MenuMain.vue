<script setup lang="ts">
const menuMainLinks = [
  'grid lg:grid-flow-col items-center gap-x-5 [&_a]:px-4 pb-5 [&_a]:py-2 [&_a]:text-3xl lg:[&_a]:text-sm mb-6 lg:mb-0 lg:pb-0',
]
</script>

<template>
  <nav class="menu menu--main" aria-label="Main navigation">
    <ul :class="menuMainLinks" role="menubar">
      <li role="none">
        <RouterLink
          to="/upcoming"
          title="See upcoming characters"
          class="neon-link"
          role="menuitem"
          aria-current="$route.path === '/upcoming' ? 'page' : undefined"
        >
          <span class="sr-only">View </span>
          Upcoming
          <span class="sr-only"> characters</span>
        </RouterLink>
      </li>
      <li role="none">
        <RouterLink
          to="/legacy"
          title="See legacy characters"
          class="neon-link"
          role="menuitem"
          aria-current="$route.path === '/legacy' ? 'page' : undefined"
        >
          <span class="sr-only">View </span>
          Legacy
          <span class="sr-only"> characters</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
