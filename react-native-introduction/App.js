import { StyleSheet, Text, View } from "react-native";
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
          age={42}
          isOpenToWork={true}
          car={{ brand: "Benz", isAvailable: false }}
          sayHello={() => console.log("Hello")}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
