import React, { useState } from 'react';
import HomeScreen from "./screens/HomeScreen";
import ScannerScreen from "./screens/ScannerScreen";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack  = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Allergens"
                component={HomeScreen}
            />
            <Stack.Screen
              name = "Scanner"
              component={ScannerScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>


  )
}
