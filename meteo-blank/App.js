import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";

import { s } from "./App.style";
import { Home } from "./pages/Home/Home";
import backgroundImg from "./assets/background.png";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {}, []);

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
