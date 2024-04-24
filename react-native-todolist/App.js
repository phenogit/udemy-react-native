import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Todo List!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
