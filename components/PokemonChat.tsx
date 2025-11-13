import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface PokemonChatProps {
  pokemonName: string;
}

export default function PokemonChat({ pokemonName }: PokemonChatProps) {
  const [pregunta, setPregunta] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY || '';
  const genAI = new GoogleGenerativeAI(API_KEY);

  const consultarGemini = async () => {
    if (!pregunta.trim()) return;

    setIsLoading(true);
    const prompt = `Responde de forma breve (máximo 3 líneas) sobre el Pokémon ${pokemonName}: ${pregunta}`;
    
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      if (text) {
        setRespuesta(text);
      } else {
        setRespuesta("No se pudo obtener la respuesta");
      }
    } catch (error: any) {
      console.log(error);
      setRespuesta("Error al consultar a Gemini");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="bg-purple-50 rounded-2xl p-4 mb-4">
      <View className="mb-3">
        <Text className="text-purple-800 font-bold text-lg mb-1">
          💬 Pregunta sobre {pokemonName}
        </Text>
        <Text className="text-purple-600 text-xs">Powered by Gemini AI</Text>
      </View>

      {/* Input */}
      <View className="flex-row gap-2 mb-3">
        <TextInput
          value={pregunta}
          onChangeText={setPregunta}
          placeholder="¿Cuáles son sus habilidades?"
          className="flex-1 bg-white px-4 py-3 rounded-full text-gray-800"
          onSubmitEditing={consultarGemini}
          editable={!isLoading}
        />
        <TouchableOpacity
          onPress={consultarGemini}
          disabled={isLoading || !pregunta.trim()}
          className={`px-6 py-3 rounded-full justify-center ${
            isLoading || !pregunta.trim() ? 'bg-gray-400' : 'bg-purple-500'
          }`}
        >
          <Text className="text-white font-bold">
            {isLoading ? '...' : 'Enviar'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Respuesta */}
      {isLoading && (
        <View className="bg-white p-4 rounded-xl">
          <ActivityIndicator size="small" color="#9333EA" />
          <Text className="text-gray-600 text-center mt-2">Pensando...</Text>
        </View>
      )}

      {!isLoading && respuesta !== '' && (
        <View className="bg-white p-4 rounded-xl">
          <Text className="text-gray-800">{respuesta}</Text>
        </View>
      )}
    </View>
  );
}