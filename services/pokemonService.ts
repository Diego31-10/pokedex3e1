import axios from 'axios';
import { PokemonType, Evolution, EvolutionChainResponse } from '../types/pokemon';

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

export const obtenerEvoluciones = async (pokemonId: number): Promise<Evolution[]> => {
  try {
    // Obtener datos del pokemon para conseguir la URL de species
    const pokemonResponse = await axios.get<PokemonType>(`${API_URL}/${pokemonId}`);
    const speciesUrl = pokemonResponse.data.species?.url;
    
    if (!speciesUrl) return [];

    // Obtener datos de species para conseguir evolution_chain
    const speciesResponse = await axios.get(speciesUrl);
    const evolutionChainUrl = speciesResponse.data.evolution_chain.url;

    // Obtener cadena de evolución
    const evolutionResponse = await axios.get<EvolutionChainResponse>(evolutionChainUrl);
    
    // Parsear cadena de evolución
    const evolutions: Evolution[] = [];
    let currentEvolution = evolutionResponse.data.chain;

    // Función recursiva para obtener todas las evoluciones
    const parseEvolutions = async (chain: any) => {
      const pokemonName = chain.species.name;
      const pokemonUrl = chain.species.url;
      const id = parseInt(pokemonUrl.split('/').slice(-2, -1)[0]);

      // Obtener imagen del pokemon
      const pokemonData = await axios.get<PokemonType>(`${API_URL}/${id}`);
      
      evolutions.push({
        id,
        name: pokemonName,
        image: pokemonData.data.sprites.front_default
      });

      // Procesar siguiente evolución
      if (chain.evolves_to.length > 0) {
        for (const nextEvolution of chain.evolves_to) {
          await parseEvolutions(nextEvolution);
        }
      }
    };

    await parseEvolutions(currentEvolution);
    return evolutions;
  } catch (error) {
    console.error('Error al obtener evoluciones:', error);
    return [];
  }
};