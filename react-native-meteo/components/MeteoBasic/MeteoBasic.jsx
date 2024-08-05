import { View } from "react-native";
import { styles } from "./MeteoBasic.style";
import { MeteoText } from "../MeteoText/MeteoText";
import { Image } from "react-native";

export function MeteoBasic({ ...restProps }) {
  return (
    <>
      <View style={styles.clock}>
        <MeteoText>Clock</MeteoText>
      </View>
      <View style={styles.city}>
        <MeteoText>City</MeteoText>
      </View>
      <View style={styles.interpretation}>
        <MeteoText style={styles.interpretation_text}>Sunny</MeteoText>
      </View>
      <View style={styles.temperature_box}>
        <MeteoText style={styles.temperature}>3°</MeteoText>
        <Image style={styles.image} />
      </View>
    </>
  );
}
