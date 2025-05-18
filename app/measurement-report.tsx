import BottomTabs from "@/components/BottomTabs";
import { weigthLengthMeasures } from "@/constants/items";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import { Image } from "expo-image";
import { router, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MeasurementReport = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <>
      <StatusBar style="dark" />
      <View className="pt-12 bg-white pb-12 relative px-0 flex-1">
        <View className="px-6">
          <View className="flex flex-row justify-between items-center">
            <TouchableOpacity
              onPress={onToggleDrawer}
              className="bg-[#DB61A9] rounded-lg w-[40px] h-[40px] flex items-center justify-center"
            >
              <Ionicons name="reorder-three-outline" size={30} color="white" />
            </TouchableOpacity>

            <View className="flex flex-row gap-3 items-center">
              <Text className="text-xl font-bold text-[#7C0A64]">Allisa</Text>
              <Image
                source={require("@/assets/images/saad.jpg")}
                alt=""
                style={{ height: 40, width: 40, borderRadius: 50 }}
              />
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-center text-[#7C0A64] text-3xl font-bold mb-3">
              My Baby
            </Text>

            <View className="flex flex-row items-center gap-3">
              <TouchableOpacity onPress={() => router.replace("/my-baby")}>
                <AntDesign
                  name="left"
                  size={24}
                  color="#DB61A9"
                  className="mt-5"
                />
              </TouchableOpacity>
              <View className="mt-6 bg-[#fff3fd] p-3 rounded-xl">
                <Text className="text-xl text-[#7C0A64] font-bold">Today:</Text>
                <Text className="text-lg text-[#7C0A64] text-center">
                  12 Weeks, 3 Days. Due: Oct. 14, 2025.
                </Text>
              </View>
            </View>
          </View>

          <View className="mt-4">
            <View className="flex flex-row justify-between">
              <Text className="text-2xl font-bold text-[#7C0A64]">
                Measures
              </Text>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={30} color="#7C0A64" />
                </TouchableOpacity>
              
            </View>


            <View className="flex gap-6 mt-6">
                {weigthLengthMeasures.map((item, i)=>(
                    <View key={i} className="flex flex-row justify-between items-center">
                        <View className="flex flex-row gap-3 items-center">
                            <View style={{backgroundColor: item.color, height:20, width: 20, borderRadius: 50}}></View>
                            <Text className="font-bold">{item.date}</Text>
                        </View>
                        <Text className="font-bold">W: {item.weight}, L: {item.length}</Text>
                    </View>
                ))}
            </View>
          </View>
        </View>
        <View className=" absolute w-full bottom-0">
          <BottomTabs />
        </View>
      </View>
    </>
  );
};

export default MeasurementReport;

const styles = StyleSheet.create({});
