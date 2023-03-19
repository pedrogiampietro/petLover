import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../hooks/useAuth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useNavigation } from '@react-navigation/native';

const Routes: React.FC = () => {
	const { user, loading } = useAuth();
	const { navigate } = useNavigation();

	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator size="large" color="#666" />
			</View>
		);
	}

	if (!user) {
		navigate('Intro' as never);
	}

	return user ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
