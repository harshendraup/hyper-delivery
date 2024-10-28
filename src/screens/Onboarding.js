import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>Onboarding</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("TabNavigator")}> 
            <Text>Go to Dashboard</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({})