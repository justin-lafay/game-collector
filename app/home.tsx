import { Image, ScrollView, View } from "react-native";

const logo = require("../assets/images/icon.png");

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
          <Image source={logo} style={{ width: 100, height: 100}} />
        </View>
      </ScrollView>
    </View>
  );
}