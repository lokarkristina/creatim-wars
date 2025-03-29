<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// store
import { storeToRefs } from 'pinia'
import { useCharacterStore } from '@/stores/characters'
// components
import ModalEdit from './ModalEdit.vue'
// utils
import { getCharacterDetails, capitalizeFirst } from '@/utils/dataCleanup'

const router = useRouter()
const route = useRoute()

const store = useCharacterStore()
// Use storeToRefs for ALL reactive store properties.
const { loading, error, characters } = storeToRefs(store)
// Only methods are destructured directly from store.
const { fetchCharacters } = store

// Ref to control the visibility of the edit modal.
const showEditModal = ref<boolean>(false)

// Opens the edit modal for a specific character by adding their ID to the URL query
// and setting the modal visibility to true.
const openEditModal = (id: number) => {
  router.push({ query: { id } })
  showEditModal.value = true
}

watchEffect(async () => {
  // Watch for changes in route and character data.
  // Fetches characters if none exist and updates modal visibility based on URL query.
  // This effect runs automatically when route.query.id or characters.value changes.
  try {
    if (!characters.value?.length) {
      await fetchCharacters()
    }
  } catch (e) {
    console.error('Failed to fetch characters:', e)
  }

  showEditModal.value = !!route.query.id
})
</script>

<template>
  <main
    role="main"
    class="w-[85vw] md:w-[90vw] max-w-(--content-size) mx-auto py-12 md:py-24 lg:py-36"
  >
    <!-- Skeleton loading, while data is coming in. -->
    <div v-if="loading" role="status" aria-live="polite">Loading...</div>

    <!-- Modal containing the character edit form. -->
    <ModalEdit v-if="showEditModal" />

    <!-- Characters list. -->
    <div
      v-else-if="characters.length"
      class="characters-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="Star Wars Characters"
    >
      <article
        class="relative grid grid-rows-[1fr_auto] [&>*]:col-1 character overflow-hidden rounded-xl isolate bg-accent"
        v-for="char in characters"
        :key="char.id"
        role="listitem"
      >
        <div
          v-if="char.image"
          class="character-image after:absolute after:inset-0 after:bg-linear-to-t after:from-black after:to-black/0 max-h-[350px] md:max-h-[600px] row-[1/-1]"
        >
          <img
            :src="char.image"
            :alt="`Portrait of ${char.name}`"
            class="size-full"
          />
        </div>

        <div class="character-info row-[2] relative px-6 py-11">
          <ul
            class="character-characteristics mb-9 gap-1 grid text-sm md:text-lg leading-none"
            aria-label="Character details"
          >
            <li v-for="(value, key) in getCharacterDetails(char)" :key="key">
              <span
                :aria-label="capitalizeFirst(key)"
                v-if="!['id', 'edited'].includes(key)"
              >
                {{ capitalizeFirst(key) }}:
                <strong>{{ value }}</strong>
              </span>
            </li>
          </ul>

          <button
            @click="openEditModal(char.id)"
            class="button"
            :aria-label="`Edit ${char.name}'s information`"
          >
            Edit
          </button>
        </div>
      </article>
    </div>

    <!-- Error. -->
    <div v-else-if="error" role="alert" aria-live="assertive">
      Error: {{ error.message }}
    </div>
  </main>
</template>
