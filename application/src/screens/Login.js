import React from 'react';
import {StyleSheet, View, Text,Image, TextInput } from 'react-native';
import logo from '../../assets/kk.png';
import {button1} from '../common/button';
import {useState} from 'react';
import { errormessage,formgroup, head1, head2, input, label, link, link2 } from '../common/formcss';
import b from '../../assets/b.png'
const Login = ({navigation}) => {
  const [fdata, setFdata] = useState({
    email: '',
    password: '',
})
const [errormeg, setErrormsg] = useState(null);

const Sendtobackend = () => {
  // console.log(fdata);
  if (fdata.email == '' || fdata.password == '') {
      setErrormsg('All fields are required');
      return;
  }
  else {
       fetch('https://b1d2-103-137-174-50.ngrok-free.app/signin', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
         body: JSON.stringify(fdata)
     })
        .then(res => res.json()).then(
            data => {
                 //console.log(data);
                 if (data.error) {
                     setErrormsg(data.error);
                  }
                else {
                      alert('login successfully');
                      navigation.navigate('Web3');
                 }
             }
          ).catch (err => {
            console.log(err);
          })
   }
 }

  return (
    <View style={styles.container}>

   <View style={styles.container1}>
   <Image style={styles.patternbg} source = {b}/>

<View style={styles.s1}>


<Image style={styles.logo} source={logo}/>
</View>

<View style={styles.s2}>
<Text style={head1}>Login</Text>
<Text style={head2}> Sign in to continue </Text>
{
  errormeg ? <Text style={errormessage}>{errormeg}</Text> : null
}
<View style={formgroup}>
<Text style={label }>Email </Text>
<TextInput style={input}
placeholder="Enter your email"

onPressIn={() => setErrormsg(null)}
onChangeText={(text) => setFdata({ ...fdata, email: text })}
/>
</View>
<View style={formgroup}>
<Text style={label }>Password </Text>
<TextInput style={input}
placeholder="Enter your password"

   secureTextEntry={true}

  onChangeText={(text) => setFdata({ ...fdata, password: text })}
 securesIn={() => setErrormsg(null)}

/>

</View>
<View style={styles.fp}>
<Text style={link}> Forgot Password?</Text>
</View>
<Text style={button1} onPress={() => Sendtobackend()}
 >Login </Text>
<Text style={link2} onPress={()=>navigation.navigate('signup')}>Don't have an account? Create a new account.
                 
</Text>
</View>



  </View>
</View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      display: 'flex',
  },
  container1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
},
s1: {
  display: 'flex',
  justifyContent: 'center',

  alignItems: 'center',
  height: '40%',
},
s2: {
  display: 'flex',
  backgroundColor: '#b6ccd7',
  width: '100%',
  height: '60%',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  padding: 20,
},
 logo: {
    height: '80%',
    resizeMode: 'contain',
    marginBottom: 10,
},
formgroup: {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginVertical: 10,
},
label: {
  fontSize: 17,
  color: '#000',
  marginLeft: 10,
  marginBottom: 5,
},
input: {
  backgroundColor: "#FFB0CC",
  fontSize:12,
  borderRadius: 20,
  padding: 10,
 
},
fp: {
  display: 'flex',
  alignItems: 'flex-end',
  marginHorizontal: 10,
  marginVertical: 5,
},
patternbg: {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
},
})