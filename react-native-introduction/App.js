import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
  Platform,
} from "react-native";
import { Profile, ProfileCard } from "./components/ProfileCard/ProfileCard";
import { AgeCounter } from "./components/AgeCounter/AgeCounter";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";
import { useState } from "react";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        {Platform.OS === "android" && <Text>Hi on Android</Text>}
        {Platform.OS === "ios" && <Text>Hi on iOS</Text>}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
