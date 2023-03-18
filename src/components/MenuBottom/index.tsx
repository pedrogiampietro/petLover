import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export function MenuBottom() {
	const { navigate } = useNavigation();
	const route = useRoute();
	const [activePage, setActivePage] = useState('');

	useEffect(() => {
		setActivePage(route.name);
	}, [route]);

	return (
		<View style={styles.bottomMenu}>
			<TouchableOpacity
				style={[
					styles.bottomMenuItem,
					activePage === 'Home' && styles.activeMenuItem,
				]}
				onPress={() => {
					navigate('Home' as never);
				}}
			>
				<Ionicons name="home" size={24} color="#333" />
				<Text style={styles.bottomMenuItemText}>Home</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={[
					styles.bottomMenuItem,
					activePage === 'Map' && styles.activeMenuItem,
				]}
				onPress={() => {
					navigate('Map' as never);
				}}
			>
				<Ionicons name="map" size={24} color="#333" />
				<Text style={styles.bottomMenuItemText}>Mapa</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={[
					styles.bottomMenuItem,
					activePage === 'FavoriteDogProfilePage' &&
						styles.activeMenuItem,
				]}
				onPress={() => {
					navigate('FavoriteDogProfilePage' as never);
				}}
			>
				<Ionicons name="heart" size={24} color="#333" />
				<Text style={styles.bottomMenuItemText}>Favoritos</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={[
					styles.bottomMenuItem,
					activePage === 'Profile' && styles.activeMenuItem,
				]}
				onPress={() => {
					navigate('Profile' as never);
				}}
			>
				<Ionicons name="person" size={24} color="#333" />
				<Text style={styles.bottomMenuItemText}>Perfil</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	bottomMenu: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 'auto',
		backgroundColor: '#fff',
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderTopWidth: 1,
		borderTopColor: '#ccc',
	},
	bottomMenuItem: {
		alignItems: 'center',
	},
	bottomMenuItemText: {
		fontSize: 12,
		fontWeight: 'bold',
		marginTop: 4,
	},
	activeMenuItem: {
		borderBottomWidth: 2,
		borderBottomColor: '#333',
	},
});
