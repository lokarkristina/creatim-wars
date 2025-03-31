import { defineStore } from 'pinia'

const defaultTimeout: number = 2000

// Status will define toast color and icon.
export type ToastStatus = 'success' | 'warning' | 'error'
// Timeout is conditional because we will have default value.
type ToastPayload = { timeout?: number; text: string }

interface Toast {
  id: number
  text: string
  status: ToastStatus
}

const createToast = (text: string, status: ToastStatus): Toast => ({
  text,
  status,
  id: Math.random() * 1000,
})

export const toastTypeMap: Record<ToastStatus, string> = {
  warning: 'warning',
  error: 'error',
  success: 'success',
}

export default defineStore('toaster', {
  state: (): { toasts: Toast[] } => ({
    toasts: [],
  }),
  actions: {
    updateState(payload: ToastPayload, status: ToastStatus) {
      // Get text and timeout from payload
      const { text, timeout } = payload
      // We create the toast with function above
      const toast = createToast(text, status)

      // We push toasts to the state.
      this.toasts.push(toast)

      // We create a delay to delete toast after its provided timeout is over.
      setTimeout(() => {
        this.dismiss(toast.id)
      }, timeout ?? defaultTimeout)
    },
    // Shows a success toast with given payload.
    success(payload: ToastPayload) {
      this.updateState(payload, 'success')
    },
    // Shows a warning toast with given payload.
    warning(payload: ToastPayload) {
      this.updateState(payload, 'warning')
    },
    // Shows an error toast with given payload.
    error(payload: ToastPayload) {
      this.updateState(payload, 'error')
    },
    // Removes a toast with the specified ID from the list.
    dismiss(id: number) {
      this.toasts = this.toasts.filter((t) => t.id !== id)
    },
  },
})
