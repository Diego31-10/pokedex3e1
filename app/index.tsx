import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { PokemonType } from '../types/pokemon';
import { obtenerPokemon } from '../services/pokemonService';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import NavigationButtons from '../components/NavigationButtons';
import NotFound from '../components/NotFound';
import "@/global.css"

export default function Pokedex() {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchId, setSearchId] = useState<number | string>(25);
  const [inputValue, setInputValue] = useState<string>('25');
  const [notFound, setNotFound] = useState<boolean>(false);
  const [lastSearch, setLastSearch] = useState<string>('');

  useEffect(() => {
    cargarPokemon();
  }, [searchId]);

  const cargarPokemon = async () => {
    setLoading(true);
    setNotFound(false);
    const data = await obtenerPokemon(searchId);
    
    if (data === null) {
      setNotFound(true);
      setPokemon(null);
      setLastSearch(searchId.toString());
    } else {
      setPokemon(data);
      setNotFound(false);
    }
    
    setLoading(false);
  };

  const handleSearch = () => {
    const value = inputValue.toLowerCase().trim();
    if (value) {
      setSearchId(value);
    }
  };

  const handlePrevious = () => {
    if (pokemon && pokemon.id > 1) {
      const newId = pokemon.id - 1;
      setSearchId(newId);
      setInputValue(newId.toString());
    }
  };

  const handleNext = () => {
    if (pokemon) {
      const newId = pokemon.id + 1;
      setSearchId(newId);
      setInputValue(newId.toString());
    }
  };

  return (
    <View className="flex-1 bg-red-500">
      <View className="flex-1 pt-12 px-4">
        <SearchBar 
          value={inputValue}
          onChangeText={setInputValue}
          onSearch={handleSearch}
        />

        {loading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#ffffff" />
            <Text className="text-white mt-4">Cargando...</Text>
          </View>
        ) : notFound ? (
          <NotFound searchTerm={lastSearch} />
        ) : (
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            <PokemonCard pokemon={pokemon} />
            {pokemon && (
              <NavigationButtons
                onPrevious={handlePrevious}
                onNext={handleNext}
                disablePrevious={pokemon.id === 1}
              />
            )}
          </ScrollView>
        )}
      </View>
    </View>
  );
}