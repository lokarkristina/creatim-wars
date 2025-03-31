<script setup lang="ts">
// Some 'fancy' bg effect, bc I felt like adding some 'pizzazz' 🎉.
// source https://github.com/SeikiMatt/starry-sky/tree/main
import { ref, onMounted, onUnmounted } from 'vue'

// Mouse position coordinates.
const x = ref(0)
const y = ref(0)

// Movement ratio for parallax effect.
const ratio = 0.05

// References to star layers.
const z1 = ref<HTMLElement | null>(null)
const z2 = ref<HTMLElement | null>(null)
const z3 = ref<HTMLElement | null>(null)

// Track mouse movement.
const handleMouseMove = (e: MouseEvent) => {
  x.value = e.pageX
  y.value = e.pageY
}

// Animate star layers with different parallax speeds.
const animate = () => {
  if (!z1.value || !z2.value || !z3.value) return

  // First layer - fastest movement.
  z1.value.style.transform = `translate(${x.value * ratio}px, ${y.value * ratio}px)`

  // Second layer - medium movement with rotation.
  z2.value.style.transform = `translate(${(x.value * ratio) / 2}px, ${(y.value * ratio) / 2}px) rotate(217deg)`

  // Third layer - slowest movement with different rotation.
  z3.value.style.transform = `translate(${(x.value * ratio) / 3}px, ${(y.value * ratio) / 3}px) rotate(71deg)`

  requestAnimationFrame(animate)
}

// Lifecycle hooks.
onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  requestAnimationFrame(animate)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div class="fixed inset-0 bg">
    <div ref="z3">
      <div class="tile top-left animate-opacity freq-5"></div>
      <div class="tile top-right animate-opacity freq-9"></div>
      <div class="tile bottom-left animate-opacity freq-7"></div>
      <div class="tile bottom-right animate-opacity freq-10"></div>
    </div>
    <div ref="z2">
      <div class="tile top-left animate-opacity freq-9 delay-2"></div>
      <div class="tile top-right animate-opacity freq-5 delay-2"></div>
      <div class="tile bottom-left animate-opacity freq-6 delay-4"></div>
      <div class="tile bottom-right animate-opacity freq-10 delay-4"></div>
    </div>
    <div ref="z1">
      <div class="tile top-left animate-opacity freq-7 delay-2"></div>
      <div class="tile top-right animate-opacity freq-5 delay-4"></div>
      <div class="tile bottom-left animate-opacity freq-9 delay-2"></div>
      <div class="tile bottom-right animate-opacity freq-5 delay"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide-transparency {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.animate-opacity {
  animation-name: slide-transparency;
  animation-iteration-count: infinite;
}

.freq-5 {
  animation-duration: 5s;
}

.freq-6 {
  animation-duration: 6.33s;
}

.freq-7 {
  animation-duration: 7s;
}

.freq-8 {
  animation-duration: 8.88s;
}

.freq-9 {
  animation-duration: 9s;
}

.freq-10 {
  animation-duration: 10.17s;
}

.delay-2 {
  animation-delay: 1.33s;
}

.delay-4 {
  animation-delay: 2.11s;
}

.bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--color-black);
  z-index: -1000;

  > div {
    position: absolute;
    width: 150vw;
    height: 150vw;
    left: -50vw;
    top: -50vw;
    transform-origin: center;
  }
}

.tile {
  overflow: hidden;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  background-size: 512px 512px;
}

.top-left {
  background-image: url('@/assets/images/topleft.png');
}

.top-right {
  background-image: url('@/assets/images/topright.png');
}

.bottom-left {
  background-image: url('@/assets/images/bottomleft.png');
}

.bottom-right {
  background-image: url('@/assets/images/bottomright.png');
}
</style>
