import { router } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


export default function Modal() {

    const [name, setName] = useState("Test");
    const [genre, setGenre] = useState("Simple");
    const [numPlayers, setNumPlayers] = useState("3");
    const [avgTime, setAvgTime] = useState("60");

    const database = useSQLiteContext();

    const handleCreate = async () => {
        database.withTransactionAsync(async () => {
            database.runAsync(
                "INSERT INTO games (name, genre, numPlayers, avgTime) VALUES (?, ?, ?, ?);",
                [name, genre, parseInt(numPlayers), parseInt(avgTime)]
            ).then(() => {
                console.log("Game created successfully!");
                router.back();
            }).catch((error) => {
                console.error("Error creating game:", error);
            });
        });
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "lightblue" }}>
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 29, fontWeight: "bold" }}>New game</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <TextInput 
                    placeholder="Name" 
                    value={name}
                    onChangeText={setName} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <TextInput placeholder="Genre" 
                    value={genre}
                    onChangeText={setGenre} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <TextInput placeholder="Number of players" keyboardType="numeric" 
                    value={numPlayers}
                    onChangeText={setNumPlayers} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <TextInput placeholder="Average time (min)" keyboardType="numeric" 
                    value={avgTime}
                    onChangeText={setAvgTime} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button title="Create" onPress={() => handleCreate()}/>
                </View>
            </View>
        </View>
    );
}