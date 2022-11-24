import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/signin';
import Home from './src/screens/home';
import Create from './src/screens/create';
import Edit from './src/screens/edit';
import SignUp from './src/screens/signup';

const Stack = createNativeStackNavigator();

const appTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: "#fff"
  }
  
}

export default function App() {
  const user = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user? 
        (<>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Create' component={Create}/>
        <Stack.Screen name='Edit' component={Edit}/>
        </>):(
          <>
          <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
          <Stack.Screen name='SignUp' component={SignUp} />
          </>
        )}
        
        
        
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
