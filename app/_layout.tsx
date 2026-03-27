import { Stack } from "expo-router";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";

const createDbIfNeeded = async (db: SQLiteDatabase) => {
  console.log("Checking if database needs to be created...");
  await db.execAsync(
    "CREATE TABLE IF NOT EXISTS games (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, genre TEXT);"
  );
}

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="games.db" onInit={createDbIfNeeded}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </SQLiteProvider>
  );
} 
