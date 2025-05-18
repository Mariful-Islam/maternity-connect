import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Survey1 = () => {
  return (
    <View>
      <View>
        <Text className='text-2xl font-bold'>Avater select</Text>
      </View>

      <View className='mt-6 flex items-center justify-center'>
        <Image source={require('@/assets/images/saad.jpg')} style={{height: 100, width: 100, borderRadius: 20}}/>
        

        <Text>Mariful Islam Saad</Text>
      
      </View>


      <View className='mt-6'>
        <View>
          {/* <Image source={}/> */}
        </View>
      </View>
    </View>
  )
}

export default Survey1

const styles = StyleSheet.create({})