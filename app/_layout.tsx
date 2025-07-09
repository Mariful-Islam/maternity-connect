import Sidebar from "@/components/Sidebar";
import { AuthProvider } from "@/contexts/AuthContext";
import { GlobalProvider } from "@/contexts/GlobalContext";
import "@/global.css";
import Drawer from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <GlobalProvider>
      <AuthProvider>
        {/* <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />


          <Stack.Screen name="+not-found" />
          <Stack.Screen name="login" options={{ headerShown: false }} />

          <Stack.Screen name="sign-up" options={{ headerShown: false }} />

          <Stack.Screen name="language-mode" options={{headerShown: false}}/>

          <Stack.Screen name="avater-onboarding" options={{headerShown: false}}/>


        </Stack> */}
        
          <Drawer screenOptions={{}} drawerContent={(props)=><Sidebar {...props}/>}>
            <Drawer.Screen name="index" options={{drawerLabel: 'Home', headerTitle: 'My Home', headerShown: false}}/>
            <Drawer.Screen name="my-baby" options={{drawerLabel: 'My Baby', headerTitle: 'My Home', headerShown: false}}/>
            <Drawer.Screen name="measurement-report" options={{ headerShown: false}}/>
            <Drawer.Screen name="diary" options={{ headerShown: false}}/>
            <Drawer.Screen name="note" options={{ headerShown: false}}/>
          
          </Drawer>
        <StatusBar style="auto" />
      </AuthProvider>
    </GlobalProvider>
  );
}
