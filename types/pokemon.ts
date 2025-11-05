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
}

// Tipo para favoritos simplificado
export interface FavoritePokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}