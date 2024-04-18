import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import { Profile, ProfileCard } from "./components/ProfileCard/ProfileCard";
import { AgeCounter } from "./components/AgeCounter/AgeCounter";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";
import { useState } from "react";

export default function App() {
  function goToSocialMedia(socialMedia) {
    let url = "";
    switch (socialMedia) {
      case "twitter":
        url = "https://twitter.com/johnhuang_dev";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/johnhuangdev/";
        break;
      case "github":
        url = "https://github.com/phenogit";
      default:
        break;
    }
    Linking.openURL(url);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <ProfileCard
          onPressSocialMediaIcon={goToSocialMedia}
          firstName={"John"}
          lastName={"Huang"}
          age={42}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
