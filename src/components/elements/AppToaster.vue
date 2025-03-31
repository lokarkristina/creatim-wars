<script setup lang="ts">
import useToasterStore, { type ToastStatus } from '@/stores/toaster'

const toastStore = useToasterStore()

const toastClassMap: Record<ToastStatus, string> = {
  warning: 'warning',
  error: 'error',
  success: 'success',
}

const toastIconMap: Record<ToastStatus, string> = {
  error: 'toast-error',
  warning: 'toast-warning',
  success: 'toast-success',
}
</script>

<template>
  <ul
    v-if="toastStore.toasts.length"
    class="fixed z-50 grid gap-2 toaster__wrapper end-4 bottom-4"
  >
    <li
      v-for="toast in toastStore.toasts"
      :class="['toaster__inner', toastClassMap[toast.status]]"
      class="flex items-center gap-4 px-6 py-3 border border-transparent rounded-md"
      :key="toast.text"
    >
      <Icon
        :name="toastIconMap[toast.status]"
        class="toaster__list-icon aspect-square w-7"
      />
      <span class="text-sm font-bold toaster__inner-text">
        {{ toast.text }}
      </span>

      <!-- Dismiss toast. -->
      <button
        class="p-1 transition-opacity translate-x-1 opacity-50 ms-auto hover:opacity-100"
        @click="toastStore.dismiss(toast.id)"
      >
        x
      </button>
    </li>
  </ul>
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
</style>
