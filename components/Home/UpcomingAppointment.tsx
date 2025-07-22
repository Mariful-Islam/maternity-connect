import { upcommingAppointments } from "@/constants/items";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UpcomingAppointment = () => {
  return (
    <View className="w-full py-4 border border-gray-200 rounded-xl px-4 ">
      <Text className="text-[#DB61A9] font-bold text-xl">
        Upcoming Appointment
      </Text>
      <View className="mt-6">
        {upcommingAppointments.map((appointment, index) => (
          <View
            key={index}
            className="mt-4 flex flex-row items-center justify-between"
          >
            <View>
              <Text className="text-black font-bold text-lg">
                {appointment.name}
              </Text>
              <Text className="text-gray-400 text-md mt-2">
                {appointment.description}
              </Text>
            </View>

            <View className="mt-1">
              <View className="flex flex-row items-center justify-end gap-2">
                <MaterialCommunityIcons
                  name="calendar-clock-outline"
                  size={24}
                  color="#DB61A9"
                />
                <MaterialCommunityIcons
                  name="calendar-refresh-outline"
                  size={24}
                  color="#DB61A9"
                />
              </View>
              <Text className="text-gray-500 text-md mt-2">
                {appointment.datetime}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default UpcomingAppointment;

const styles = StyleSheet.create({});
