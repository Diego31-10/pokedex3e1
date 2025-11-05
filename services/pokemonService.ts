import axios from 'axios';
import { PokemonType } from '../types/pokemon';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const obtenerPokemon = async (id: string | number): Promise<PokemonType | null> => {
  try {
    const response = await axios.get<PokemonType>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        console.log('Pokémon no encontrado');
        return null;
      }
    }
    console.error('Error al obtener Pokémon:', error);
    return null;
  }
};