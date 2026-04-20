import { Stack } from "expo-router";
import * as SQLite from "expo-sqlite";
import { SQLiteProvider } from "expo-sqlite";

const db = SQLite.openDatabaseAsync("games.db");

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="games.db" assetSource={{ assetId: require('../assets/init.db') }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </SQLiteProvider>
  );
} 
