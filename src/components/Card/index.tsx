import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export function Card() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.saveIconContainer}>
				<Fontisto name="favorite" size={28} color="white" />
			</TouchableOpacity>
			<Image
				source={require('../../assets/dog_card_1.png')}
				style={styles.image}
			/>
			<View style={styles.detailsContainer}>
				<Text style={styles.name}>Nome do local</Text>
				<Text style={styles.schedule}>
					Segunda à sexta: 8h às 18h {'\n'}
					Sábado e domingo: 10h às 16h
				</Text>
				<View style={styles.servicesContainer}>
					<TouchableOpacity style={styles.serviceIconContainer}>
						{/* sun or walking */}
						{/* <Fontisto name="paw" size={18} color="black" /> */}
						<Feather name="sun" size={18} color="black" />
					</TouchableOpacity>
					<Text style={[styles.service, { flex: 1 }]}>
						Dog walking
					</Text>
					<Text style={[styles.price, { textAlign: 'right' }]}>
						R$ 50,00/hora
					</Text>
				</View>
			</View>
		</View>
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
		color: '#fff',
		fontSize: 14,
		marginBottom: 10,
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
