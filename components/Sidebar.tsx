import { useSideBarMenu } from "@/constants/sideBarMenu";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Sidebar = (props: any) => {
  const sideBarMenu = useSideBarMenu();

  const onCloseDrawer = () => {
    props.navigation.dispatch(DrawerActions.closeDrawer())
  };
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: "#DB64A9" }}>
      <TouchableOpacity onPress={onCloseDrawer} className="bg-[#7C0A64] w-10 h-10 justify-center items-center rounded-lg ml-2 mt-4">
        <Entypo name="cross" size={24} color="white" />
      </TouchableOpacity>

      <View className="mt-12 flex flex-row gap-6">
        <View>
          <Image
            source={require("@/assets/images/saad.jpg")}
            className="h-20 w-20"
            style={{ height: 60, width: 60, borderRadius: 50 }}
          />
        </View>
        <View>
          <Text className="text-white text-xl font-bold">
            Mariful Islam Saad
          </Text>

          <TouchableOpacity className="mt-2">
            <Text className="text-white">Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-8 flex gap-4">
        {sideBarMenu.map((menu, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => router.push(menu.url as any)}
          >
            <View className="flex flex-row items-center gap-2">
              {menu.icon}
              <Text className="text-white font-bold text-xl">{menu.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View className="mt-8">
        <TouchableOpacity className="flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-md max-w-fit min-w-fit  bg-white">
          <View className="rotate-180">
            <Ionicons name="exit-outline" size={24} color="#DB64A9" />
          </View>
          <Text className="text-[#DB64A9] text-lg font-bold">Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default Sidebar;

const styles = StyleSheet.create({});
