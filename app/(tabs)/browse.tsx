import { Pressable, Text, View } from "react-native";

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
                    <View style={{ flex: 1 , alignItems: "center", justifyContent: "center" }}>
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
                <Text>Time</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Type</Text>
            </View>
        </View>
    );
}