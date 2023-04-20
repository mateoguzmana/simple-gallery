import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Gallery } from "./screens/Gallery";
import { Preview } from "./screens/Preview";
import { Chat } from "./screens/Chat";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FullScreen } from "./screens/FullScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen
            name="Gallery"
            component={Gallery}
            options={{ animation: "fade" }}
          />
          <Stack.Screen
            name="Preview"
            component={Preview}
            options={{ animation: "fade", presentation: "transparentModal" }}
          />
          <Stack.Screen
            name="FullScreen"
            component={FullScreen}
            options={{ animation: "fade", presentation: "fullScreenModal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
