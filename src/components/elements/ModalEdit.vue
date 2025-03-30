<script setup lang="ts">
import { computed, watchEffect, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// components
import AppButton from '@/components/elements/AppButton.vue'
// store
import { useCharacterStore } from '@/stores/characters'
// types
import type { Character } from '@/types/Character'

const route = useRoute()
const router = useRouter()

const { getCharacterById, editCharacter } = useCharacterStore()

const character = ref<Character | null>(null)
const updatedCharacter = ref<Character>({} as Character)

// Compute the character ID from the route query parameter.
const id = computed(() => Number(route.query.id as string))

// Compute whether the character data has been modified.
const dataChanged = computed(() => {
  // Return false if either character is not available.
  if (!character.value || !updatedCharacter.value) {
    return false
  }

  // Check if any field in updatedCharacter is different from the original.
  return Object.keys(updatedCharacter.value).some((key) => {
    const typedKey = key as keyof Character
    return updatedCharacter.value[typedKey] !== character.value![typedKey]
  })
})

// Function to close the edit modal by clearing the query parameters.
const closeEdit = () => {
  router.push({ query: {} })
}

// Handle form submission,
// update the character if it exists and closes the edit modal.
const handleSubmit = () => {
  if (character.value) {
    editCharacter(character.value.id, updatedCharacter.value)
    closeEdit()
  }
}

watchEffect(() => {
  // If there's a valid ID in the route query.
  if (id.value) {
    // Fetch the character by ID and assign it to character.value.
    // If not found, assign null.
    character.value = getCharacterById(Number(id.value)) || null
    // If a character was found, create a copy for editing.
    if (character.value) {
      updatedCharacter.value = { ...character.value }
    }
  }
})
</script>

<template>
  <div
    class="fixed inset-0 z-50 grid modal modal-edit"
    role="dialog"
    aria-labelledby="modal-title"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 modal-backdrop bg-black/30"
      @click="closeEdit"
      aria-hidden="true"
    ></div>

    <div
      class="relative inline-block m-auto p-10 bg-black modal-container rounded-xl w-full max-w-[70vw] shadow-lg shadow-accent/10"
      v-if="character"
    >
      <div
        class="modal-header py-2.5 border-b border-b-white/20 flex items-center justify-between mb-6"
      >
        <h2 id="modal-title" class="uppercase">
          {{ `Edit ${character.name}` }}
        </h2>
        <button @click="closeEdit" aria-label="Close modal" type="button">
          Close
        </button>
      </div>

      <div class="modal-content">
        <!-- @todo add form validation. -->
        <form
          @submit.prevent="handleSubmit"
          class="grid grid-cols-2 gap-x-10 gap-y-4"
        >
          <div class="form-group">
            <label for="name" id="name-label">Name</label>
            <input
              id="name"
              v-model="updatedCharacter.name"
              :placeholder="character.name"
              type="text"
              aria-labelledby="name-label"
              required
            />
          </div>

          <div class="form-group">
            <label for="height" id="height-label">Height</label>
            <input
              id="height"
              v-model="updatedCharacter.height"
              :placeholder="character.height"
              type="text"
              aria-labelledby="height-label"
            />
          </div>

          <div class="form-group">
            <label for="mass" id="mass-label">Mass</label>
            <input
              id="mass"
              v-model="updatedCharacter.mass"
              :placeholder="character.mass"
              type="text"
              aria-labelledby="mass-label"
            />
          </div>

          <div class="form-group">
            <label for="hairColor" id="hair-label">Hair color</label>
            <input
              id="hairColor"
              v-model="updatedCharacter.hairColor"
              :placeholder="character.hairColor"
              type="text"
              aria-labelledby="hair-label"
            />
          </div>

          <div class="form-group">
            <label for="skinColor" id="skin-label">Skin color</label>
            <input
              id="skinColor"
              v-model="updatedCharacter.skinColor"
              :placeholder="character.skinColor"
              type="text"
              aria-labelledby="skin-label"
            />
          </div>

          <div class="form-group">
            <label for="eyeColor" id="eye-label">Eye color:</label>
            <input
              id="eyeColor"
              v-model="updatedCharacter.eyeColor"
              :placeholder="character.eyeColor"
              type="text"
              aria-labelledby="eye-label"
            />
          </div>

          <div class="form-group">
            <label for="born" id="born-label">Born</label>
            <input
              id="born"
              v-model="updatedCharacter.born"
              :placeholder="character.born"
              type="text"
              aria-labelledby="born-label"
            />
          </div>

          <div class="form-group">
            <label for="gender" id="gender-label">Gender</label>
            <input
              id="gender"
              v-model="updatedCharacter.gender"
              :placeholder="character.gender"
              type="text"
              aria-labelledby="gender-label"
            />
          </div>

          <!-- Add hidden field to update the last edited time. -->
          <input type="hidden" v-model="updatedCharacter.edited" />

          <div
            class="grid justify-end grid-flow-col col-span-2 gap-3 mt-6 button-group"
            role="group"
            aria-label="Form controls"
          >
            <!-- cancel changes - Cancel -->
            <AppButton
              ariaLabel="Discard changes"
              modifier="error"
              @click="closeEdit"
            >
              Cancel
            </AppButton>

            <!-- submit button - Save -->
            <AppButton
              type="submit"
              ariaLabel="Save changes"
              modifier="success"
              :disabled="!dataChanged"
            >
              Save
            </AppButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
