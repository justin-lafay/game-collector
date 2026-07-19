import { Button, Pressable, Text, View } from "react-native";

export default function Browse() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flex: 1, paddingVertical: 20 }}>
                        <Pressable style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>-</Text>
                        </Pressable>
                    </View>
                    <View style={{ flex: 1 , alignItems: "center", justifyContent: "center", maxWidth: 90 }}>
                        <Text>Players</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Pressable style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flex: 1, paddingVertical: 20 }}>
                        <Pressable style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>-</Text>
                        </Pressable>
                    </View>
                    <View style={{ flex: 1 , alignItems: "center", justifyContent: "center", maxWidth: 90 }}>
                        <Text>Time</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Pressable style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flex: 1, paddingVertical: 20 }}>
                        <Pressable style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
                            <Text>←</Text>
                        </Pressable>
                    </View>
                    <View style={{ flex: 1 , alignItems: "center", justifyContent: "center", maxWidth: 90 }}>
                        <Text>Style</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Pressable style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", marginHorizontal: 10, padding: 30, borderRadius: 5 }}>
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