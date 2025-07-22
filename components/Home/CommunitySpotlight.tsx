import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CommunitySpotlight = () => {
  return (
    <View className="w-full py-4 border border-gray-200 rounded-xl px-4 ">
      <Text className="text-[#DB61A9] font-bold text-xl">
        Community Spotlight
      </Text>

      <View className="flex flex-row items-center justify-start mt-4">
        <Image
          source={require("@/assets/images/saad.jpg")}
          style={{ height: 50, width: 50, borderRadius: 50 }}
        />
        <View className="flex flex-col ml-4 ">
          <Text className="text-black font-bold text-xl">Saad</Text>
          <Text className="text-gray-500 text-md">Maternity Connect</Text>
        </View>
      </View>
      <View className="flex flex-col items-start justify-center mt-4">
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={{ height: 200, width: "100%", borderRadius: 12 }}
        />
        <Text className="text-gray-500 text-md mt-2">
          Track your baby&apos;s growth and health
        </Text>
      </View>
    </View>
  );
};

export default CommunitySpotlight;

const styles = StyleSheet.create({});
