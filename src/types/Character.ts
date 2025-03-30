/**
 * Represents a character from the Star Wars universe.
 * Includes details such as:
 * @param {number} id - The id of the character.
 * @param {string} name - The name of the character.
 * @param {string} height - The height of the character.
 * @param {string} mass - The mass of the character.
 * @param {string} hairColor - The hair color of the character.
 * @param {string} skinColor - The skin color of the character.
 * @param {string} eyeColor - The eye color of the character.
 * @param {string} born - The birth year of the character.
 * @param {string} gender - The gender of the character.
 * @param {string} image - The image of the character.
 * @param {string} homeworld - The URL of the character's homeworld.
 * @param {string[]} films - An array of URLs of the films the character appeared in.
 * @param {string[]} species - An array of URLs of the character's species.
 * @param {string[]} vehicles - An array of URLs of the vehicles the character used.
 * @param {string[]} starships - An array of URLs of the starships the character used.
 * @param {string} created - The date and time when the character was created.
 * @param {string} edited - The date and time when the character was last edited.
 * @param {string} url - The URL of the character.
 */
export interface Character {
  id: number
  name: string
  height: string
  mass: string
  hairColor: string
  skinColor: string
  eyeColor: string
  born: string
  gender: string
  image?: string
  homeworld?: string
  films?: string[]
  species?: string[]
  vehicles?: string[]
  starships?: string[]
  created?: string
  edited: string
  url?: string
}

/**
 * Interface representing output data structure for a Star Wars character.
 * @interface
 * @property {number} id - Unique identifier for the character
 * @property {string} name - Name of the character
 * @property {string} height - Height of the character
 * @property {string} mass - Mass/weight of the character
 * @property {string} Hair color - Character's hair color
 * @property {string} Skin color - Character's skin color
 * @property {string} Eye color - Character's eye color
 * @property {string} born - Character's birth date/year
 * @property {string} gender - Character's gender
 * @property {string} edited - Timestamp of when the record was last modified
 */
export interface CharacterOutput {
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
