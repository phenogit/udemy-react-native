import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView } from "react-native";
import { styles } from "./App.style";
import { Header } from "./components/Header/Header";
import { TodoCard } from "./components/TodoCard/TodoCard";
import { BottomTab } from "./components/BottomTab/BottomTab";
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
  const [selectedTabName, setSelectedTabName] = useState("inProgress");

  function getFilteredTodoList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => !todo.isComplete);
      case "done":
        return todoList.filter((todo) => todo.isComplete);
      default:
        return todoList;
    }
  }

  function renderTodoList() {
    return getFilteredTodoList().map((todo) => (
      <View key={todo.id} style={styles.cardItem}>
        <TodoCard todo={todo} onPress={updateTodo} />
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = {
      ...todo,
      isComplete: !todo.isComplete,
    };
    let updatedTodoList = [...todoList];
    const indexToUpdate = updatedTodoList.findIndex((t) => t.id === todo.id);
    updatedTodoList[indexToUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
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
          <BottomTab
            todoList={todoList}
            onPress={setSelectedTabName}
            selectedTabName={selectedTabName}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
