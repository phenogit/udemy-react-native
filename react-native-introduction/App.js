import { StyleSheet, Text, View, Image } from "react-native";
import { Profile, ProfileCard } from "./components/ProfileCard/ProfileCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <ProfileCard
          firstName={"Pheno"}
          lastName={"Future"}
          age={60}
          isOpenToWork={true}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
