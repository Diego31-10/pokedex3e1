import React from 'react';
import { View, Text } from 'react-native';

interface NotFoundProps {
  searchTerm: string;
}

export default function NotFound({ searchTerm }: NotFoundProps) {
  return (
    <View className="bg-white rounded-3xl p-8 items-center">
      <Text className="text-6xl mb-4">❌</Text>
      <Text className="text-2xl font-bold text-gray-800 mb-2">
        Pokémon no encontrado
      </Text>
      <Text className="text-gray-600 text-center">
        No se encontró ningún Pokémon con el nombre o número "{searchTerm}"
      </Text>
      <Text className="text-gray-500 text-sm mt-4 text-center">
        Intenta buscar con otro nombre o número (1-1025)
      </Text>
    </View>
  );
}