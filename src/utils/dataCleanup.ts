import type { Character, CharacterOutput } from '@/types/Character'

/**
 * Transforms a Character object into a formatted CharacterOutput object.
 * Handles unit conversions and text formatting for display purposes.
 *
 * @param {Character} character - The source character data
 * @returns {Partial<CharacterOutput>} Formatted character details
 */
export const getCharacterDetails = ({
  id,
  name,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  born,
  gender,
  edited,
}: Character): Partial<CharacterOutput> => {
  return {
    ...(id && { id }),
    ...(name && { name }),
    ...(edited && { edited }),
    ...(height && { height: `${height} cm` }),
    ...(mass && { mass: `${mass} kg` }),
    ...(hairColor && { 'Hair color': capitalizeFirst(hairColor) }),
    ...(skinColor && { 'Skin color': capitalizeFirst(skinColor) }),
    ...(eyeColor && { 'Eye color': capitalizeFirst(eyeColor) }),
    ...(gender && { gender: capitalizeFirst(gender) }),
    ...(born && { born: `${born} ${getEraDesignation(born)}` }),
  }
}

/**
 * Helper function to determine the era designation (BBY/ABY).
 */
const getEraDesignation = (born: string): string => {
  const bornNum = Number(born)
  return !isNaN(bornNum) ? (bornNum > 0 ? 'ABY' : 'BBY') : ''
}

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
