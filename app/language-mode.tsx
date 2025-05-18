import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LanguageMode = () => {

  const assistantType = [
    "Text",
    "Voice",
    "Avater"
  ]
  return (
    <Wrapper>
      <View className="mt-16">
        <View className="flex justify-center items-center">
          <Text className="text-5xl font-bold">Language</Text>
          <Text className="mt-4 text-xl font-bold">Select your preffered language</Text>
        </View>

        <View className="mt-16">
          <Text className="text-3xl font-bold">Virtual Assistant</Text>
          <Text className="mt-4 text-xl font-bold">Choose your virtual assistant</Text>
        </View>

        <View className="mt-16">
          <Text className="text-3xl font-bold">Virtual Assistant</Text>

          <View className="flex flex-row gap-4 mx-4 justify-between mt-8 ">
            {assistantType.map((type, i)=>(
              <Text key={i} className=" text-black focus:text-white w-[100px] py-2 flex flex-row text-center font-bold rounded-lg border border-gray-600">{type}</Text>

            ))}
          
          </View>
        </View>

        <Button type="normal" title="Next" onPress={()=>null} className="mt-16"/>
      </View>
    </Wrapper>
  );
};

export default LanguageMode;

const styles = StyleSheet.create({});
