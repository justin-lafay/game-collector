import { Link, router, useFocusEffect } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Card from "../card";

export default function Index() {

  const [games, setGames] = useState<{ id: number; name: string; minPlayers: string; maxPlayers: string; avgTime: number; maxTime: number; timeFeeling: string; type: string }[]>([]);
  
  const database = useSQLiteContext();
  console.log("Database context:", database.getAllAsync("SELECT name FROM sqlite_master WHERE type='table';"));

  async function fetchGames() {
    try {
      const result: { id: number; name: string; minPlayers: string; maxPlayers: string; avgTime: number; maxTime: number; timeFeeling: string; type: string }[] = await database.getAllAsync("SELECT * FROM shelf;");
      setGames(result);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  }

  async function deleteGame(id: number) {
    try {
      await database.runAsync("DELETE FROM shelf WHERE id = ?;", [id]);
      console.log("Game deleted successfully!");
      fetchGames();
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGames();
    }, [database])
  );  

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "plum",
        padding: 20,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
          <Link href="/about" style={{ color: "blue", padding: 10 }}>
            <Text>About</Text>
          </Link>
          <View style={{ marginTop: 20 }}>
            <Button onPress={() => router.push("/modal")} title="Create game" />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button onPress={() => router.push("/(tabs)/finder")} title="Find a game!" />
          </View>
          <ScrollView style={{ marginTop: 20, width: "100%" }}>
            {games.map((game) => (
              <Card key={game.id} game={game} deleteGame={() => deleteGame(game.id)} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View> 
  );
}