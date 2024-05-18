
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Web3eb from './src/screens/Web3';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Webview from './src/component/Webview';
import main from './src/screens/main';

import useCamera from './src/screens/main';
import Camera from './src/screens/Camera';

const Stack = createNativeStackNavigator();



export default function App() {
   
    return (

      
     
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="welcome" component={Welcome} 
      options={{
        headerShown:false
      }}/>
      <Stack.Screen name="login" component={Login} options={{
        headerShown:false
      }} />
      <Stack.Screen name="signup" component={Signup}  options={{
        headerShown:false
      }}/>
      <Stack.Screen name="Web3" component={Web3eb}  options={{
        headerShown:false
      }}/>
      <Stack.Screen name="main" component={main}  options={{
        headerShown:false
      }}/>
      <Stack.Screen name="Camera" component={Camera}  options={{
        headerShown:false
      }}/>
      <Stack.Screen name="useCamera" component={useCamera}  options={{
        headerShown:false
      }}/>
    
      
      
    
      
      

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
