import { styles } from "./TodoCard.style";
import { Text, Image, TouchableOpacity } from "react-native";
import checkIcon from "../../assets/check.png";

export function TodoCard({ todo }) {
  return (
    <TouchableOpacity style={styles.card}>
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
