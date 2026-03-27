import { Text, View } from "react-native";

export default function Modal() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "lightblue" }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Create a new game</Text>
            {/* Form fields for game name and genre would go here */}
        </View>
    );
}