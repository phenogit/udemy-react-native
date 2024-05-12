import { StyleSheet, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ThemedText type="title">Home</ThemedText>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  
});
