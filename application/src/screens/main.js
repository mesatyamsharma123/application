import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { WebView } from "react-native-webview";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App ({navigation}) {
  const webviewRef = React.useRef(null);
  function webViewgoback() {
    if (webviewRef.current) webviewRef.current.goBack();
  }

  function webViewNext() {
    if (webviewRef.current) webviewRef.current.goForward();
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <WebView source={{ uri:"https://1430-2409-4081-8495-9890-b089-f5fa-6e-475b.ngrok-free.app/ " }} ref={webviewRef} />
      </View>
      <View style={styles.tabBarContainer}>
        <TouchableOpacity onPress={webViewgoback}>
          <Text style={{ color: "green" }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={
          () => { navigation.navigate('Web3') }
      }>
          <Text style={{ color: "green" }}>Exit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={webViewNext}>
          <Text style={{ color: "green" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  tabBarContainer: {
    backgroundColor: "#fff",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
});