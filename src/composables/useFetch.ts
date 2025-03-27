import { ref } from 'vue'
import { API_URL } from '@/utils/constants'

export function useFetch<T>() {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const fetchData = async () => {
    loading.value = true

    try {
      // Fake loading.
      await timeout()

      // Get the results from the API.
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const json = await response.json()
      data.value = json as T
    } catch (e) {
      // Handle potential errors.
      error.value = e as Error
    } finally {
      // Disable the loading, since the fetch process ended.
      loading.value = false
    }
  }

  // @learn why and when should you can the function right away and when not?
  fetchData()

  return { data, error, loading }
}

// artificial delay
function timeout() {
  return new Promise<void>((resolve) => {
    setTimeout(
      () => resolve(),
      Math.floor(Math.random() * (2500 - 500 + 1)) + 500,
    )
  })
}
