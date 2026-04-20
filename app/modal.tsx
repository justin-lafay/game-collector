import { router } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


export default function Modal() {

    const [name, setName] = useState("Test");
    const [minPlayers, setMinPlayers] = useState("1");
    const [maxPlayers, setMaxPlayers] = useState("10");
    const [avgTime, setAvgTime] = useState("60");
    const [maxTime, setMaxTime] = useState("120");
    const [feelTime, setFeelTime] = useState("Court");
    const [type, setType] = useState("Coopération");
    const database = useSQLiteContext();

    const handleCreate = async () => {
        database.withTransactionAsync(async () => {
            database.runAsync(
                "INSERT INTO games (name, minPlayers, maxPlayers, avgTime, maxTime, feelTime, type) VALUES (?, ?, ?, ?, ?, ?, ?);",
                [name, parseInt(minPlayers), parseInt(maxPlayers), parseInt(avgTime), parseInt(maxTime), feelTime, type]
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
                    <TextInput placeholder="Minimum players" keyboardType="numeric" 
                    value={minPlayers}
                    onChangeText={setMinPlayers} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <TextInput placeholder="Maximum players" keyboardType="numeric" 
                    value={maxPlayers}
                    onChangeText={setMaxPlayers} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <TextInput placeholder="Average time (min)" keyboardType="numeric" 
                    value={avgTime}
                    onChangeText={setAvgTime} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <TextInput placeholder="Maximum time (min)" keyboardType="numeric" 
                    value={maxTime}
                    onChangeText={setMaxTime} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <TextInput placeholder="Time feeling" 
                    value={feelTime}
                    onChangeText={setFeelTime} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <TextInput placeholder="Game type" 
                    value={type}
                    onChangeText={setType} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button title="Create" onPress={() => handleCreate()}/>
                </View>
            </View>
        </View>
    );
}