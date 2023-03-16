import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SlideIntroduction } from '../screens/SlideIntroduction';
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
import { DetailPage } from '../screens/DetailPage';

const AppStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
	<AppStack.Navigator
		initialRouteName="Intro"
		screenOptions={{
			headerShown: false,
		}}
	>
		<AppStack.Screen name="Intro" component={SlideIntroduction} />
		<AppStack.Screen name="Login" component={Login} />
		<AppStack.Screen name="Register" component={Register} />
		<AppStack.Screen name="Home" component={Home} />
		<AppStack.Screen name="DetailPage" component={DetailPage} />
	</AppStack.Navigator>
);

export default AuthRoutes;
