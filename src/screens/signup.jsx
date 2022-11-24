import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../components/button'
import Input from '../components/input'

const genderOptions = ["Male", "Female"];

export default function SignUp({navigation}) {
  const [gender, setGender] = useState(null);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 16, paddingVertical: 25}}>
        <Input placeholder='Enter Your Email'/>
        <Input style={stytes.Input}
        placeholder='Enter Your Passwprd'
        secureTextEntry
        />
        <Input style={stytes.Input}
        placeholder='Full Name'
        />
        <Input style={stytes.Input}
        placeholder='Age'
        />
        <View style={{marginVertical: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Select Your Gender</Text>
        </View>

        {
          genderOptions.map((option)=>{
            const selected = option === gender;
            return(
              <Pressable onPress={()=>{
                setGender(option)
              }} key={option} style={stytes.radioContainer}>
                <View style={[stytes.outerCircle, selected && stytes.selectedOuterCircle]}>
                  <View style={[stytes.innerCircle, selected && stytes.selectedInnerCircle]}></View>
                </View>
                <Text>{option}</Text>
              </Pressable>
            )
            
            })
        }

        

        {/* <Pressable style={stytes.radioContainer}>
          <View style={[stytes.outerCircle, selected && stytes.selectedOuterCircle]}>
            <View style={[stytes.innerCircle, selected && stytes.selectedInnerCircle]}></View>
          </View>
          <Text>Female</Text>
        </Pressable> */}
        
      </View>
      <View style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}>
        <Button title={"Submit"} customStyles={{alignSelf:'center', marginBottom: 80,}}/>
        <Pressable onPress={()=>{navigation.navigate("SignIn")}}>
          <Text style={{ fontSize: 16}}>Already Have an Account?{" "} <Text style={{color: "green", fontWeight: 'bold', fontSize: 16}}>Sign In</Text></Text>
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
  },
  radioContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  outerCircle:{
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle:{
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CFCFCF',
  },
  selectedOuterCircle:{
    borderColor: 'orange',
  },
  selectedInnerCircle:{
    backgroundColor: 'orange',
    borderColor: 'orange',
  }
})