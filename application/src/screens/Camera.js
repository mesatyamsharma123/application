import React from "react";
import { View, Text } from "react-native";
import TakeImage from "./cameraAccess/camera";
const Camera = () => {
  return (
    <View style={{display: 'flex', width: '100%', height: '100%', justifyContent: 'center',alignItems: 'center'}}>
      
       <TakeImage />
    </View>
  );
};

export default Camera;
