import { StyleSheet, Text, View, StatusBar } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Make the status bar translucent */}
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <RegistrationScreen />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});