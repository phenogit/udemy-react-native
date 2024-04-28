import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { styles } from "./App.style";
import { Header } from "./components/Header/Header";
import { TodoCard } from "./components/TodoCard/TodoCard";

const TODO_LIST = [
  { id: 1, title: "Buy milk", isComplete: true },
  { id: 2, title: "Walk the dog", isComplete: false },
  { id: 3, title: "Go to the gym", isComplete: false },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.app}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <TodoCard todo={TODO_LIST[0]} />
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
