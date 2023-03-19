import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { useNavigation } from '@react-navigation/native';
import { MenuBottom } from '../../components/MenuBottom';

const animals = [
	{
		id: 1,
		name: 'Pedro',
		type: 'Dog',
		latitude: -23.5489,
		longitude: -46.6388,
		image: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ',
	},
	{
		id: 2,
		name: 'Mittens',
		type: 'Cat',
		latitude: -23.5513,
		longitude: -46.6367,
		image: 'data:image/jpeg;base64,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',
	},
	{
		id: 3,
		name: 'Rex',
		type: 'Dog',
		latitude: -23.5567,
		longitude: -46.6358,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAa6_W3OspEA6bRKLDpkLVAQjipPDO8SKcnudzQ6WqJOgy3eZ2dDKsF3ydZHn7Hfhcy4&usqp=CAU',
	},
	{
		id: 4,
		name: 'Fluffy',
		type: 'Rabbit',
		latitude: -23.5471,
		longitude: -46.6325,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrfajTIm0bWl-VsJ0GYJ63ihaFRoNCLmC2A&usqp=CAU',
	},
];

export function Map() {
	const [selectedAnimal, setSelectedAnimal] = useState(null);
	const { navigate } = useNavigation();

	const handleOnMarkerPress = (animal: any) => {
		setSelectedAnimal(animal);
		navigate('DetailPage' as never, { animal } as never);
	};

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
					loadingIndicatorColor="#40B5A2"
					showsMyLocationButton
				>
					{animals?.map((animal) => (
						<Marker
							key={animal.id}
							coordinate={{
								latitude: animal.latitude,
								longitude: animal.longitude,
							}}
							title={animal.name}
							description={`Service animal - ${animal.type}`}
							pinColor={
								selectedAnimal?.id === animal.id
									? '##CD5C5C'
									: '#40B5A2'
							}
							onPress={() => handleOnMarkerPress(animal)}
						></Marker>
					))}
				</MapView>
			</View>
			<MenuBottom />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	mapContainer: {
		flex: 1,
	},
	map: {
		flex: 1,
	},
	calloutContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 12,
		paddingVertical: 8,
		backgroundColor: 'white',
		borderRadius: 8,
		elevation: 3,
	},
	calloutImage: {
		width: 64,
		height: 64,
		marginRight: 12,
	},
	calloutInfo: {
		flex: 1,
	},
	calloutTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 4,
	},
	calloutSubtitle: {
		fontSize: 14,
		color: 'gray',
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
