import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from '../Input'

const Survey5 = () => {
  return (
    <View>
    <View>
      <Text className="text-center font-bold text-xl text-gray-500">
        Let&apos;s set your boundaries.
      </Text>
      <Text className="text-center font-bold text-md text-gray-500 mt-2">
        You choose what and when to share
      </Text>
    </View>

    <View className="mt-10 border border-gray-300 rounded-lg p-5 flex items-center">
      <Text className="text-xl font-bold text-gray-700">
        How are you feeling today??{" "}
      </Text>
      <Text className="mt-4">
        Emotionally, physically... how ever you want?
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

export default Survey5

const styles = StyleSheet.create({})