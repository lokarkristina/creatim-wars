<script setup lang="ts">
// @todo probably a way to clean up the classes a bit more
const listLinksStyles = [
  'more-links grid lg:grid-flow-col [&_a]:px-4 [&_a]:py-2 [&_a]:text-base lg:[&_a]:text-sm gap-x-5 max-lg:border-t border-t-white/20 max-lg:pt-5',
]
</script>

<template>
  <nav aria-label="Additional Links">
    <ul :class="listLinksStyles" role="list">
      <li>
        <!-- External link to merchandise page with security attributes. -->
        <a
          href="https://www.starwars.com/news/category/merchandise"
          target="_blank"
          title="Got to official merch page"
          rel="noopener noreferrer"
          class="text-white neon-link"
          aria-label="Merchandise (opens in new tab)"
        >
          Merch
        </a>
      </li>
      <li>
        <!-- Internal link to about page. -->
        <RouterLink
          to="/about"
          title="Go to about page"
          class="text-white neon-link"
          aria-label="About page"
        >
          About
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
