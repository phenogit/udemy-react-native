import { TouchableOpacity, Text, View, Image } from "react-native";
import { style } from "./ProfileCard.style";
import { FontAwesome } from "@expo/vector-icons";

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
      <View style={style.social}>
        <TouchableOpacity style={style.socialButton}>
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialButton}>
          <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialButton}>
          <FontAwesome name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
