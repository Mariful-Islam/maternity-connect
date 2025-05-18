import BottomTabs from "@/components/BottomTabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import { Image } from "expo-image";
import { router, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const dimension = Dimensions.get('window')


const MyBaby = () => {
  
  const navigation = useNavigation()

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
              <Image source={require('@/assets/images/saad.jpg')} alt="" style={{height: 40, width: 40, borderRadius: 50}}/>
            </View>


          </View>




          <View className="mt-6">
            <Text className="text-center text-[#7C0A64] text-3xl font-bold mb-3">My Baby</Text>


            <View className="relative flex flex-row items-end ">
              <Image source={require('@/assets/images/baby-mri.png')} alt="" style={{height: 290, width: dimension.width-80, objectFit: 'cover'}}/>
              
              <Image source={require('@/assets/images/camera.svg')} alt="" style={{height: 40, width: 40, objectFit: 'cover'}} />
            </View>
          </View>



          <TouchableOpacity className="mt-6 bg-[#fff3fd] p-3 rounded-xl" onPress={()=>router.replace('/measurement-report')}>
            <Text className="text-xl text-[#7C0A64] font-bold">Today:</Text>
            <Text className="text-lg text-[#7C0A64] text-center">12 Weeks, 3 Days. Due: Oct. 14, 2025.</Text>
          </TouchableOpacity>



          <View className="flex flex-row justify-between mt-4">
            <TouchableOpacity className="flex gap-3 items-center bg-[#eeeeee] px-8 py-4 rounded-lg" style={{width: dimension.width/2.4}}>
              <Text className="text-xl font-bold text-[#7C0A64]">Weight</Text>
              <Image source={require('@/assets/images/weight.svg')} alt="" style={{height: 50, width: 50}}/>

            </TouchableOpacity>


            <TouchableOpacity className="flex gap-3 items-center bg-[#eeeeee] px-8 py-4 rounded-lg" style={{width: dimension.width/2.4}}>
              <Text className="text-xl font-bold text-[#7C0A64]">Length</Text>

              <Image source={require('@/assets/images/length.svg')} alt="" style={{height: 50, width: 50}}/>

            </TouchableOpacity>
          </View>




          <View className="mt-4 flex flex-row justify-between">
            <TouchableOpacity onPress={()=>router.replace('/diary')} className="flex flex-row gap-3 justify-center items-center bg-[#fff3fd] px-4 py-1 rounded-lg" style={{width: dimension.width/2.4}}>
              <Image source={require('@/assets/images/diary.svg')} alt="" style={{height: 50, width: 50}}/>
              <Text className="text-xl font-bold text-[#7C0A64]">Diary</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row gap-3 justify-center items-center bg-[#fff3fd] px-4 py-1 rounded-lg" style={{width: dimension.width/2.4}}>
              <Image source={require('@/assets/images/memory.svg')} alt="" style={{height: 50, width: 50}}/>
              <Text className="text-xl font-bold text-[#7C0A64]">Memories</Text>
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

export default MyBaby;

const styles = StyleSheet.create({});
