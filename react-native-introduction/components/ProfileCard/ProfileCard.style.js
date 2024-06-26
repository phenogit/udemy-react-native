import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 2,
    borderRadius: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  texts: {
    flex: 1,
    paddingLeft: 15,
  },
  header: {
    padding: 20,
    flexDirection: "row",
  },
  social: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#eee",
  },
});
