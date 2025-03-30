<script setup lang="ts"></script>

<template>
  <div class="loader">
    <div
      class="blob"
      v-for="b in 8"
      :key="b"
      :style="`--delay:${b / 10}s`"
    ></div>
  </div>
</template>

<style scoped>
.loader {
  --blob-color: var(--color-accent);
  --blob-size: 10px;
  --blob-radius: calc(var(--blob-size) / 2);
  --loader-size: 100px;
  --loader-half: calc(var(--loader-size) / 2);
  --blob-position: calc(var(--loader-half) - var(--blob-radius));
  --orbit-radius: 50px;

  aspect-ratio: 1 / 1;
  position: fixed;
  top: 50%;
  left: 50%;
  width: var(--loader-size);
  margin-top: calc(-1 * var(--loader-half));
  margin-left: calc(-1 * var(--loader-half));
  filter: contrast(30);
}

.blob {
  aspect-ratio: 1 / 1;
  position: absolute;
  left: var(--blob-position);
  top: var(--blob-position);
  width: var(--blob-size);
  border-radius: var(--blob-radius);
  background-color: var(--blob-color);
  filter: blur(1px);
  transform: translateY(calc(-1 * var(--orbit-radius)));
  animation: spin 2.5s infinite ease-in-out;
  animation-delay: var(--delay);
}

@keyframes spin {
  0% {
    transform: rotate(0deg) translateY(calc(-1 * var(--orbit-radius)))
      rotate(0deg);
  }
  70% {
    transform: rotate(360deg) translateY(calc(-1 * var(--orbit-radius)))
      rotate(-360deg);
  }
  100% {
    transform: rotate(360deg) translateY(calc(-1 * var(--orbit-radius)))
      rotate(-360deg);
  }
}
</style>
