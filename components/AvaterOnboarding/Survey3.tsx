import Input from "@/components/Input";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Survey3 = () => {
  return (
    <View>
      <View>
        <Text className="text-center font-bold text-xl text-gray-500">
          Thanks for sharing
        </Text>
        <Text className="text-center font-bold text-md text-gray-500 mt-2">
          Lets take a moment to check in
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
          <Text className="text-xl font-bold text-gray-800">Mode</Text>

          <View className="mt-2">
            <Input placeholder="Mode" />
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-xl font-bold text-gray-800">How did you sleep?</Text>

          <View className="mt-2">
            <Input placeholder="How did you sleep?" />
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-xl font-bold text-gray-800">Energy level (1-5)</Text>

          <View className="mt-2">
            <Input placeholder="Energy level (1-5)" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Survey3;

const styles = StyleSheet.create({});
