import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
  box1: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    alignSelf: "flex-start",
  },
  box2: { height: 100, width: 100, backgroundColor: "orange" },
  box3: { height: 100, width: 100, backgroundColor: "yellow" },
  text: {
    fontSize: 40,
    color: "black",
  },
});
