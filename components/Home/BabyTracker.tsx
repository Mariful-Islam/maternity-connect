import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BabyTracker = () => {
  return (
    <View className='w-full py-4 border border-gray-200 rounded-xl px-4 '>
        <Image source={require('@/assets/images/saad.jpg')} style={{height: 300, objectFit: 'cover', borderRadius: 12 }}/>

        <View className='flex flex-col items-start justify-center mt-4'>
          <Text className='text-black text-lg font-bold'>BabyTracker</Text>
          <Text className='text-gray-500 text-md'>Track your baby&apos;s growth and health</Text>
        </View>
      </View>
  )
}

export default BabyTracker

const styles = StyleSheet.create({})