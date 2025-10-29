import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ value, onChangeText, onSearch }: SearchBarProps) {
  return (
    <View className="bg-white rounded-3xl p-6 mb-4">
      <Text className="text-3xl font-bold text-gray-800 mb-4">Pokédex</Text>
      
      <View className="flex-row gap-2">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Nombre o número"
          className="flex-1 bg-gray-100 px-4 py-3 rounded-full text-gray-800"
          onSubmitEditing={onSearch}
        />
        <TouchableOpacity
          onPress={onSearch}
          className="bg-red-500 px-6 py-3 rounded-full justify-center"
        >
          <Text className="text-white font-bold">Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}