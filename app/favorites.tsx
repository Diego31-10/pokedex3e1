import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useFavorites } from '../context/FavoritesContext';
import FavoriteCard from '../components/FavoriteCard';

export default function Favorites() {
  const router = useRouter();
  const { favorites, removeFavorite } = useFavorites();

  const handlePokemonPress = (id: number) => {
    router.push({ pathname: '/', params: { pokemonId: id } });
  };

  return (
    <View className="flex-1 bg-red-500">
      <View className="flex-1 pt-12 px-4">
        <View className="bg-white rounded-3xl p-6 mb-4 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-gray-800">Favoritos</Text>
            <Text className="text-gray-500 mt-1">{favorites.length} Pokémon guardados</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-red-500 px-4 py-2 rounded-full"
          >
            <Text className="text-white font-bold">Volver</Text>
          </TouchableOpacity>
        </View>

        {favorites.length === 0 ? (
          <View className="bg-white rounded-3xl p-8 items-center">
            <Text className="text-6xl mb-4">💔</Text>
            <Text className="text-xl font-bold text-gray-800 mb-2">
              No tienes favoritos
            </Text>
            <Text className="text-gray-600 text-center">
              Agrega pokémon a favoritos desde la pantalla principal
            </Text>
          </View>
        ) : (
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            {favorites.map((pokemon) => (
              <FavoriteCard
                key={pokemon.id}
                pokemon={pokemon}
                onPress={() => handlePokemonPress(pokemon.id)}
                onRemove={() => removeFavorite(pokemon.id)}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}