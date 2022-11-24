import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../components/button'

export default function SignIn({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image source={require("../../assets/login.png")}
      style={{alignSelf: 'center', width: "100%", height: 300}}
      />
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 10}}>Never Forget Your Password</Text>
      <View style={{paddingHorizontal: 16, paddingVertical: 25}}>
        <TextInput style={stytes.Input}
        placeholder='Enter Your Email'
        />
        <TextInput style={stytes.Input}
        placeholder='Enter Your Passwprd'
        secureTextEntry
        />
        
      </View>
      <View style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20
      }}>
        <Button title={"Login"} customStyles={{alignSelf:'center', marginBottom: 80,}}/>
        <Pressable onPress={()=>{navigation.navigate('SignUp')}}>
          <Text style={{ fontSize: 16}}>Don't Have an Account?{" "} <Text style={{color: "green", fontWeight: 'bold', fontSize: 16}}>Sign Up</Text></Text>
        </Pressable>
      </View>
    </SafeAreaView>
    
  )
}

const stytes = StyleSheet.create({
  Input:{
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  }
})