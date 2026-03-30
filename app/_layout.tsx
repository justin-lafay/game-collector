import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system/legacy";
import { Stack } from "expo-router";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";

const loadDb = async (db: SQLiteDatabase) => {
  const dbName = "games.db";
  const dbAsset = require("../assets/testGames.db");
  const dbAssetUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
  
  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`, { intermediates: true });
    await FileSystem.downloadAsync(dbAssetUri, dbFilePath);
  } else {
    await FileSystem.deleteAsync(dbFilePath);
    await FileSystem.downloadAsync(dbAssetUri, dbFilePath);
  }

}
  
export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="games.db" onInit={loadDb}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </SQLiteProvider>
  );
} 
