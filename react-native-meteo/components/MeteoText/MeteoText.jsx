import { Text } from "react-native";
import { styles } from "./MeteoText.style";

export function MeteoText({ children, ...restProps }) {
  return (
    <Text style={[styles.text]} {...restProps}>
      {children}
    </Text>
  );
}
