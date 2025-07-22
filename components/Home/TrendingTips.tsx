import { Image } from 'expo-image';
import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const TrendingTips = () => {
    const video = useRef(null);
  return (
    <View className="w-full py-4 border border-gray-200 rounded-xl px-4 ">
      <Text className="text-[#DB61A9] font-bold text-xl">Trending Tips</Text>


      <View className="flex flex-col items-start justify-center mt-4">
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={{ height: 200, width: '100%', borderRadius: 12 }}
        />
        <Text className="text-black text-lg font-bold mt-2">Moms</Text>
        <Text className="text-gray-500 text-md">
            Discover the latest tips and advice for moms in our community. From pregnancy to parenting, we&apos;ve got you covered with expert insights and personal stories.
        </Text>
      </View>
    </View>
  );
};

export default TrendingTips;

const styles = StyleSheet.create({});
