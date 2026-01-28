import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import { RootStackParamList } from './types/navigation'; 

const Stack = createNativeStackNavigator<RootStackParamList>(); 

export default function App() {
  return ( 
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: "MD Nav Demo" }} /> 
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerTitle: "MD Nav Demo" }} />
      </Stack.Navigator> 
      <StatusBar style="auto" /> 
    </NavigationContainer> 
  ); 
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
