import { Image, ScrollView, Text, View } from "react-native";

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
          height: 200,
          backgroundColor: "white",
        }}
      >
        <Text>Appli pour nos jeux de société, lorsem input text :
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat nisl tellus, ac accumsan turpis varius in. Phasellus dapibus molestie ornare. Cras scelerisque dolor eu mattis posuere. Mauris non nisi lectus. Nunc aliquam dolor non sem venenatis, non pulvinar ex porttitor. Quisque fermentum posuere mauris, nec pellentesque risus faucibus non. Aenean quis volutpat est, eget porta ante. Aliquam molestie quam orci, in convallis diam mollis vel. Proin velit metus, efficitur et tellus sit amet, vehicula volutpat magna. Vestibulum lorem risus, mattis id arcu id, maximus tempus massa.
Donec porttitor velit vel elementum ornare. Nam condimentum maximus fermentum. Morbi non purus vitae sem lacinia euismod ac ut purus. Curabitur lobortis tellus erat, a auctor nunc tempor eget. Phasellus sed dui tempus, convallis enim a, tristique turpis. Nulla at ligula aliquam, consectetur augue sit amet, vehicula lacus. Nunc consectetur tempus purus a vulputate.
Etiam commodo mi eu tortor commodo dapibus. Sed porttitor justo eget convallis suscipit. Suspendisse finibus odio quis tortor gravida, nec feugiat lorem lacinia. Nullam venenatis, metus sed malesuada semper, sem neque posuere dolor, quis tempor turpis quam sit amet eros. Nulla efficitur sollicitudin magna, id sollicitudin leo consectetur vitae. Fusce interdum molestie arcu, ac auctor augue fringilla sed. Nullam molestie sem a magna consectetur, et euismod ipsum vehicula. Sed pulvinar ipsum lacus, et auctor sapien mattis sit amet. Sed commodo ante in dolor luctus elementum. Phasellus nec porttitor nisl. Morbi mauris est, volutpat cursus convallis eget, pharetra vitae eros. Vestibulum auctor condimentum aliquam.
Nunc facilisis lorem et ipsum rhoncus, et volutpat magna feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed efficitur quam, et tempor arcu. Integer laoreet libero vel ligula tempor efficitur. Donec feugiat velit tincidunt, tristique eros nec, porta risus. In auctor urna eget ullamcorper pulvinar. Nulla elit metus, ultrices mollis turpis eu, laoreet tincidunt purus. Morbi consectetur blandit leo, et tempus leo pretium a. Aliquam erat volutpat. In vitae sodales turpis. Mauris maximus faucibus dui, quis egestas eros posuere sit amet. Quisque vulputate facilisis malesuada. Vivamus pharetra felis libero, quis tempus ris
Appli pour nos jeux de société, lorsem input text :
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat nisl tellus, ac accumsan turpis varius in. Phasellus dapibus molestie ornare. Cras scelerisque dolor eu mattis posuere. Mauris non nisi lectus. Nunc aliquam dolor non sem venenatis, non pulvinar ex porttitor. Quisque fermentum posuere mauris, nec pellentesque risus faucibus non. Aenean quis volutpat est, eget porta ante. Aliquam molestie quam orci, in convallis diam mollis vel. Proin velit metus, efficitur et tellus sit amet, vehicula volutpat magna. Vestibulum lorem risus, mattis id arcu id, maximus tempus massa.
Donec porttitor velit vel elementum ornare. Nam condimentum maximus fermentum. Morbi non purus vitae sem lacinia euismod ac ut purus. Curabitur lobortis tellus erat, a auctor nunc tempor eget. Phasellus sed dui tempus, convallis enim a, tristique turpis. Nulla at ligula aliquam, consectetur augue sit amet, vehicula lacus. Nunc consectetur tempus purus a vulputate.
Etiam commodo mi eu tortor commodo dapibus. Sed porttitor justo eget convallis suscipit. Suspendisse finibus odio quis tortor gravida, nec feugiat lorem lacinia. Nullam venenatis, metus sed malesuada semper, sem neque posuere dolor, quis tempor turpis quam sit amet eros. Nulla efficitur sollicitudin magna, id sollicitudin leo consectetur vitae. Fusce interdum molestie arcu, ac auctor augue fringilla sed. Nullam molestie sem a magna consectetur, et euismod ipsum vehicula. Sed pulvinar ipsum lacus, et auctor sapien mattis sit amet. Sed commodo ante in dolor luctus elementum. Phasellus nec porttitor nisl. Morbi mauris est, volutpat cursus convallis eget, pharetra vitae eros. Vestibulum auctor condimentum aliquam.
Nunc facilisis lorem et ipsum rhoncus, et volutpat magna feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed efficitur quam, et tempor arcu. Integer laoreet libero vel ligula tempor efficitur. Donec feugiat velit tincidunt, tristique eros nec, porta risus. In auctor urna eget ullamcorper pulvinar. Nulla elit metus, ultrices mollis turpis eu, laoreet tincidunt purus. Morbi consectetur blandit leo, et tempus leo pretium a. Aliquam erat volutpat. In vitae sodales turpis. Mauris maximus faucibus dui, quis egestas eros posuere sit amet. Quisque vulputate facilisis malesuada. Vivamus pharetra felis libero, quis tempus ris
        </Text>
        <Image source={logo} style={{ width: 100, height: 100 }} />
      </ScrollView>
    </View>
  );
}
