import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { head1, s3, s4 } from '../common/formcss'
import { button1, button2 } from '../common/button'
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import b from '../../assets/b.png'
const Web3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
       
        <View style={s4}>
        <Image style={styles.patternbg} source = {b}/>
        <Text style={button1}
        onPress={
            () => { navigation.navigate('Camera') }
        }
    > Convert Image to Text</Text>
   

            <Text style={button1}
                onPress={
                    () => { navigation.navigate('main') }
                }
            >Convert Image to Audio</Text>
            <Text style={button1}
                onPress={
                    () => { navigation.navigate('main') }
                }
            >Upload Image to Extract</Text>
            </View>
<View style={s3}>

<Text style={button2}
onPress={
    () => { navigation.navigate('welcome') }
}
>Logout</Text></View>
          

          
        </View>
    )
}

export default Web3

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    patternbg: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      },
})