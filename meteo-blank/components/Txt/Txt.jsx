import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";

const SAMSUNG_FOLD_RATIO = 0.0012107933579335792;

export function Txt({ children, style, ...restProps }) {
  const fontSize = style?.fontSize || s.txt.fontSize;
  const { height } = useWindowDimensions();
  console.log("height", height);
  console.log(Math.round(fontSize * 0.0012107933579335792 * height));

  return (
    <Text
      style={[
        s.txt,
        style,
        {
          fontSize: Math.round(fontSize * SAMSUNG_FOLD_RATIO * height),
        },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
}
