import { Link, router, useFocusEffect } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";

export default function Index() {

  const [games, setGames] = useState<{ id: number; name: string; genre: string; numPlayers: number; avgTime: number }[]>([]);
  
  const database = useSQLiteContext();

  async function fetchGames() {
    try {
      const result: { id: number; name: string; genre: string; numPlayers: number; avgTime: number }[] = await database.getAllAsync("SELECT * FROM games;");
      setGames(result);
      console.log("Games fetched successfully:", result);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  }

  async function deleteGame(id: number) {
    try {
      await database.runAsync("DELETE FROM games WHERE id = ?;", [id]);
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
          <ScrollView style={{ marginTop: 20, width: "100%" }}>
            {games.map((game) => (
              <View key={game.id} style={{ marginTop: 20, padding: 10, borderWidth: 1, borderColor: "gray", borderRadius: 5 }}>
                <Button title="Delete" onPress={() => deleteGame(game.id)} />
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{game.name}</Text>
                <Text>Genre: {game.genre}</Text>
                <Text>Number of players: {game.numPlayers}</Text>
                <Text>Average time: {game.avgTime} min</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View> 
  );
}