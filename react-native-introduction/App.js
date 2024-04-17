import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Profile, ProfileCard } from "./components/ProfileCard/ProfileCard";
import { AgeCounter } from "./components/AgeCounter/AgeCounter";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";
import { useState } from "react";

export default function App() {
  const [movie, setMovie] = useState("The Matrix");

  console.log(movie);
  function changeMovie() {
    setMovie("The Matrix Reloaded");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <TouchableOpacity onPress={changeMovie}>
          <Text style={style.text}>{movie}</Text>
        </TouchableOpacity>
        {/*<AgeCounter />*/}
        {/*<ProfileCard
          firstName={"Pheno"}
          lastName={"Future"}
          age={60}
          isOpenToWork={true}
  />*/}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
