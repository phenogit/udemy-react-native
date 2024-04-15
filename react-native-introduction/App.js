import { StyleSheet, Text, View } from "react-native";
import { Profile } from "./components/Profile";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={style.title}>Hello, World!</Text>
        <View style={style.square}>
          <Text style={style.innerText}>Super</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
