import { ref, type Ref } from 'vue'

// State to track if the side panel is open or closed.
const isOpen: Ref<boolean> = ref<boolean>(false)

/**
 * Composable for managing a side panel's open/closed state.
 */
export function useSidePanel() {
  // Toggle the panel's open/closed state.
  const togglePanel = (): void => {
    isOpen.value = !isOpen.value
  }

  // Open the panel.
  const openPanel = (): void => {
    isOpen.value = true
  }

  // Close the panel.
  const closePanel = (): void => {
    isOpen.value = false
  }

  // Return the state and methods.
  return {
    isOpen,
    togglePanel,
    openPanel,
    closePanel,
  }
}
