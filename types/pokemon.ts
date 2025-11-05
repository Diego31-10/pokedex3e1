export interface PokemonType {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  species?: {
    url: string;
  };
}

export interface FavoritePokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

// Nuevos tipos para evoluciones
export interface Evolution {
  id: number;
  name: string;
  image: string;
}

export interface EvolutionChainResponse {
  chain: {
    species: {
      name: string;
      url: string;
    };
    evolves_to: any[];
  };
}