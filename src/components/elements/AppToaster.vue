<script setup lang="ts">
import useToasterStore, { toastTypeMap } from '@/stores/toaster'
import { Icon } from '@iconify/vue'

const toastStore = useToasterStore()
</script>

<template>
  <TransitionGroup
    tag="ul"
    name="toast"
    class="fixed z-50 grid gap-2 toaster__wrapper end-4 bottom-4"
  >
    <li
      v-for="toast in toastStore.toasts"
      :key="toast.id"
      :class="['toaster__inner', toastTypeMap[toast.status]]"
      class="flex items-center gap-4 px-4 py-2 border border-transparent rounded-md"
    >
      <Icon
        :icon="`ix:${toastTypeMap[toast.status]}`"
        class="toaster__list-icon aspect-square w-7"
      />
      <span class="text-sm font-bold toaster__inner-text">{{
        toast.text
      }}</span>
      <button
        class="p-1 transition-opacity translate-x-1 opacity-50 ms-auto hover:opacity-100"
        @click="toastStore.dismiss(toast.id)"
        aria-label="Dismiss notification"
      >
        <Icon icon="ix:close-small" />
      </button>
    </li>
  </TransitionGroup>
</template>

<style scoped>
.toaster__inner {
  --_color: var(--color-white);
  --_bg: var(--color-black);

  color: var(--_color);
  background: var(--_bg);

  svg {
    fill: var(--_color);
    stroke: var(--_color);
  }

  &.success {
    --_bg: var(--color-success);
  }

  &.warning {
    --_bg: var(--color-warning);
  }

  &.error {
    --_bg: var(--color-error);
  }
}

.toaster__inner-text {
  color: var(--_color);
}

.toast-enter-active,
.toast-leave-active {
  transition: var(--duration-slow) var(--easing-default);
  transition-property: opacity, transform;
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
