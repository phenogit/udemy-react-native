import { View, TextInput, Text } from "react-native";
import { styles } from "./Input.style";

export function Input({ defaultValue }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={3}
        placeholder="Type your temperature"
        defaultValue={defaultValue.toString()}
      ></TextInput>
      <Text style={styles.unit}>°C</Text>
    </View>
  );
}
