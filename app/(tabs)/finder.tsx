import { useFocusEffect } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useState } from "react";
import { ScrollView, TextInput, View } from "react-native";
import Card from "../card";

export default function Finder() {
    const [games, setGames] = useState<{ id: number; name: string; minPlayers: string; maxPlayers: string; avgTime: number; maxTime: number; timeFeeling: string; type: string }[]>([]);
  
    const database = useSQLiteContext();

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

    return(
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "lightblue", padding: 20 }}>
            <View style={{width: "100%", alignItems: "center" }}>
                <TextInput
                    placeholder="name"
                    style={{ backgroundColor: "white", padding: 10, borderRadius: 5, width: "80%" }}
                />
            </View>
            <View style={{width: "100%", alignItems: "center", marginTop: 20 }}>
                <ScrollView style={{ marginTop: 20, width: "100%" }}>
                    {games.map((game) => (
                        <Card key={game.id} game={game} deleteGame={() => deleteGame(game.id)} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}