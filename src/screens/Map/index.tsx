import { useState } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text,
	StatusBar as RNStatusBar,
	TouchableOpacity,
	Platform,
} from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import { Ionicons } from '@expo/vector-icons';

export function Map() {
	const [selectedAnimal, setSelectedAnimal] = useState(null);

	const onMarkerPress = (animal: any) => {
		setSelectedAnimal(animal);
	};

	const animals = [
		{
			id: 1,
			name: 'Buddy',
			type: 'Dog',
			latitude: -23.5489,
			longitude: -46.6388,
			image: 'https://example.com/buddy-avatar.jpg',
		},
		{
			id: 2,
			name: 'Mittens',
			type: 'Cat',
			latitude: -23.5513,
			longitude: -46.6367,
			image: 'https://example.com/mittens-avatar.jpg',
		},
		{
			id: 3,
			name: 'Rex',
			type: 'Dog',
			latitude: -23.5567,
			longitude: -46.6358,
			image: 'https://example.com/rex-avatar.jpg',
		},
		{
			id: 4,
			name: 'Fluffy',
			type: 'Rabbit',
			latitude: -23.5471,
			longitude: -46.6325,
			image: 'https://example.com/fluffy-avatar.jpg',
		},
	];

	return (
		<View style={styles.container}>
			<View style={styles.mapContainer}>
				<MapView
					style={styles.map}
					provider={PROVIDER_GOOGLE}
					initialRegion={{
						latitude: -23.5505,
						longitude: -46.6333,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					showsUserLocation
					loadingEnabled
					showsMyLocationButton
				>
					{animals?.map((animal: any) => (
						<Marker
							key={animal.id}
							coordinate={{
								latitude: animal.latitude,
								longitude: animal.longitude,
							}}
							title={animal.name}
							description={`Service animal - ${animal.type}`}
							onPress={() => onMarkerPress(animal)}
							pinColor={
								selectedAnimal &&
								selectedAnimal.id === animal.id
									? '#FFC107'
									: '#007AFF'
							}
						>
							{selectedAnimal &&
								selectedAnimal.id === animal.id && (
									<Callout>
										<View style={styles.calloutContainer}>
											<Image
												source={{ uri: animal.image }}
												style={styles.calloutImage}
											/>
											<View style={styles.calloutInfo}>
												<Text
													style={styles.calloutTitle}
												>
													{animal.name}
												</Text>
												<Text
													style={
														styles.calloutSubtitle
													}
												>
													{animal.type}
												</Text>
											</View>
										</View>
									</Callout>
								)}
						</Marker>
					))}
				</MapView>
			</View>
			<View style={styles.bottomMenu}>
				<TouchableOpacity style={styles.bottomMenuItem}>
					<Ionicons name="home" size={24} color="#333" />
					<Text style={styles.bottomMenuItemText}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.bottomMenuItem}
					onPress={() => navigate('Map' as never)}
				>
					<Ionicons name="map" size={24} color="#333" />
					<Text style={styles.bottomMenuItemText}>Mapa</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.bottomMenuItem}>
					<Ionicons name="heart" size={24} color="#333" />
					<Text style={styles.bottomMenuItemText}>Favoritos</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.bottomMenuItem}>
					<Ionicons name="person" size={24} color="#333" />
					<Text style={styles.bottomMenuItemText}>Perfil</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	mapContainer: {
		...StyleSheet.absoluteFillObject,
		height: '90%',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	calloutContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderRadius: 5,
		padding: 10,
		width: 200,
	},
	calloutImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},
	calloutInfo: {
		flex: 1,
	},
	calloutTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	calloutSubtitle: {
		fontSize: 14,
		color: '#555555',
	},
	bottomMenu: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
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
});
