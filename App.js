import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//  main screens
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Home</Text>
    </View>
  )
}

const Feed = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Feed</Text>
    </View>
  )
}

const Catalog = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Catalog</Text>
    </View>
  )
}

const Account = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Account</Text>
    </View>
  )
}

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Feed" component={Feed}/>
      <Tab.Screen name="Catalog" component={Catalog}/>
      <Tab.Screen name="Account" component={Account}/>
    </Tab.Navigator>
  )
}

// onboarding screens
const Stack = createStackNavigator();

const SignIn = () => {

  const nav = useNavigation();

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign in screen</Text>
      <Button
        title="Continue"
        onPress={() => nav.navigate('Main')}
      />
    </View>
  )
}

const SignUp = () => {

  const nav = useNavigation();

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign up screen</Text>
      <Button title="Sign In" onPress={() => nav.navigate('SignIn')} />
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Navigator> */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        {/* <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Main" component={MainNavigator} />
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
  }
});
``