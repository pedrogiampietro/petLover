import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { DetailPage } from '../screens/DetailPage';
import { RequestPage } from '../screens/RequestPage';
import { Map } from '../screens/Map';
import { FavoriteDogProfilePage } from '../screens/FavoritesPage';
import { Profile } from '../screens/Profile';
import { DetailProfileAnimal } from '../screens/DetailProfileAnimal';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
	<>
		<AuthStack.Navigator
			initialRouteName="CourseSelect"
			screenOptions={{
				headerShown: false,
			}}
		>
			<AuthStack.Screen name="Home" component={Home} />
			<AuthStack.Screen name="DetailPage" component={DetailPage} />
			<AuthStack.Screen name="RequestPage" component={RequestPage} />
			<AuthStack.Screen name="Map" component={Map} />
			<AuthStack.Screen
				name="FavoriteDogProfilePage"
				component={FavoriteDogProfilePage}
			/>
			<AuthStack.Screen name="Profile" component={Profile} />
			<AuthStack.Screen
				name="DetailProfileAnimal"
				component={DetailProfileAnimal}
			/>
		</AuthStack.Navigator>
	</>
);

export default AuthRoutes;
