import { styles } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, ImageBackground } from "react-native";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./components/Input/Input";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { useEffect, useState } from "react";
import {
  convertTemperatureTo,
  getOppositeUnit,
  isIceTemperature,
} from "./utils/temperature";
import { ConvertButton } from "./components/ConvertButton/ConvertButton";

export default function App() {
  const [temperatureInput, setTemperatureInput] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [background, setBackground] = useState(hotBackground);
  const oppositeUnit = getOppositeUnit(currentUnit);
  useEffect(() => {
    // Change background based on temperature and unit using isIceTemperature
    const isCold = isIceTemperature(temperatureInput, currentUnit);
    setBackground(isCold ? coldBackground : hotBackground);
  }, [temperatureInput, currentUnit]);

  function getConvertedTemperature() {
    if (isNaN(temperatureInput)) {
      return "Invalid input";
    } else {
      return convertTemperatureTo(temperatureInput, oppositeUnit).toFixed(2);
    }
  }

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
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
            <ConvertButton
              onPress={() => setCurrentUnit(oppositeUnit)}
              unit={currentUnit}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
