import { defineStore } from 'pinia'
// composables
import { useFetch } from '@/composables/useFetch'
// types
import type { Character } from '@/types/Character'

export const useCharacterStore = defineStore('characters', {
  state: () => ({
    characters: [] as Character[],
    loading: false,
    error: null as Error | null,
  }),

  getters: {
    getAllCharacters: (state) => state.characters,
    getCharacterById: (state) => {
      return (id: number) =>
        state.characters.find((char) => char.id === Number(id))
    },
  },

  actions: {
    async fetchCharacters() {
      const { fetchData, loading } = useFetch<Character[]>()
      this.loading = true

      try {
        const data = await fetchData()
        if (data) {
          this.characters = data
        }
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = loading.value
      }
    },

    editCharacter(id: number, data: Character) {
      const index = this.characters.findIndex((char) => char.id === Number(id))
      if (index !== -1) {
        this.characters[index] = { ...this.characters[index], ...data }
      }
    },
  },
})
