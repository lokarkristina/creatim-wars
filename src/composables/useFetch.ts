import { ref } from 'vue'
import { API_URL } from '@/utils/constants'
import { timeout } from '@/utils/timeout'

export function useFetch<T>() {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const fetchData = async () => {
    loading.value = true

    try {
      // Artificially increase fetching time.
      await timeout()

      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const json = await response.json()
      data.value = json as T

      return data.value
    } catch (e) {
      error.value = e as Error

      throw error.value
    } finally {
      loading.value = false
    }
  }

  return { fetchData, data, error, loading }
}
