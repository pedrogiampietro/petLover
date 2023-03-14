import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SlideIntroduction } from "../screens/SlideIntroduction";

const AppStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <AppStack.Navigator
    initialRouteName="Intro"
    screenOptions={{
      headerShown: false,
    }}
  >
    <AppStack.Screen name="Intro" component={SlideIntroduction} />
  </AppStack.Navigator>
);

export default AuthRoutes;
