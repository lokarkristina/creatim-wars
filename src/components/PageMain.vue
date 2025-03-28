<script setup lang="ts">
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useCharacterStore } from '@/stores/characters'

const store = useCharacterStore()
// Use storeToRefs for ALL reactive store properties.
const { loading, error, characters } = storeToRefs(store)
// Only methods are destructured directly from store.
const { fetchCharacters, editCharacter } = store

watchEffect(async () => {
  try {
    if (!characters.value?.length) {
      await fetchCharacters()
    }
  } catch (e) {
    console.error('Failed to fetch characters:', e)
  }
})
</script>

<template>
  <main
    role="main"
    class="w-[85vw] md:w-[90vw] max-w-(--content-size) mx-auto py-20 md:py-36"
  >
    <!-- Skeleton loading, while data is coming in. -->
    <div v-if="loading">Loading...</div>

    <!-- Characters list. -->
    <div
      v-else-if="characters.length"
      class="characters-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <!-- @todo - don't leave the card height as hardcoded? -->
      <article
        class="relative grid grid-rows-[1fr_auto] [&>*]:col-1 character overflow-hidden rounded-xl isolate bg-accent"
        v-for="char in characters"
        :key="char.id"
      >
        <div
          v-if="char.image"
          class="character-image after:absolute after:inset-0 after:bg-linear-to-t after:from-black after:to-black/0 max-h-[350px] md:max-h-[600px] row-[1/-1]"
        >
          <img :src="char.image" :alt="char.name" class="size-full" />
        </div>

        <div class="character-info row-[2] relative px-6 py-11">
          <ul
            class="character-characteristics mb-9 gap-1 grid text-sm md:text-lg leading-none"
          >
            <li>
              Name: <strong>{{ char.name }}</strong>
            </li>
            <li>
              Height: <strong>{{ char.height }}</strong>
            </li>
            <li>
              Mass: <strong>{{ char.mass }}</strong>
            </li>
            <li>
              Hair color: <strong>{{ char.hairColor }}</strong>
            </li>
            <li>
              Skin color: <strong>{{ char.skinColor }}</strong>
            </li>
            <li>
              Eye color: <strong>{{ char.eyeColor }}</strong>
            </li>
            <li>
              Birth year: <strong>{{ char.born }}</strong>
            </li>
            <li>
              Gender: <strong>{{ char.gender }}</strong>
            </li>
          </ul>

          <!-- Edit the character characteristics. -->
          <button
            class="button"
            @click="editCharacter(char.id)"
            title="Edit character"
          >
            Edit
          </button>
        </div>
      </article>
    </div>

    <!-- Error. -->
    <div v-else-if="error">Error: {{ error.message }}</div>
  </main>
</template>

<style scoped></style>
