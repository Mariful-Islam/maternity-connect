import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface BottomTabsProps {
  color?: 'pink' | 'white'
}

const BottomTabs = ({color='white'}: BottomTabsProps) => {
  return (
    <View className="relative pt-12">


      <View className="flex items-center  ">
    
        <View 
            className={`w-[95px] h-[100px] ${color==='pink' ? 'bg-[#7C0A64]' : 'bg-white'} z-20 rounded-full bottom-[40px] flex items-center`}
        >
          <Image
            source={require("@/assets/images/trans.png")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              zIndex: 10,
              bottom: 6,
              left: -2
            }}
            className=" absolute z-10"
          />
        </View>

      </View>
      <View className="bg-[#DB64A9] px-6 py-2 absolute left-0 right-0 bottom-0 ">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity className="flex items-center">
            <Image
              source={require("@/assets/images/lg.svg")}
              style={{ height: 40, width: 40 }}
            />
            <Text className="text-lg font-bold text-white">Learn & Grow</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex items-center">
            <Image
              source={require("@/assets/images/wb.svg")}
              style={{ height: 40, width: 40 }}
            />

            <Text className="text-lg font-bold text-white">Wellness boost</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomTabs;



const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    alignItems: 'center',
  },
  svg: {
    position: 'absolute',
    bottom: 0,
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  centerButton: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
});