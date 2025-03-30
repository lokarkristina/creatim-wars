<script setup lang="ts">
const { disabled, ariaLabel, modifier, variant } = defineProps<{
  ariaLabel: string
  modifier?: string
  disabled?: boolean
  variant?: 'button' | 'submit' | 'reset'
}>()
</script>

<template>
  <button
    :type="variant ?? `button`"
    :class="`button button--${modifier ?? 'primary'}`"
    class="px-6 py-2 text-sm font-bold uppercase rounded-md"
    :disabled="disabled"
    :aria-label="ariaLabel"
    role="button"
    tabindex="0"
  >
    <slot />
  </button>
</template>

<style>
.button {
  --_bg: var(--color-accent);
  --_color: var(--color-black);
  --_shadow: var(--color-accent-30);

  position: relative;
  display: inline-block;
  border: 1px solid var(--_bg);
  color: var(--_color);
  background: var(--_bg);

  transition: all var(--duration-fast) var(--easing-default);
  scale: var(--_scale, 0.95);

  &:hover {
    --_bg: transparent;
    --_color: var(--color-accent);
    --_scale: 1.01;

    box-shadow: 0 0 18px var(--_shadow);
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
  }
}

.button,
.button--error,
.button--success {
  &[disabled] {
    --_bg: transparent;
    box-shadow: none;
  }
}

.button--error,
.button--success {
  --_color: var(--color-white);

  &:hover {
    --_scale: 0.95;
  }
}

.button--error {
  --_bg: var(--color-error);
  --_shadow: var(--color-error);

  &:hover {
    --_color: var(--color-error);
  }
}

.button--success {
  --_bg: var(--color-success);
  --_shadow: var(--color-success);

  &:hover {
    --_color: var(--color-success);
  }
}
</style>
