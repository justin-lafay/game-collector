import { Stack } from "expo-router";
import * as SQLite from "expo-sqlite";
import { SQLiteProvider } from "expo-sqlite";

const db = SQLite.openDatabaseAsync("games.db");

async function loadDb() {
  try {
    await (await db).getAllAsync("SELECT name FROM sqlite_master WHERE type='table' AND name='games';");
    console.log("Database loaded successfully!");
  } catch (error) {
    console.error("Error loading database:", error);
  }
}


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
