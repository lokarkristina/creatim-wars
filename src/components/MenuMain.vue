<script setup lang="ts">
// @todo probably a way to clean up the classes a bit more
const menuMainLinks = [
  'grid lg:grid-flow-col items-center gap-x-5 [&_a]:px-4 pb-5 [&_a]:py-2 [&_a]:text-3xl lg:[&_a]:text-sm mb-6 lg:mb-0 lg:pb-0',
]
</script>

<template>
  <nav class="menu menu--main">
    <ul :class="menuMainLinks">
      <!-- Navigation item for upcoming characters. -->
      <!-- (idk if that make sense content-wise 🤔) -->
      <li>
        <RouterLink to="/upcoming" title="See upcoming characters">
          Upcoming
        </RouterLink>
      </li>
      <!-- Navigation item for legacy characters. -->
      <!-- (idk if that make sense content-wise 🤔) -->
      <li>
        <RouterLink to="/legacy" title="See legacy characters">
          Legacy
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
