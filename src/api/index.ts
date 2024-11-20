import { Pokemon } from './types'

const BASE_URL = 'https://pokeapi.co/api/v2'

export const getPokemon = async (name: string) => {
  const response = await fetch(`${BASE_URL}/pokemon/${name}`)
  return (await response.json()) as Pokemon
}

export const getFirst20Pokemon = async () => {
  return null
}
