import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Evolution } from '../types/pokemon';

interface EvolutionChainProps {
  evolutions: Evolution[];
  currentPokemonId: number;
  onSelectEvolution: (id: number) => void;
  loading: boolean;
}

export default function EvolutionChain({ 
  evolutions, 
  currentPokemonId, 
  onSelectEvolution,
  loading 
}: EvolutionChainProps) {
  if (loading) {
    return (
      <View className="bg-gray-100 rounded-2xl p-4 items-center">
        <ActivityIndicator size="small" color="#EF4444" />
        <Text className="text-gray-600 mt-2">Cargando evoluciones...</Text>
      </View>
    );
  }

  if (evolutions.length <= 1) {
    return null; // No mostrar si no tiene evoluciones
  }

  return (
    <View className="bg-gray-100 rounded-2xl p-4">
      <Text className="font-bold text-gray-800 mb-3 text-lg">
        Cadena de Evolución
      </Text>
      
      <View className="flex-row items-center justify-around">
        {evolutions.map((evolution, index) => (
          <React.Fragment key={evolution.id}>
            <TouchableOpacity
              onPress={() => onSelectEvolution(evolution.id)}
              className={`items-center ${
                evolution.id === currentPokemonId 
                  ? 'bg-red-100 rounded-2xl p-2' 
                  : ''
              }`}
            >
              <Image
                source={{ uri: evolution.image }}
                className="w-20 h-20"
                resizeMode="contain"
              />
              <Text className={`capitalize text-sm mt-1 ${
                evolution.id === currentPokemonId 
                  ? 'font-bold text-red-600' 
                  : 'text-gray-600'
              }`}>
                {evolution.name}
              </Text>
            </TouchableOpacity>
            
            {index < evolutions.length - 1 && (
              <Text className="text-2xl text-gray-400 mx-1">→</Text>
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}