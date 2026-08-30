import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useState } from "react";
import { ScrollView, TextInput, View } from "react-native";
import Card from "../card";

export type GameCard = {
    id: number;
    game: string;
    minPlayers: string;
    maxPlayers: string;
    avgTime: number;
    maxTime: number;
    timeFeeling: string;
    type: string;
}

export default function Finder() {
    const [games, setGames] = useState<GameCard[]>([]);
  
    const database = useSQLiteContext();
    
    const { players, time, type } = useLocalSearchParams<{
        players?: string;
        time?: string;
        type?: string;
    }>();

    async function fetchGames() {
        try {
            const playersNum = Number(players) || 0;
            const result: GameCard[] = await database.getAllAsync(
                `SELECT * FROM shelf
                WHERE minPlayers <= ? AND maxPlayers >= ? AND timeFeeling = ? AND type = ?;`,
                [playersNum, playersNum, String(time), String(type)]
            );
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
    }, [database, players, time, type])
    );  

    return(
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "lightblue", padding: 20 }}>
            <View style={{width: "100%", alignItems: "center" }}>
                <TextInput
                    placeholder="game"
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