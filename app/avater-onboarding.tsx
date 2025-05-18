import Survey1 from "@/components/AvaterOnboarding/Survey1";
import Survey2 from "@/components/AvaterOnboarding/Survey2";
import Survey3 from "@/components/AvaterOnboarding/Survey3";
import Survey4 from "@/components/AvaterOnboarding/Survey4";
import Survey5 from "@/components/AvaterOnboarding/Survey5";
import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const AvaterOnboarding = () => {
  const [survey, setSurvey] = useState<number>(1);

  const handleSurveyPrev = () => {
    setSurvey((prev: any) => {
      if (prev <= 1) {
        return prev;
      } else return prev-1;
    });
  };

  const handleSurveyNext = () => {
    setSurvey((prev: any) => {
      if (prev < 5) {
        return prev + 1;
      } else {
        return prev; // or keep it at 5 if you don't want to set it to null
      }
    });
  };

  console.log(survey, "=========");

  return (
    <Wrapper >
      <View>
        <View>
          {survey === 1 && <Survey1 />}
          {survey === 2 && <Survey2 />}
          {survey === 3 && <Survey3 />}
          {survey === 4 && <Survey4 />}
          {survey === 5 && <Survey5 />}
        </View>

        <View className="flex flex-row gap-12 justify-center mt-20 ">
          <Button
            type="outline"
            title="Prev"
            onPress={handleSurveyPrev}
            className="w-[120px]"
            disable={survey===1}
          />

          {survey === 5 ? (
            <Button
              type="normal"
              title="Finish"
              onPress={handleSurveyNext}
              className="w-[120px]"
              // disable
            />
          ) : (
            <Button
              type="outline"
              title="Next"
              onPress={handleSurveyNext}
              className="w-[120px]"
              disable={survey===5}
            />
          )}
        </View>
      </View>
    </Wrapper>
  );
};

export default AvaterOnboarding;

const styles = StyleSheet.create({});
