<script setup lang="ts">
import { ref } from 'vue'
import type { Character } from '@/types/Character'

const characters = ref<Character[]>([
  {
    name: 'Test character',
    height: '22',
    mass: 'mass',
    hair_color: 'hair color',
    skin_color: 'skin color',
    eye_color: 'eye color',
    birth_year: '1995',
    gender: 'M',
    image: 'https://akabab.github.io/starwars-api/api/id/1.json',
    created: '23.43.2024',
    edited: '12.45.2024',
  },
])

const characterEdit = () => console.log('🪄 e d i t i n g 🪄')
</script>

<template>
  <div class="main">
    <template v-for="char in characters" :key="char.name">
      <article class="character">
        <picture>
          <img :src="char.image" />
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
            Hair color: <strong>{{ char.hair_color }}</strong>
          </li>
          <li>
            Skin color: <strong>{{ char.skin_color }}</strong>
          </li>
          <li>
            Eye color: <strong>{{ char.eye_color }}</strong>
          </li>
          <li>
            Birth year: <strong>{{ char.birth_year }}</strong>
          </li>
          <li>
            Gender: <strong>{{ char.gender }}</strong>
          </li>
        </ul>

        <!-- Edit the character characteristics. -->
        <button class="button" @click="characterEdit" title="Edit character">Edit</button>
      </article>
    </template>
  </div>
</template>
