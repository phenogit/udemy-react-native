import { Text } from "react-native";
import { styles } from "./MeteoText.style";

export function MeteoText({ children, style = {}, ...restProps }) {
  return (
    <Text style={[styles.text, style]} {...restProps}>
      {children}
    </Text>
  );
}
