import { router } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import { Button, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View, } from "react-native";

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
                "INSERT INTO shelf (game, minPlayers, maxPlayers, avgTime, maxTime, timeFeeling, type) VALUES (?, ?, ?, ?, ?, ?, ?);",
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
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "lightblue" }}>
                <View style={{ backgroundColor: "white", padding: 10, borderRadius: 10, maxWidth: 300, width: "100%" }}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 50, fontWeight: "bold" }}>New game</Text>
                    </View>
                    <View style={{ marginBottom: 10, flexDirection: "column" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Name:
                    </Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={{ fontSize: 18, borderWidth: 1, borderColor: "gray", borderRadius: 5 }} />
                </View>

                <View style={{ marginBottom: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
                            Max. players:
                        </Text>
                        <TextInput
                            keyboardType="numeric"
                            value={maxPlayers}
                            onChangeText={setMaxPlayers}
                            style={{ flex: 1, fontSize: 18, borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 5 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
                            Avrg. time (min):
                        </Text>
                        <TextInput
                            keyboardType="numeric"
                            value={avgTime}
                            onChangeText={setAvgTime}
                            style={{ flex: 1, fontSize: 18, borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 5 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
                            Max. time (min):
                        </Text>
                        <TextInput
                            keyboardType="numeric"
                            value={maxTime}
                            onChangeText={setMaxTime}
                            style={{ flex: 1, fontSize: 18, borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 5 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
                            Time feeling:
                        </Text>
                        <TextInput
                            value={feelTime}
                            onChangeText={setFeelTime}
                            style={{ flex: 1, fontSize: 18, borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 5 }}
                        />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
                            Game type:
                        </Text>
                        <TextInput
                            value={type}
                            onChangeText={setType}
                            style={{ flex: 1, fontSize: 18, borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 5 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button title="Create" onPress={() => handleCreate()} />
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    );
}