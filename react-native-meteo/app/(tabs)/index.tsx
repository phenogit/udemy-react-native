import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import backgroundImage from "@/assets/images/background.png";


export default function HomeScreen() {
  return (
    <ImageBackground source={backgroundImage} imageStyle={styles.image} style={styles.imageBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.meteo_basic}>
            <ThemedText style={styles.text}>Basic Weather info</ThemedText>
          </View>
          <View style={styles.searchbar_container}>
            <ThemedText style={styles.text}>SearchBar</ThemedText>
          </View>
          <View style={styles.meteo_advanced}>
            <ThemedText style={styles.text}>Advanced Weather info</ThemedText>
          </View>
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
