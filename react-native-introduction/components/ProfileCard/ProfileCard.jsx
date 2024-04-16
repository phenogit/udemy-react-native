import { TouchableOpacity, Text, View, Image } from "react-native";
import { style } from "./ProfileCard.style";
import { FontAwesome } from "@expo/vector-icons";

export function ProfileCard({
  firstName,
  lastName,
  age,
  isOpenToWork,
  car,
  sayHello,
  children,
  image,
}) {
  function yell() {
    return "I'm yelling!";
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View>
          <Image
            style={style.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
          {image}
        </View>
        <View style={style.texts}>
          {children}
          <Text style={style.name}>
            {firstName} {lastName}
          </Text>
          <Text>Hi, I am {age} and looking to branch out very soon!</Text>
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
