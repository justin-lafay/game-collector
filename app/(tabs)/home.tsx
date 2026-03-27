import { Link, router } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "plum",
        padding: 20,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
          <Link href="/about" style={{ color: "blue", padding: 10 }}>
            <Text>About</Text>
          </Link>
          <View style={{ marginTop: 20 }}>
            <Button onPress={() => router.push("/modal")} title="Create game" />
          </View>
        </View>
      </ScrollView>
    </View> 
  );
}