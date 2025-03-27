<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import { useFetch } from '@/composables/useFetch'
import type { Character } from '@/types/Character'

const characters = ref<Character[]>([])

const characterEdit = () => console.log('🪄 e d i t i n g 🪄')

const { data: charactersData, loading, error } = useFetch<Character[]>()
// Watch for changes in charactersData.
watchEffect(() => {
  if (charactersData.value) {
    characters.value = charactersData.value
  }
})
</script>

<template>
  <main role="main">
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
        <button class="button" @click="characterEdit" title="Edit character">
          Edit
        </button>
      </article>
    </template>
  </main>
</template>
