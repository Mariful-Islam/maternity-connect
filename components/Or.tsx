import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";


const dimension = Dimensions.get('window')


const Or = () => {
  return (
    <View className="flex flex-row items-center gap-2 justify-center w-full mt-8">
      <View
        className="h-[1px] bg-gray-400"
        style={{ width: dimension.width / 2.6 }}
      ></View>
      <View className="">
        <Text className="text-gray-400">or</Text>
      </View>
      <View
        className="h-[1px] bg-gray-400"
        style={{ width: dimension.width / 2.6 }}
      ></View>
    </View>
  );
};

export default Or;

const styles = StyleSheet.create({});
