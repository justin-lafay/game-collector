import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";


export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="init" assetSource={{ assetId: require('../assets/init.db') }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </SQLiteProvider>
  );
} 
