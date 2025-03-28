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
  <main role="main">
    {{ loading }}
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <template v-else>
      <article class="character" v-for="char in characters" :key="char.id">
        <picture v-if="char.image">
          <img :src="char.image" :alt="char.name" loading="lazy" />
        </picture>

        <ul class="character-characteristics">
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
      </article>
    </template>
  </main>
</template>
