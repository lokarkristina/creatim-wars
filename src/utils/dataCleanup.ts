import type { Character } from '@/types/Character'

/**
 * Extracts and returns the essential character details from a Character object.
 * @param {Character} char - The character object containing the source data.
 * @returns {Character} A new Character object with selected properties.
 */
// @todo is this ok? move to own file?
interface CharacterOutput {
  id: number
  name: string
  height: string
  mass: string
  'Hair color': string
  'Skin color': string
  'Eye color': string
  born: string
  gender: string
  edited: string
}

export const getCharacterDetails = (char: Character): CharacterOutput => ({
  id: char.id,
  name: char.name,
  height: char.height,
  mass: char.mass,
  'Hair color': char.hairColor,
  'Skin color': char.skinColor,
  'Eye color': char.eyeColor,
  born: char.born,
  gender: char.gender,
  edited: char.edited,
})

/**
 * Capitalizes the first letter of a given string.
 * @param {string} text - The input string to be capitalized.
 * @returns {string} The input string with its first letter capitalized.
 * @example
 * capitalizeFirst("hello") // returns "Hello"
 */
export const capitalizeFirst = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
