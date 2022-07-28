import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// onboarding screens
const Stack = createStackNavigator();

const SignIn = () => {

  const nav = useNavigation();

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign in screen</Text>
      <Button 
        title="Sign Up"
        onPress={() => nav.navigate('SignUp')}
      />
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
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
      </Stack.Navigator>
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