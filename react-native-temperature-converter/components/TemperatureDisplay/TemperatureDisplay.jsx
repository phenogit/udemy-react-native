import { Text, View } from "react-native";
import { styles } from "./TemperatureDisplay.style";

export function TemperatureDisplay({ temperature, currentUnit }) {
  return (
    <View>
      <Text style={styles.text}>
        {temperature} {currentUnit}
      </Text>
    </View>
  );
}
