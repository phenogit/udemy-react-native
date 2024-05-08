import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Alert, View, ScrollView } from "react-native";
import { styles } from "./App.style";
import { Header } from "./components/Header/Header";
import { TodoCard } from "./components/TodoCard/TodoCard";
import { BottomTab } from "./components/BottomTab/BottomTab";
import { AddButton } from "./components/AddButton/AddButton";
import { useState, useEffect } from "react";
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

/*
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
*/
const TODO_LIST = [];

let isFirstRender = true;
let isLoadUpdate = false;

export default function App() {
  const [todoList, setTodoList] = useState(TODO_LIST);
  const [selectedTabName, setSelectedTabName] = useState("inProgress");
  const [isAddTodoDialogVisible, setIsAddTodoDialogVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    loadTodoList();
  }, []);

  useEffect(() => {
    if (!isLoadUpdate) {
      if (!isFirstRender) {
        saveTodoList();
      } else {
        isFirstRender = false;
      }
    } else {
      isLoadUpdate = false;
    }
  }, [todoList]);

  async function loadTodoList() {
    console.log("Loading todo list...");
    try {
      const todoListString = await AsyncStorage.getItem("todoList");
      const parsedTodoList = JSON.parse(todoListString);
      isLoadUpdate = true;
      setTodoList(parsedTodoList || []);
    } catch (error) {
      alert(error);
    }
  }

  async function saveTodoList() {
    console.log("Saving todo list...");
    try {
      await AsyncStorage.setItem("todoList", JSON.stringify(todoList));
    } catch (error) {
      alert(error);
    }
  }

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
        <TodoCard todo={todo} onPress={updateTodo} onLongPress={deleteTodo} />
      </View>
    ));
  }

  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: inputValue,
      isComplete: false,
    };
    setTodoList([...todoList, newTodo]);
    setIsAddTodoDialogVisible(false);
    setInputValue("");
  }

  function deleteTodo(todo) {
    Alert.alert(
      "Delete todo",
      `Are you sure you want to delete "${todo.title}"?`,
      [
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setTodoList(todoList.filter((t) => t.id !== todo.id));
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
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

  function renderAddTodoDialog() {
    return (
      <Dialog.Container
        visible={isAddTodoDialogVisible}
        onBackdropPress={() => setIsAddTodoDialogVisible(false)}
      >
        <Dialog.Title>Add new todo</Dialog.Title>
        <Dialog.Description>
          Please enter the title of the todo.
        </Dialog.Description>
        <Dialog.Input onChangeText={setInputValue} placeholder="Build an app" />
        <Dialog.Button
          label="Cancel"
          color="grey"
          onPress={() => setIsAddTodoDialogVisible(false)}
        />
        <Dialog.Button
          disabled={inputValue.length === 0}
          label="Add"
          onPress={addTodo}
        />
      </Dialog.Container>
    );
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
        <AddButton onPress={() => setIsAddTodoDialogVisible(true)} />
        <View style={styles.footer}>
          <BottomTab
            todoList={todoList}
            onPress={setSelectedTabName}
            selectedTabName={selectedTabName}
          />
        </View>
        {renderAddTodoDialog()}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
