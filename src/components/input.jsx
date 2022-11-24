import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Input({placeholder, secureTextEntry}) {
  return (
    <TextInput style={stytes.Input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        />
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