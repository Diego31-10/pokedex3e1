import React from 'react';
import { View, Text } from 'react-native';

interface InfoCardProps {
  label: string;
  value: string;
  bgColor: string;
  textColor: string;
}

export default function InfoCard({ label, value, bgColor, textColor }: InfoCardProps) {
  return (
    <View className={`flex-1 ${bgColor} rounded-2xl p-4 items-center`}>
      <Text className="text-gray-600">{label}</Text>
      <Text className={`text-2xl font-bold ${textColor}`}>
        {value}
      </Text>
    </View>
  );
}