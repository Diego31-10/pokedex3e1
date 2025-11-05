import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress: () => void;
}

export default function FavoriteButton({ isFavorite, onPress }: FavoriteButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="absolute top-0 right-0 z-10"
      style={{ elevation: 5 }}
    >
      <View className="bg-white rounded-full w-14 h-14 items-center justify-center shadow-lg border-2 border-gray-200">
        <Text className="text-3xl">
          {isFavorite ? '❤️' : '🤍'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}