import { Image, Text, View } from "react-native";

const logo = require("../assets/images/icon.png");

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "plum",
      }}
    >
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Appli pour nos jeux de société</Text>
        <Image source={logo} style={{ width: 100, height: 100 }} />
      </View>
    </View>
  );
}
