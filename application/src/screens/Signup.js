import React from 'react'
import {StyleSheet,TouchableOpacity, View, ScrollView,Text,Image, TextInput } from 'react-native';
import logo from '../../assets/k.jpg';
import {button1, button3} from '../common/button';
import { errormessage,formgroup, formgroup1, head1, head2, input, label, link, link2 } from '../common/formcss';
import {useState} from 'react';
import axios from 'axios'
import b from '../../assets/b.png'

const Signup = ({navigation}) => {


  const [fdata,setFdata]=useState({
name:'',
email:'',
password:'',
cpassword:'',
dob:'',

  })
  const [errormeg,setErrormsg]=useState(null);

const Sendtobackend= async ()=>{
console.log(fdata);

if (fdata.name == '' ||
fdata.email == '' ||
fdata.password == '' ||
fdata.cpassword == '' ||
fdata.dob == '' 
) {
setErrormsg('All fields are required');
return;
}
else{
  if(fdata.password!= fdata.cpassword){
    setErrormsg('Password and confirm Password must be same');
    return ;
  }
  else {
    fetch('https://b1d2-103-137-174-50.ngrok-free.app/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fdata)
    }).then(res =>res.json()).then(
      data=>{
        console.log(data);
       if(data.error){
        setErrormsg(data.error);
       }
       else{
        alert('Account Created Successfully');
        navigation.navigate('login');
       }
      }
    )
}
}

}
  return (
    <View style={styles.container}>
    <Image style={styles.patternbg} source = {b}/>
    <View style={styles.container1}>
 <View style={styles.s1}>
 
 </View>
 
 <ScrollView style={styles.s2}>
 <Text style={head1}>Craete a new account</Text>
 <Text style={link2} onPress={()=>navigation.navigate('login')}>Already registered ?&nbsp;
 <Text style={link} onPress={()=>navigation.navigate('login')}>Login here</Text>
 </Text>
 {
  errormeg ? <Text style={errormessage}>{errormeg}</Text> : null
}


 <View style={formgroup1}>
                        <Text style={label}>Name</Text>
                        <TextInput style={input} placeholder="Enter your Name" 
                        onPressIn={()=> setErrormsg(null)}
                        onChangeText={(text)=> setFdata({...fdata,name:text})}
                           
                        />
                    </View>
                    <View style={formgroup1}>
                        <Text style={label}>Email</Text>
                        <TextInput style={input} placeholder="Enter your Email"
                       onPressIn={()=> setErrormsg(null)}
                        onChangeText={(text)=> setFdata({...fdata,email:text})}  

                        />
                    </View>
                    <View style={formgroup1}>
                        <Text style={label}>DOB</Text>
                        <TextInput style={input} placeholder="Enter your Date of Birth"
                        onPressIn={()=> setErrormsg(null)}
                        onChangeText={(text)=> setFdata({...fdata,dob:text})}
                        />
                    </View>
                    <View style={formgroup1}>
                        <Text style={label}>Password</Text>
                        <TextInput style={input} placeholder="Enter your Password"
                      secureTextEntry={true}
                      onPressIn={()=> setErrormsg(null)}
                        onChangeText={(text)=> setFdata({...fdata,password:text})}
                        />
                    </View>

                    <View style={formgroup1}>
                        <Text style={label}>Confirm Password</Text>
                        <TextInput style={input} placeholder="Confirm your Password"
                        secureTextEntry={true}
                        onPressIn={()=> setErrormsg(null)}
                        onChangeText={(text)=> setFdata({...fdata,cpassword:text})}
                        />
                    </View>

                    <TouchableOpacity 
                    onPress={()=>{
                      Sendtobackend();
                     }}
                    >
 <Text style={button3}
 
 
 >Sign Up</Text>
 </TouchableOpacity>
 </ScrollView>
 
 
 
   </View>
 </View>
  );
}

export default Signup;

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
  backgroundColor: 'white',
  alignItems: 'center',
  height: '20%',
},
s2: {
  display: 'flex',
  backgroundColor: '#b6ccd7',
  width: '100%',
  height: '90%',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  padding: 20,
},
 logo: {
    height: '200',
    resizeMode: 'contain',
    marginBottom: 50,
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
