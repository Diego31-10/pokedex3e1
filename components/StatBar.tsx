import React from 'react';
import { View, Text } from 'react-native';

interface StatBarProps {
  statName: string;
  value: number;
}

export default function StatBar({ statName, value }: StatBarProps) {
  return (
    <View className="mb-3">
      <View className="flex-row justify-between mb-1">
        <Text className="text-gray-600 capitalize">{statName}</Text>
        <Text className="font-bold text-gray-800">{value}</Text>
      </View>
      <View className="bg-gray-300 rounded-full h-2">
        <View
          style={{ width: `${(value / 255) * 100}%` }}
          className="bg-red-500 h-2 rounded-full"
        />
      </View>
    </View>
  );
}