import { Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { AgeDisplayer } from "../AgeDisplayer/AgeDisplayer";

export function AgeCounter() {
  const [age, setAge] = useState(60);
  const [fruit, setFruit] = useState("banana");

  function increaseAge() {
    setAge(age + 1);
  }

  function changeFruit() {
    setFruit("apple");
  }
  return (
    <>
      <AgeDisplayer age={age} />
      <TouchableOpacity
        style={{ backgroundColor: "#00A2FF" }}
        onPress={increaseAge}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Increment Age</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 40 }}>{fruit}</Text>
      <TouchableOpacity
        style={{ backgroundColor: "#00A2FF" }}
        onPress={changeFruit}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Increment Age</Text>
      </TouchableOpacity>
    </>
  );
}
