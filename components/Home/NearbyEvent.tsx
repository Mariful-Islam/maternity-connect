import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";


const NearbyEvent = () => {
  return (
    <View className="w-full py-4 border border-gray-200 rounded-xl px-4 ">
      <Text className="text-[#DB61A9] font-bold text-xl">Nearby Event</Text>

      <View className="flex flex-row items-start mt-6">
        <View className="bg-[#DB61A9] p-2 rounded-full">
          <Ionicons name="location-outline" size={24} color="white" />
        </View>
        <View className="flex flex-col ml-4">
          <Text className="text-black font-bold text-lg">
            Pregnacy Care Hospital
          </Text>
          <Text className="text-gray-500 text-md">Regular Checkup</Text>
        </View>

        <View className="bg-[#DB61A9] p-2 rounded-full rotate-90 ml-auto">
          <AntDesign name="pushpino" size={24} color="white"  />
        </View>

      </View>

      <View className="flex flex-col items-start justify-center mt-6">
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={{ height: 200, width: "100%", borderRadius: 12 }}
        />
        <Text className="text-gray-500 text-md mt-2">2023-10-01 10:00 AM</Text>
      </View>
    </View>
  );
};

export default NearbyEvent;

const styles = StyleSheet.create({});
