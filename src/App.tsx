import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Preview } from "./screens/Preview";
import { Chat } from "./screens/Chat";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FullScreen } from "./screens/FullScreen";

export type RootStackParamList = {
  Chat: undefined;
  Preview: undefined;
  FullScreen: { uri: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen
            name="Preview"
            component={Preview}
            options={{ animation: "fade", presentation: "transparentModal" }}
          />
          <Stack.Screen
            name="FullScreen"
            component={FullScreen}
            options={{
              animation: "fade",
              presentation: "transparentModal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
