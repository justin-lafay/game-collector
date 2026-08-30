import { router } from "expo-router";
import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";


export default function Browse() {

    const [players, setPlayers] = useState(2);
    const [time, setTime] = useState("Court");
    const [style, setStyle] = useState("Coopération");
    const styles = ["Coopération", "Individel"];
    const temps = ["Court", "Moyen", "Long"];

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontStyle: "italic" }}>Joueurs:</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flex: 1, paddingVertical: 20 }}>
                        <Pressable onPress={() => setPlayers((prevPlayers) => Math.max(1, prevPlayers - 1))} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>-</Text>
                        </Pressable>
                    </View>

                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", maxWidth: 90 }}>
                        <Text>{players}</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Pressable onPress={() => setPlayers((prevPlayers) => prevPlayers + 1)} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontStyle: "italic" }}>Temps:</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flex: 1, paddingVertical: 20 }}>
                        <Pressable onPress={() => {
                            setTime((prevTime) => {
                                const currentIndex = temps.indexOf(prevTime);
                                const nextIndex = (currentIndex - 1 + temps.length) % temps.length;
                                return temps[nextIndex]
                            });
                        }} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>-</Text>
                        </Pressable>
                    </View>

                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", maxWidth: 90 }}>
                        <Text>{time}</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Pressable onPress={() => {
                            setTime((prevTime) => {
                                const currentIndex = temps.indexOf(prevTime);
                                const nextIndex = (currentIndex + 1) % temps.length;
                                return temps[nextIndex]
                            });
                        }} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontStyle: "italic" }}>Type:</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flex: 1, paddingVertical: 20 }}>
                        <Pressable onPress={() => {
                            setStyle((prevStyle) => {
                                const currentIndex = styles.indexOf(prevStyle);
                                const nextIndex = (currentIndex - 1 + styles.length) % styles.length;
                                return styles[nextIndex]
                            });
                        }} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>←</Text>
                        </Pressable>
                    </View>

                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", maxWidth: 90 }}>
                        <Text>{style}</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Pressable onPress={() => {
                            setStyle((prevStyle) => {
                                const currentIndex = styles.indexOf(prevStyle);
                                const nextIndex = (currentIndex + 1) % styles.length;
                                return styles[nextIndex]
                            });
                        }} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>→</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={{ margin: 20 }}>
                <Button title="Let's play !" onPress={() => {
                    router.push({
                        pathname: "/(tabs)/finder",
                        params: {
                            players: String(players),
                            time: String(time),
                            type: String(style),
                        }
                    })
                }} />
            </View>
        </View>
    );
}