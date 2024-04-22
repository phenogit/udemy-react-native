import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ConvertButton.style";

export function ConvertButton({ onPress, unit }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
