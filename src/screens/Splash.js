import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Splash</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Onboarding")}> 
        <Text>Go to Onboarding</Text>
      </TouchableOpacity>
  </View>
  )
}

export default Splash

const styles = StyleSheet.create({})