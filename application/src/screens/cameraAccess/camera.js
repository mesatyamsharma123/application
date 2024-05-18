import React from "react";
import b from '../../../assets/b.png';
import {
  View,
  Button,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import useCamera from "./useCamera";
import { button1 } from "../../common/button";
import { s3, s4 } from "../../common/formcss";
export default function TakeImage() {
  const { image, loading, takePicture, getImageDataURL } = useCamera();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Image style={styles.patternbg} source = {b}/>
      {loading ? (
        <View style={[styles.container, styles.horizontal]}>
       
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 350, height: 200 }}
            />
          )}


        


          <Text style={button1}
          onPress={takePicture}
            >Open Camera</Text>
       
          <Text style={button1}
          onPress={getImageDataURL}
            >Extract Image</Text>
          
            </View>
         
        
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  patternbg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
});
