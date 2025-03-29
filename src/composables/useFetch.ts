// store
import { storeToRefs } from 'pinia'
import { useCharacterStore } from '@/stores/characters'
// types
import type { Character } from '@/types/Character'
// utils
import { API_URL } from '@/utils/constants'
import { timeout } from '@/utils/timeout'

export function useFetch<T extends Character[]>() {
  // Get reactive references from the store
  const { characters: data, error, loading } = storeToRefs(useCharacterStore())

  const fetchData = async () => {
    // Set the loading to true while getting the data.
    loading.value = true

    try {
      // Artificially increase fetching time to simulate network latency.
      await timeout()

      // Make a GET request to the API endpoint.
      const response = await fetch(API_URL)
      // Check if the response is successful (status code 200-299).
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      // Parse the JSON response.
      const json = await response.json()
      // Transform the raw data to match our application's data structure.
      const transformed = json.map((char: Character) => ({
        // Cast ID to number for consistent comparison operations.
        id: Number(char.id),
        // Extract only the required fields for display.
        name: char.name,
        height: char.height,
        mass: char.mass,
        hairColor: char.hairColor,
        skinColor: char.skinColor,
        eyeColor: char.eyeColor,
        born: char.born,
        gender: char.gender,
        edited: char.edited,
        image: char.image,
      }))

      // Update the store with the transformed data.
      data.value = transformed as T

      return data.value
    } catch (e) {
      // Handle and store any errors that occur during the fetch.
      error.value = e as Error
      throw error.value
    } finally {
      // Reset loading state regardless of success or failure.
      loading.value = false
    }
  }

  return { fetchData, data, error, loading }
}
