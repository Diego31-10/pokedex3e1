import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  disablePrevious: boolean;
}

export default function NavigationButtons({ 
  onPrevious, 
  onNext, 
  disablePrevious 
}: NavigationButtonsProps) {
  return (
    <View className="flex-row justify-between mb-6">
      <TouchableOpacity
        onPress={onPrevious}
        disabled={disablePrevious}
        className={`flex-1 mr-2 py-4 rounded-full ${disablePrevious ? 'bg-gray-400' : 'bg-white'}`}
      >
        <Text className="text-center font-bold text-gray-800">← Anterior</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onNext}
        className="flex-1 ml-2 bg-white py-4 rounded-full"
      >
        <Text className="text-center font-bold text-gray-800">Siguiente →</Text>
      </TouchableOpacity>
    </View>
  );
}