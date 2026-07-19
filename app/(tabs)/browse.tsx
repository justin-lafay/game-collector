import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";


export default function Browse() {

    const [players, setPlayers] = useState(1);
    const [time, setTime] = useState("Court");
    const [style, setStyle] = useState("Coopération");
    const styles = ["Coopération", "Individel"];
    const temps = ["Court", "Moyen", "Long"];

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontStyle: "italic" }}>Players:</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flex: 1, paddingVertical: 20}}>
                        <Pressable onPress={() => setPlayers(Math.max(1, players - 1))} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>-</Text>
                        </Pressable>
                    </View>
                    <View style={{ flex: 1 , alignItems: "center", justifyContent: "center", maxWidth: 90 }}>
                        <Text>{players}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Pressable onPress={() => setPlayers(players + 1)} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontStyle: "italic" }}>Time:</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flex: 1, paddingVertical: 20 }}>
                        <Pressable onPress={() => {
                            const currentIndex = temps.indexOf(time);
                            const nextIndex = (currentIndex - 1 + temps.length) % temps.length;
                            setTime(temps[nextIndex]);
                        }} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>-</Text>
                        </Pressable>
                    </View>

                    <View style={{ flex: 1 , alignItems: "center", justifyContent: "center", maxWidth: 90 }}>
                        <Text>{time}</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Pressable onPress={() => {
                            const currentIndex = temps.indexOf(time);
                            const nextIndex = (currentIndex + 1) % temps.length;
                            setTime(temps[nextIndex]);
                        }} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Text style={{ fontStyle: "italic" }}>Type:</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flex: 1, paddingVertical: 20 }}>
                        <Pressable onPress={() => {
                            const currentIndex = styles.indexOf(style);
                            const nextIndex = (currentIndex - 1 + styles.length) % styles.length;
                            setStyle(styles[nextIndex]);
                        }} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>←</Text>
                        </Pressable>
                    </View>
                    <View style={{ flex: 1 , alignItems: "center", justifyContent: "center", maxWidth: 90 }}>
                        <Text>{style}</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Pressable onPress={() => {
                            const currentIndex = styles.indexOf(style);
                            const nextIndex = (currentIndex + 1) % styles.length;
                            setStyle(styles[nextIndex]);
                        }} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>→</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={{ margin: 20 }}>
                <Button title="Search" onPress={() => {}} />
            </View>
        </View>
    );
}