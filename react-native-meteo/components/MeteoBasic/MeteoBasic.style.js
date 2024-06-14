import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  interpretation: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temperature: {
    fontSize: 150,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "white",
  },
});
