import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FavoritePokemon } from '../types/pokemon';
import TypeBadge from './TypeBadge';

interface FavoriteCardProps {
  pokemon: FavoritePokemon;
  onPress: () => void;
  onRemove: () => void;
}

export default function FavoriteCard({ pokemon, onPress, onRemove }: FavoriteCardProps) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className="bg-white rounded-2xl p-4 mb-3 flex-row items-center"
    >
      <Image
        source={{ uri: pokemon.image }}
        className="w-20 h-20"
        resizeMode="contain"
      />
      
      <View className="flex-1 ml-4">
        <Text className="text-gray-500 text-sm">#{pokemon.id.toString().padStart(3, '0')}</Text>
        <Text className="text-xl font-bold text-gray-800 capitalize">{pokemon.name}</Text>
        <View className="flex-row gap-2 mt-2">
          {pokemon.types.map((type, idx) => (
            <TypeBadge key={idx} type={type} />
          ))}
        </View>
      </View>

      <TouchableOpacity
        onPress={onRemove}
        className="bg-red-100 rounded-full w-10 h-10 items-center justify-center"
      >
        <Text className="text-red-600 text-xl">✕</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}