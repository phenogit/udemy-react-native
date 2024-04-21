import { styles } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ImageBackground } from "react-native";
import hotBackground from "./assets/hot.png";
import { Input } from "./components/Input/Input";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { useState } from "react";
import {
  UNITS,
  convertTemperatureTo,
  getOppositeUnit,
} from "./utils/temperature";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function App() {
  const [temperatureInput, setTemperatureInput] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(currentUnit);

  function getConvertedTemperature() {
    if (isNaN(temperatureInput)) {
      return "Invalid input";
    } else {
      return convertTemperatureTo(temperatureInput, oppositeUnit).toFixed(2);
    }
  }

  return (
    <ImageBackground source={hotBackground} style={styles.backgroundImage}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <View style={styles.workspace}>
            <TemperatureDisplay
              temperature={getConvertedTemperature()}
              unit={oppositeUnit}
            />
            <Input
              defaultValue={temperatureInput}
              onChange={setTemperatureInput}
              unit={currentUnit}
            />
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
