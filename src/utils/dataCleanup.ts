import type { Character } from '@/types/Character'

/**
 * Extracts and returns the essential character details from a Character object.
 * @param {Character} char - The character object containing the source data.
 * @returns {Character} A new Character object with selected properties.
 */
export const getCharacterDetails = (char: Character): Character => ({
  id: char.id,
  name: char.name,
  height: char.height,
  mass: char.mass,
  hairColor: char.hairColor,
  skinColor: char.skinColor,
  eyeColor: char.eyeColor,
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
