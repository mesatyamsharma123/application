import React from 'react';
import {StyleSheet, View, Text,Image } from 'react-native';
import backgroundimage from '../../assets/kk.png'
import b from '../../assets/b.png'
import {button1} from '../common/button';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Image style={styles.patternbg} source = {b}/>
  <View style={styles.container1}>
  <Image style={styles.logo} source = {backgroundimage}/>
  <Text style={button1} onPress={()=>navigation.navigate('login')}>Login</Text>
  <Text style={button1}onPress={()=>navigation.navigate('signup')}>Sign Up</Text>

  </View>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    head: {
      fontSize: 30,
      color: '#fff',
  },
    container1: {
      display: 'flex',
 
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
  },
  patternbg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
},
  logo: {
    height: '20%',
    resizeMode: 'contain',
    marginBottom: 50,
}
});
