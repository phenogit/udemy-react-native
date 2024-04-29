import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView } from "react-native";
import { styles } from "./App.style";
import { Header } from "./components/Header/Header";
import { TodoCard } from "./components/TodoCard/TodoCard";
import { useState } from "react";

const TODO_LIST = [
  { id: 1, title: "Buy milk", isComplete: true },
  { id: 2, title: "Walk the dog", isComplete: false },
  { id: 3, title: "Go to the gym", isComplete: false },
  { id: 4, title: "Buy milk", isComplete: true },
  { id: 5, title: "Walk the dog", isComplete: false },
  { id: 6, title: "Go to the gym", isComplete: false },
  { id: 7, title: "Buy milk", isComplete: true },
  { id: 8, title: "Walk the dog", isComplete: false },
  { id: 9, title: "Go to the gym", isComplete: false },
];

export default function App() {
  const [todoList, setTodoList] = useState(TODO_LIST);

  function renderTodoList() {
    return todoList.map((todo) => (
      <View key={todo.id} style={styles.cardItem}>
        <TodoCard todo={todo} />
      </View>
    ));
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.app}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <ScrollView>{renderTodoList()}</ScrollView>
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
