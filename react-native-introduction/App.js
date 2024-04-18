import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Profile, ProfileCard } from "./components/ProfileCard/ProfileCard";
import { AgeCounter } from "./components/AgeCounter/AgeCounter";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";
import { useState } from "react";

export default function App() {
  const [clickCount, setClickCount] = useState(0);

  function hello(name) {
    Alert.alert("Hello", `Hello, ${name}!`);
    setClickCount(clickCount + 1);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <ProfileCard
          firstName={"John"}
          lastName={"Huang"}
          age={42}
          isOpenToWork={true}
          onPressTitle={hello}
        />
        <Text style={{ fontSize: 20 }}>You clicked {clickCount} time(s).</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
