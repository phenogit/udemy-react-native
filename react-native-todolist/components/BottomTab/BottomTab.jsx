import { styles } from "./BottomTab.style";
import { Text, TouchableOpacity, View } from "react-native";

export function BottomTab({ selectedTabName, onPress, todoList }) {
  const countByStatus = todoList.reduce(
    (todoCounts, todo) => {
      if (todo.isComplete) {
        todoCounts.done += 1;
      } else {
        todoCounts.inProgress += 1;
      }
      return todoCounts;
    },
    {
      all: todoList.length,
      inProgress: 0,
      done: 0,
    }
  );

  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: selectedTabName === tabName ? "#2F76E5" : "black",
    };
  }

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => onPress("all")} style={styles.tabItem}>
        <Text style={getTextStyle("all")}>All ({countByStatus.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPress("inProgress")}
        style={styles.tabItem}
      >
        <Text style={getTextStyle("inProgress")}>
          In progress ({countByStatus.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")} style={styles.tabItem}>
        <Text style={getTextStyle("done")}>Done ({countByStatus.done})</Text>
      </TouchableOpacity>
    </View>
  );
}
