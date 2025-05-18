import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Wrapper = ({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <SafeAreaView>
      <ScrollView className={`px-5 pt-12 bg-white h-screen ${className}`} style={style}>
        <StatusBar style="dark" />
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wrapper;

const styles = StyleSheet.create({});
