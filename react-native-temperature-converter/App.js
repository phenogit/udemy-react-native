import { styles } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ImageBackground } from "react-native";
import hotBackground from "./assets/hot.png";
import { Input } from "./components/Input/Input";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { useState } from "react";

export default function App() {
  const [temperatureInput, setTemperatureInput] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");

  return (
    <ImageBackground source={hotBackground} style={styles.backgroundImage}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <View style={styles.workspace}>
            <TemperatureDisplay
              temperature={temperatureInput}
              currentUnit={currentUnit}
            />
            <Input
              defaultValue={30}
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
