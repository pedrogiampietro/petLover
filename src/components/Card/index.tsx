import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { Job } from '../../contexts/BaseContext';

export function Card(props: Job) {
	const [favorite, setFavorite] = useState(false);

	const { navigate } = useNavigation();

	const handleDetailPage = () => {
		navigate('DetailPage' as never, { id: props.id } as never);
	};

	const handleFavorito = () => {
		setFavorito(!favorite);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={handleDetailPage}>
			<TouchableOpacity
				style={styles.saveIconContainer}
				onPress={handleFavorito}
			>
				<Fontisto
					name="favorite"
					size={28}
					color={favorite ? '#fad300' : 'white'}
				/>
			</TouchableOpacity>
			<Image
				source={require('../../assets/dog_card_1.png')}
				style={styles.image}
			/>
			<View style={styles.detailsContainer}>
				<Text style={styles.name}>{props.name}</Text>
				<View style={styles.schedule}>
					<View style={styles.scheduleItem}>
						<Text style={styles.scheduleItemLabel}>Idade:</Text>
						<Text style={styles.scheduleItemValue}>
							{props.animal.age}
						</Text>
					</View>
					<View style={styles.scheduleItem}>
						<Text style={styles.scheduleItemLabel}>Raça:</Text>
						<Text style={styles.scheduleItemValue}>
							{props.animal.breed}
						</Text>
					</View>
				</View>
				<View style={styles.servicesContainer}>
					<TouchableOpacity style={styles.serviceIconContainer}>
						{props.offerType === 'DAYCARE' ? (
							<Fontisto name="paw" size={18} color="black" />
						) : (
							<Feather name="sun" size={18} color="black" />
						)}
					</TouchableOpacity>
					<Text style={[styles.service, { flex: 1 }]}>
						{props.offerType === 'DAYCARE' ? 'Diária' : 'Caminhada'}
					</Text>
					<Text style={[styles.price, { textAlign: 'right' }]}>
						{props.offerType === 'DAYCARE'
							? `R$ ${props.pricePerDay}/dia`
							: `R$ ${props.pricePerHour}/hora`}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 250,
		borderRadius: 10,
		overflow: 'hidden',
		marginBottom: 20,
	},
	saveIconContainer: {
		position: 'absolute',
		top: 20,
		right: 20,
		zIndex: 1,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
	detailsContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		padding: 20,
	},
	name: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	schedule: {
		flexDirection: 'row',
	},
	scheduleItem: {
		flexDirection: 'row',
		marginRight: 20,
		marginBottom: 10,
	},
	scheduleItemLabel: {
		fontSize: 16,
		color: '#fff',
		fontWeight: 'bold',
		marginRight: 5,
	},
	scheduleItemValue: {
		fontSize: 16,
		color: '#fff',
	},
	servicesContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	serviceIconContainer: {
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 50,
		marginRight: 10,
	},
	service: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	price: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
