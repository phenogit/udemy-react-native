import { styles } from "./TodoCard.style";
import { Text, Image, TouchableOpacity } from "react-native";
import checkIcon from "../../assets/check.png";

export function TodoCard({ todo, onPress, onLongPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(todo)}
      onLongPress={() => onLongPress(todo)}
    >
      <Text
        style={[
          styles.title,
          todo.isComplete && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isComplete && <Image style={styles.image} source={checkIcon} />}
    </TouchableOpacity>
  );
}
