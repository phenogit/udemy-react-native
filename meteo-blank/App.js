import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import { s } from "./App.style";
import { Home } from "./pages/Home/Home";
import backgroundImg from "./assets/background.png";

export default function App() {
  const [coordinates, setCoordinates] = useState(null);
  useEffect(() => {
    getUserCoordinates();
  }, []);

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({
        lat: "48.85",
        lng: "2.35",
      });
    }
  }

  console.log("coordinates", coordinates);

  return (
    <ImageBackground
      imageStyle={s.img}
      style={s.img_background}
      source={backgroundImg}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
