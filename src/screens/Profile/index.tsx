import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar as RNStatusBar,
	Platform,
	FlatList,
	Image,
	TouchableOpacity,
	Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MenuBottom } from '../../components/MenuBottom';
import { HistoryProfile } from '../../components/HistoryProfile';
import { ProfileHeader } from '../../components/ProfileHeader';

export function Profile() {
	const [user, setUser] = useState({
		name: 'Pedro Developer',
		email: 'pedrodev@example.com',
		photo: 'https://www.github.com/pedrogiampietro.png',
		dogs: [
			{
				id: 1,
				name: 'Buddy',
				breed: 'Labrador Retriever',
				photo: require('../../assets/dog_card_1.png'),
			},
			{
				id: 2,
				name: 'Max',
				breed: 'German Shepherd',
				photo: require('../../assets/dog_card_1.png'),
			},
		],
	});
	const [banner, setBanner] = useState('');
	const { navigate } = useNavigation();

	const handleBannerChange = (uri: any) => {
		setBanner(uri);
	};

	const renderDog = (dog: any) => (
		<View key={dog.id} style={styles.dog}>
			<Image source={dog.photo} style={styles.dogPhoto} />
			<View style={styles.dogInfo}>
				<Text style={styles.dogName}>{dog.name}</Text>
				<Text style={styles.dogBreed}>{dog.breed}</Text>
				<TouchableOpacity
					onPress={() => navigate('DetailProfileAnimal' as never)}
				>
					<Text>Acessar o perfil do animal ➔</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.separator} />
		</View>
	);

	const addDog = () => {
		// Implement adding a new dog to the user's dogs list
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={[user]}
				keyExtractor={(item) => item.email}
				renderItem={({ item }) => (
					<View style={styles.viewContainer}>
						<ProfileHeader
							banner={banner}
							onBannerChange={handleBannerChange}
						/>
						<View style={styles.info}>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									gap: 15,
								}}
							>
								<Image
									source={{ uri: item.photo }}
									style={styles.profile}
								/>
								<Text style={styles.name}>{item.name}</Text>
							</View>

							<Text style={styles.gray}>{item.email}</Text>

							<HistoryProfile />

							<Text style={styles.title}>My Dogs</Text>

							<View style={styles.details}>
								{item.dogs.map(renderDog)}

								<TouchableOpacity
									style={styles.addButton}
									onPress={addDog}
								>
									<Text style={styles.addButtonText}>
										Criar novo perfil
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)}
			/>
			<MenuBottom />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		overflow: 'hidden',
	},
	viewContainer: {
		flex: 1,
	},
	header: {
		position: 'relative',
	},
	background: {
		width: '100%',
		height: 380,
	},
	backButton: {
		position: 'absolute',
		left: 20,
		top: 10,
		padding: 5,
		borderRadius: 5,
		marginVertical:
			Platform.OS === 'android' ? RNStatusBar.currentHeight + 5 : 5,
	},
	favorite: {
		position: 'absolute',
		right: 20,
		top: 10,
		padding: 5,
		borderRadius: 5,
		marginVertical:
			Platform.OS === 'android' ? RNStatusBar.currentHeight + 5 : 5,
	},
	info: {
		padding: 20,
		backgroundColor: 'white',
		marginTop: -60,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	title: {
		fontWeight: 'bold',
		marginVertical: 5,
		marginTop: 30,
	},
	gray: {
		textTransform: 'uppercase',
		color: '#aaa',
	},
	name: {
		fontWeight: 'bold',
		fontSize: 30,
	},
	profile: {
		width: 64,
		height: 64,
		borderRadius: 50,
	},
	details: {
		marginVertical: 20,
		backgroundColor: 'white',
	},
	dog: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
	dogPhoto: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginRight: 10,
	},
	dogInfo: {
		flex: 1,
	},
	dogName: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	dogBreed: {
		fontSize: 16,
		color: 'gray',
		marginBottom: 5,
	},
	separator: {
		height: 1,
		backgroundColor: 'gray',
		marginTop: 10,
	},
	addButton: {
		backgroundColor: '#40B5A2',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 2,
		paddingVertical: 15,
		marginTop: 20,
	},
	addButtonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#FFFFFF',
		textTransform: 'uppercase',
	},
});
