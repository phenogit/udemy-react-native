import { TouchableOpacity, Text, View, Image } from "react-native";
import { style } from "./ProfileCard.style";

export function ProfileCard() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View>
          <Image
            style={style.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={style.texts}>
          <Text style={style.name}>Pheno the Future</Text>
          <Text>Hi, I am looking to branch out very soon!</Text>
        </View>
      </View>
      <View style={style.social}></View>
    </View>
  );
}
