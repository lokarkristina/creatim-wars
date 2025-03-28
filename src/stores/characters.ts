import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Character } from '@/types/Character'
import { useFetch } from '@/composables/useFetch'

export const useCharacterStore = defineStore('characters', {
  state: () => ({
    characters: ref<Character[]>([]),
    loading: ref<boolean>(false),
    error: ref<Error | null>(null),
  }),

  getters: {
    getAllCharacters: (state) => state.characters,
    getCharacterById: (state) => (id: string) => {
      return state.characters.find((character) => character.id === id)
    },
  },

  actions: {
    async fetchCharacters() {
      const { fetchData, loading } = useFetch<Character[]>()
      // Start the loading.
      this.loading = true

      // Check for erros with fetching data.
      const data = await fetchData().catch((e) => {
        this.error = e as Error
        return null
      })

      // Handle successfull data.
      if (data) {
        this.characters = data
      }

      // Toggle loading.
      this.loading = loading.value

      return data
    },
    editCharacter(id: string) {
      console.log('🪄 e d i t i n g 🪄', Number(id))
    },
  },
})
