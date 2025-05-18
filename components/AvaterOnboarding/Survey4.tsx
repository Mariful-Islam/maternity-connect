import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from '../Input'

const Survey4 = () => {
  return (
    <View>
      <View>
        <Text className="text-center font-bold text-xl text-gray-500">
          Let&apos;s create your space
        </Text>
        <Text className="text-center font-bold text-md text-gray-500 mt-2">
          A few basics to make this your
        </Text>
      </View>

      <View className="mt-10 border border-gray-300 rounded-lg p-5 flex items-center">
        <Text className="text-xl font-bold text-gray-700">
          What name should I call you by?{" "}
        </Text>
      </View>

      <View className="mt-12">
        <View>
          <Text className="text-xl font-bold text-gray-800">Name</Text>

          <View className="mt-2">
            <Input placeholder="Name" />
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-xl font-bold text-gray-800">Your age</Text>

          <View className="mt-2">
            <Input placeholder="Your age" />
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-xl font-bold text-gray-800">Country or region</Text>

          <View className="mt-2">
            <Input placeholder="Country or region" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Survey4

const styles = StyleSheet.create({})