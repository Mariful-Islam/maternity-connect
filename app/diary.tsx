import BottomTabs from "@/components/BottomTabs";
import { getNext7Days } from "@/utils/getDays";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import { Image } from "expo-image";
import { router, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const dimension = Dimensions.get("window");

const Diary = () => {
  const navigation = useNavigation();

  const days = getNext7Days()

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
            <TouchableOpacity onPress={() => router.replace("/my-baby")}>
              <AntDesign name="left" size={30} color="#DB61A9" className="" />
            </TouchableOpacity>
            <Text className="text-center text-[#7C0A64] text-3xl font-bold">
              My Baby
            </Text>
          </View>

          <View className="bg-[#7C0A64] rounded-lg p-4">
            <Text className="text-white text-xl font-bold">Diary</Text>
            <View className="w-full flex items-end border-b border-white">
              <Text className="text-white">Month</Text>
            </View>
            <View className="flex flex-row items-center mt-4">
              <AntDesign name="left" size={24} color="white" />
              
              <ScrollView horizontal contentContainerStyle={{display: 'flex', flexDirection: 'row', gap: 8}}>
                {days.map((day, i)=>(
                  <View key={i} className=" border border-white rounded-xl p-2 flex items-center">
                    <Text className="text-white font-bold">{day.date.split("-").slice(-1)}</Text>
                    <Text className="text-white font-bold">{day.weekday.slice(0,3)}</Text>
                  </View>
                ))}
              </ScrollView>

              <AntDesign name="right" size={24} color="white" />
            </View>
            
          </View>

          <View className="flex flex-row gap-6 flex-wrap justify-between mt-4">
            <TouchableOpacity
              className="flex gap-3 items-center bg-[#eeeeee] px-8 py-4 rounded-lg"
              style={{ width: dimension.width / 2.4 }}
            >
              <Text className="text-xl font-bold text-[#7C0A64]">
                Heartbeats
              </Text>
              <Image
                source={require("@/assets/images/heart.svg")}
                alt=""
                style={{ height: 50, width: 50 }}
              />
              <Text className="text-xl font-bold text-[#7C0A64]">110</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex gap-3 items-center bg-[#eeeeee] px-8 py-4 rounded-lg"
              style={{ width: dimension.width / 2.4 }}
            >
              <Text className="text-xl font-bold text-[#7C0A64]">Kicks</Text>

              <Image
                source={require("@/assets/images/kick.svg")}
                alt=""
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex gap-3 items-center bg-[#eeeeee] px-8 py-4 rounded-lg"
              style={{ width: dimension.width / 2.4 }}
            >
              <Text className="text-xl font-bold text-[#7C0A64]">Music</Text>

              <Image
                source={require("@/assets/images/music.svg")}
                alt=""
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex gap-3 items-center bg-[#eeeeee] px-8 py-4 rounded-lg"
              style={{ width: dimension.width / 2.4 }}
            >
              <Text className="text-xl font-bold text-[#7C0A64]">
                Voice note
              </Text>

              <Image
                source={require("@/assets/images/voice.svg")}
                alt=""
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>
          </View>

          <View className="mt-8">
            <TouchableOpacity
              onPress={() => router.push("/note")}
              className="flex flex-row gap-6 items-start bg-[#eeeeee] px-8 py-4 rounded-lg"
            >
              <View className="flex items-center">
                <Text className="text-xl font-bold text-[#7C0A64]">Note</Text>

                <Image
                  source={require("@/assets/images/note.svg")}
                  alt=""
                  style={{ height: 50, width: 50 }}
                />
              </View>
              <Text className="w-[200px] text-lg">
                First n words. Then open the next screen with full notes.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className=" absolute w-full bottom-0">
          <BottomTabs />
        </View>
      </View>
    </>
  );
};

export default Diary;

const styles = StyleSheet.create({});
