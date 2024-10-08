import { StyleSheet } from "react-native";

const BACK_BTN_WIDTH = 30;

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  back_btn: {
    width: BACK_BTN_WIDTH,
  },
  header_texts: {
    flex: 1,
    marginRight: BACK_BTN_WIDTH,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
  },
});
