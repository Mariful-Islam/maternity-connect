import Button from "@/components/Button";
import Input from "@/components/Input";
import Or from "@/components/Or";
import Wrapper from "@/components/Wrapper";
import { useAuth } from "@/contexts/AuthContext";
import { useGlobal } from "@/contexts/GlobalContext";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import {
  // StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Signup() {
  const { login } = useAuth();
  const { toLogin, toHome } = useGlobal();

  return (
      <Wrapper>
        <View className="mt-12">
          <StatusBar style="dark" />
          <View className="w-full flex flex-row justify-center">
            <Image
              source={require("@/assets/images/icon.png")}
              alt=""
              style={{ width: 165, height: 110 }}
            />
          </View>
          <View className="mx-6 mt-8">
            <Text className="text-4xl font-bold text-gray-500 text-center">
              Maternity connect
            </Text>
          </View>

          <View className="mx-6 mt-8">
            <View className=" relative">
              <Image
                source={require("@/assets/images/oui_email.svg")}
                style={{
                  height: 28,
                  width: 28,
                  tintColor: "gray",
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 20,
                }}
              />
              <Input placeholder="Email" />
            </View>

            <View className="relative mt-4">
              <Image
                source={require("@/assets/images/key.svg")}
                style={{
                  height: 28,
                  width: 28,
                  tintColor: "gray",
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 20,
                }}
              />
              <Input placeholder="Password" />
            </View>
            <View className="flex flex-row justify-end mt-2">
              <TouchableOpacity>
                <Text className="font-bold">Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <Button
              type="normal"
              onPress={toHome}
              title="Sign up"
              className="mt-6"
            />

            <Or />

            <Button
              type="outline"
              onPress={toLogin}
              title="Sign in"
              className="mt-8"
            />

            {/* <Button type="blue" onPress={login} title="Sign Wfgith Email" className="mt-3"/> */}
            {/* <Button type="outline-blue" onPress={login} title="Sign Wfgith Email" className="mt-3"/>
        <Button type="green" onPress={login} title="Sign Wfgith Email" className="mt-3"/>
        <Button type="outline-green" onPress={login} title="Sign Wfgith Email" className="mt-3"/>


        <Button type="danger" onPress={login} title="Sign Wfgith Email" className="mt-3"/>

        <Button type="outline-danger" onPress={login} title="Sign Wfgith Email" className="mt-3"/> */}
          </View>
        </View>
      </Wrapper>
  );
}

const styles = StyleSheet.create({});
