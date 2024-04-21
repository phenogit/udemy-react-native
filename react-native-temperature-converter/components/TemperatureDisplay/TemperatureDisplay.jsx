import { Text, View } from "react-native";
import { styles } from "./TemperatureDisplay.style";

export function TemperatureDisplay({ temperature, unit }) {
  return (
    <View>
      <Text style={styles.text}>
        {temperature} {unit}
      </Text>
    </View>
  );
}
