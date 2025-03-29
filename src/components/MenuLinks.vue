<script setup lang="ts">
// @todo probably a way to clean up the classes a bit more
const listLinksStyles = [
  'more-links grid lg:grid-flow-col [&_a]:px-4 [&_a]:py-2 [&_a]:text-base lg:[&_a]:text-sm gap-x-5 max-lgborder-t border-t-white/20 max-lg:pt-5',
]
</script>

<template>
  <ul :class="listLinksStyles">
    <li>
      <!-- External link to merchandise page with security attributes. -->
      <a
        href="https://www.starwars.com/news/category/merchandise"
        target="_blank"
        title="Got to official merch page"
        rel="noopener noreferrer"
      >
        Merch
      </a>
    </li>
    <li>
      <!-- Internal link to about page. -->
      <RouterLink to="/about" title="Go to about page">About</RouterLink>
    </li>
  </ul>
</template>
