import { styles } from "./BottomTab.style";
import { Text, TouchableOpacity, View } from "react-native";

export function BottomTab({ selectedTabName, onPress }) {
  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: selectedTabName === tabName ? "#2F76E5" : "black",
    };
  }

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => onPress("all")} style={styles.tabItem}>
        <Text style={getTextStyle("all")}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPress("inProgress")}
        style={styles.tabItem}
      >
        <Text style={getTextStyle("inProgress")}>In progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")} style={styles.tabItem}>
        <Text style={getTextStyle("done")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
