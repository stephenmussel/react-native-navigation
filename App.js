import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// onboarding screens
const Stack = createStackNavigator();

const SignIn = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign in screen</Text>
    </View>
  )
}

const SignUp = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign up screen</Text>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <View style={styles.layout}>
        <Text style={styles.title}>Hello Again</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
``