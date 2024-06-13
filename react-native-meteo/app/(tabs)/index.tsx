import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import backgroundImage from "@/assets/images/background.png";
import { useEffect, useState } from 'react';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MeteoAPI } from '@/api/meteo';
import { useFonts } from 'expo-font';


export default function HomeScreen() {
  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
  const [weather, setWeather] = useState();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("@/assets/fonts/Alata-Regular.ttf"),
  });

  console.log(`isFontLoaded ${isFontLoaded}`);

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates)
    }
  }, [coordinates]);

  async function fetchWeatherByCoords(coords: any) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function getUserCoordinates() {
    const {status} = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({lat: location.coords.latitude, lng: location.coords.longitude});
    } else {
      console.log("Permission denied");
      setCoordinates({lat: 48.85, lng: 2.35});
    }
  }

  console.log(coordinates);
  console.log(weather);

  return (
    <ImageBackground source={backgroundImage} imageStyle={styles.image} style={styles.imageBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {isFontLoaded &&
          <>
          <View style={styles.meteo_basic}>
            <ThemedText style={styles.text}>Basic Weather info</ThemedText>
          </View>
          <View style={styles.searchbar_container}>
            <ThemedText style={styles.text}>SearchBar</ThemedText>
          </View>
          <View style={styles.meteo_advanced}>
            <ThemedText style={styles.text}>Advanced Weather info</ThemedText>
          </View>
          </>
          }
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    opacity: 0.75,
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    padding: 10
  },
  meteo_basic: {
    flex: 2,
  },
  searchbar_container: {
    flex: 2,
  },
  meteo_advanced: {
    flex: 1,
  },
});
