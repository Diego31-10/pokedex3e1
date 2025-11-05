import React from 'react';
import { View, Text, Image } from 'react-native';
import { PokemonType } from '../types/pokemon';
import { useFavorites } from '../context/FavoritesContext';
import TypeBadge from './TypeBadge';
import InfoCard from './InfoCard';
import StatBar from './StatBar';
import FavoriteButton from './FavoriteButton';

interface PokemonCardProps {
  pokemon: PokemonType | null;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (!pokemon) return null;

  const handleFavoriteToggle = () => {
    if (isFavorite(pokemon.id)) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types.map(t => t.type.name)
      });
    }
  };

  return (
    <View className="bg-white rounded-3xl p-6 mb-4">
      {/* Imagen y nombre */}
      <View className="items-center mb-4">
        {/* Botón de favorito sobre la imagen */}
        <View className="relative w-full items-center">
          <FavoriteButton 
            isFavorite={isFavorite(pokemon.id)}
            onPress={handleFavoriteToggle}
          />
          
          <Text className="text-gray-500 text-lg">
            #{pokemon.id.toString().padStart(3, '0')}
          </Text>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            className="w-48 h-48"
            resizeMode="contain"
          />
        </View>
        
        <Text className="text-3xl font-bold text-gray-800 capitalize mt-2">
          {pokemon.name}
        </Text>
        
        {/* Tipos */}
        <View className="flex-row gap-2 mt-3">
          {pokemon.types.map((type, idx) => (
            <TypeBadge key={idx} type={type.type.name} />
          ))}
        </View>
      </View>

      {/* Información básica */}
      <View className="flex-row gap-3 mb-4">
        <InfoCard 
          label="Altura" 
          value={`${pokemon.height / 10}m`} 
          bgColor="bg-blue-100"
          textColor="text-blue-600"
        />
        <InfoCard 
          label="Peso" 
          value={`${pokemon.weight / 10}kg`} 
          bgColor="bg-orange-100"
          textColor="text-orange-600"
        />
      </View>

      {/* Estadísticas */}
      <View className="bg-gray-100 rounded-2xl p-4">
        <Text className="font-bold text-gray-800 mb-3 text-lg">
          Estadísticas
        </Text>
        {pokemon.stats.map((stat, idx) => (
          <StatBar 
            key={idx}
            statName={stat.stat.name}
            value={stat.base_stat}
          />
        ))}
      </View>
    </View>
  );
}