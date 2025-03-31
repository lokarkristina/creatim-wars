<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// store
import { storeToRefs } from 'pinia'
import { useCharacterStore } from '@/stores/characters'
// components
import AppButton from '@/components/elements/AppButton.vue'
import AppLoader from '@/components/elements/AppLoader.vue'
import ModalEdit from '@/components/elements/ModalEdit.vue'
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
  <div>
    <!-- Loading, while data is coming in. -->
    <div v-if="loading" role="status" aria-busy="true">
      <span class="sr-only">Loading characters...</span>
      <AppLoader />
    </div>

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
        class="relative grid group grid-rows-[1fr_auto] [&>*]:col-1 character overflow-hidden isolate rounded-xl transition"
        v-for="char in characters"
        :key="char.id"
        role="listitem"
        tabindex="0"
      >
        <div
          v-if="char.image"
          class="character-image after:absolute after:inset-0 after:bg-linear-to-t after:from-black after:to-black/0 max-h-[300px] md:max-h-[580px] row-[1/-1] bg-accent overflow-hidden"
        >
          <img
            :src="char.image"
            :alt="`Portrait of ${char.name}`"
            class="relative group-hover:scale-105 size-full"
            :aria-describedby="`char-details-${char.id}`"
          />
        </div>

        <div
          class="character-info overflow-hidden row-[2] relative grid px-6 py-11"
          :id="`char-details-${char.id}`"
        >
          <ul
            class="character-characteristics group-hover:mb-9 transition-[margin] gap-3 grid grid-cols-2 text-sm md:text-lg leading-none"
            :aria-label="`Details for ${char.name}`"
          >
            <template
              v-for="(value, key) in getCharacterDetails(char)"
              :key="key"
            >
              <li
                v-if="value && !['id', 'edited'].includes(key)"
                :class="{ 'col-span-2': key === 'name' }"
              >
                <p>
                  <label :for="`char-${char.id}-${key}`" class="mb-0.5">
                    {{ capitalizeFirst(key) + ' —' }}
                  </label>
                  <strong
                    :id="`char-${char.id}-${key}`"
                    class="text-base/1"
                    :class="{ 'text-xl uppercase': key === 'name' }"
                  >
                    {{ value }}
                  </strong>
                </p>
              </li>
            </template>
          </ul>

          <!-- Edit - opens modal to edit characters' data. -->
          <AppButton
            class="justify-self-center group-hover:delay-150 translate-y-[200%] opacity-0 group-hover:opacity-100 group-hover:translate-0 transition"
            :ariaLabel="`Edit ${char.name}'s information`"
            @click="openEditModal(char.id)"
          >
            Edit
          </AppButton>
        </div>
      </article>
    </div>

    <!-- Error. -->
    <div
      v-else-if="error"
      role="alert"
      aria-live="assertive"
      class="error-message"
    >
      <span class="sr-only">Error occurred:</span>
      {{ error.message }}
    </div>
  </div>
</template>

<style scoped>
img {
  mask: linear-gradient(
      135deg,
      var(--color-black) 40%,
      rgba(0, 0, 0, 0.5),
      var(--color-black) 60%
    )
    100% 100%/250% 250%;
  transition: var(--duration-slow);
}

article:hover,
article:focus {
  transform: scale(1.03);
  box-shadow: 0 0 10px var(--color-accent);

  img {
    mask-position: 0 0;
  }
}
</style>
