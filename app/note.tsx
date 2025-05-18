import BottomTabs from "@/components/BottomTabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import { Image } from "expo-image";
import { router, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const dimension = Dimensions.get("window");

const Note = () => {
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

          <View className="mt-8 mb-6 flex flex-row gap-12 items-center">
            <TouchableOpacity onPress={() => router.replace("/diary")}>
              <AntDesign name="left" size={30} color="#DB61A9" className="" />
            </TouchableOpacity>
            <Text className="text-center text-[#7C0A64] text-3xl font-bold">
              My Baby
            </Text>
          </View>

          {/* Main Context */}
          <View className="mt-6">
            <Text className="text-2xl font-bold text-[#7C0A64]">Note</Text>

            <View className="mt-4">
              <TextInput
                className={`h-[300px] text-lg z-10 placeholder:text-gray-400 focus:text-gray-600 border border-gray-500 rounded-lg bg-gray-50 focus:bg-white focus:border-black py-3 px-4 `}
              />
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

export default Note;

const styles = StyleSheet.create({});
