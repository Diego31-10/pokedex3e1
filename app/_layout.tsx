import { Stack } from 'expo-router';
import { FavoritesProvider } from '../context/FavoritesContext';

export default function Layout() {
  return (
    <FavoritesProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="favorites" />
      </Stack>
    </FavoritesProvider>
  );
}