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
    <!-- @improve add/create Character card/own component if project demands it. -->
    <div
      v-else-if="characters.length"
      class="grid gap-6 characters-grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
      role="list"
      aria-label="Star Wars Characters"
    >
      <article
        class="relative grid group grid-rows-[1fr_auto] [&>*]:col-1 character overflow-hidden isolate rounded-xl holographic-card transition"
        v-for="char in characters"
        :key="char.id"
        role="listitem"
      >
        <div
          v-if="char.image"
          class="character-image after:absolute after:inset-0 after:bg-linear-to-t after:from-black after:to-black/0 max-h-[300px] md:max-h-[580px] row-[1/-1] bg-accent overflow-hidden"
        >
          <!-- @todo add some hover to image also. -->
          <img
            :src="char.image"
            :alt="`Portrait of ${char.name}`"
            class="size-full"
          />
        </div>

        <div
          class="character-info overflow-hidden row-[2] relative grid px-6 py-11"
        >
          <ul
            class="character-characteristics group-hover:mb-9 transition-[margin] gap-3 grid grid-cols-2 text-sm md:text-lg leading-none"
            aria-label="Character details"
          >
            <template
              v-for="(value, key) in getCharacterDetails(char)"
              :key="key"
            >
              <li v-if="value && !['id', 'edited'].includes(key)">
                <p :aria-label="capitalizeFirst(key)">
                  <span
                    class="block text-[10px] font-light tracking-wider uppercase mb-1"
                  >
                    {{ capitalizeFirst(key) + ' &mdash;' }}
                  </span>
                  <strong class="text-base/1">{{ value }}</strong>
                </p>
              </li>
            </template>
          </ul>

          <button
            @click="openEditModal(char.id)"
            class="button button--primary ms-auto group-hover:delay-150 translate-y-[200%] opacity-0 group-hover:opacity-100 group-hover:translate-0 transition"
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

<style scoped>
.holographic-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    0deg,
    transparent,
    transparent 30%,
    var(--color-accent-60)
  );
  transform: rotate(-45deg);
  transition: all 0.7s var(--easing-default);
  opacity: 0;
}

.holographic-card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px var(--color-accent);

  &::before {
    opacity: 1;
    transform: rotate(-45deg) translateY(100%);
  }
}
</style>
