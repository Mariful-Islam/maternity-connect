import BottomTabs from "@/components/BottomTabs";
import { features } from "@/constants/items";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import { Image } from "expo-image";
import { router, useNavigation } from "expo-router";
import { } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const dimension = Dimensions.get("window");

const Index = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <>
      <StatusBar style="light" />
      <View className="pt-12 bg-[#7C0A64] pb-12 relative px-0 flex-1">
        {/* Header Start */}
        <View className=" bg-[#7C0A64] z-10 pb-6 rounded-b-3xl flex flex-row gap-3 items-center">
          <View className="px-6">
            <TouchableOpacity
              onPress={onToggleDrawer}
              className="bg-[#DB61A9] rounded-lg w-[40px] h-[40px] flex items-center justify-center"
            >
              <Ionicons name="reorder-three-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>

          <View className="flex flex-row justify-center w-1/2 gap-2">
            <Text className="text-2xl text-white font-bold">Hi,</Text>
            <Text className="text-2xl text-[#e671b5] font-bold">Allisa</Text>
          </View>
        </View>
        {/* Header End */}

        <View className="-mt-5 z-0 relative">
          <Image
            source={require("@/assets/images/USER PHOTO.png")}
            style={{ height: 290, width: "100%" }}
          />

          <Image
            source={require("@/assets/images/camera.svg")}
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              right: 12,
              bottom: 12,
            }}
          />
        </View>
        
        {/* Health monitor Start */}
        <View className="bg-[#ffffffaf] z-10 shadow-xl shadow-black mx-6 px-4 rounded-lg -mt-10 py-2 flex flex-row items-center justify-between">
          <Text className="text-[#7C0A64] text-2xl font-bold">
            Health monitor
          </Text>
          <View className="flex flex-row gap-4">
            <View className="bg-[#7C0A64] rounded-full p-3">
              <Image
                source={require("@/assets/images/pregnant.svg")}
                style={{ height: 30, width: 30 }}
              />
            </View>
            <View className="bg-[#7C0A64] rounded-full p-3">
              <Image
                source={require("@/assets/images/baby.svg")}
                style={{ height: 30, width: 30 }}
              />
            </View>

            <View className="bg-[#7C0A64] rounded-full p-3">
              <Image
                source={require("@/assets/images/health.svg")}
                style={{ height: 30, width: 30 }}
              />
            </View>
          </View>
        </View>
        {/* Health monitor End */}


        <View className="pt-14 pb-36 -mt-10 z-0 bg-white rounded-t-3xl flex flex-row flex-wrap justify-between gap-4 items-center px-6 ">
          {features.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => router.replace(item.url as any)}
              className=" bg-[#DB61A9] rounded-lg p-4 h-[130px] flex justify-center items-center"
            >
              <Image source={item.image} style={{ height: 50, width: 50 }} />
              <Text className="text-white text-xl font-bold mt-4 w-[80px] text-center">
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className=" absolute w-full bottom-0">
          <BottomTabs color="white" />
        </View>
      </View>
    </>
  );
};

export default Index;
