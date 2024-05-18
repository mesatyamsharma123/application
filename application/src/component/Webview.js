import React from 'react';
import { View, Text } from 'react-native';
import { head1 } from '../common/formcss';
import { button1 } from '../common/button';

const Webview = (navigation) => {
  return (
    <View style={styles.container}>
      <Text style={head1}> This Web View </Text>
      <Text style={button1}onPress={navigation.navigate('login')}>Logout</Text>
    </View>
  );
}

export default Webview;
