import {
	View,
	Text,
	Image,
	StatusBar as RNStatusBar,
	Platform,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function DetailPage() {
	const { navigate } = useNavigation();

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.viewContainer}>
					<View style={styles.header}>
						<Image
							source={require('../../assets/dog_card_1.png')}
							style={styles.background}
						/>
						<TouchableOpacity
							style={styles.backButton}
							onPress={() => navigate('Home' as never)}
						>
							<Ionicons
								name="arrow-back"
								size={24}
								color="black"
							/>
						</TouchableOpacity>
						<View style={styles.favorite}>
							<Fontisto name="favorite" size={24} color="black" />
						</View>
					</View>
					<View style={styles.info}>
						<Text style={styles.name}>Jean</Text>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-around',
							}}
						>
							<View style={{ alignItems: 'center' }}>
								<Text style={[styles.title, styles.gray]}>
									Idade:
								</Text>
								<Text>4 months</Text>
							</View>
							<View style={{ alignItems: 'center' }}>
								<Text style={[styles.title, styles.gray]}>
									Porte:
								</Text>
								<Text>P</Text>
							</View>
							<View style={{ alignItems: 'center' }}>
								<Text style={[styles.title, styles.gray]}>
									Sexo:
								</Text>
								<Text>Fêmea</Text>
							</View>
						</View>

						<Text style={[styles.title, styles.gray]}>
							Localização:
						</Text>
						<Text>Rio de Janeiro</Text>
						<Text style={[styles.title, styles.gray]}>
							Tipo de serviço:
						</Text>
						<Text>Caminhada</Text>
						<Text style={[styles.title, styles.gray]}>
							Horas/dias disponíveis:
						</Text>
						<Text>
							Segunda: 7AM - 8AM{' '}
							<Text style={{ color: 'red' }}>Reservada</Text>
						</Text>
						<Text>Terça: 7AM - 8AM</Text>
						<Text>Quarta: 7AM - 8AM</Text>
						<Text>
							Quinta: 7AM - 8AM{' '}
							<Text style={{ color: 'red' }}>Reservada</Text>
						</Text>
						<Text>Sexta: 7AM - 8AM</Text>

						{/* <Text>
							Please note that, this service is not one-time. It
							will occur in every week.
						</Text> */}

						<View>
							<Text style={[styles.title, styles.gray]}>
								Valor por serviço
							</Text>
							<Text>R$ 12,00/hr</Text>
						</View>

						<View style={styles.details}>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									gap: 10,
								}}
							>
								<Image
									source={{
										uri: 'http://github.com/pedrogiampietro.png',
									}}
									style={styles.profile}
								/>
								<Text>Pedro Giampietro</Text>
							</View>

							<View style={styles.buttonGroup}>
								<TouchableOpacity
									style={styles.chatButton}
									activeOpacity={0.6}
									// onPress={() => navigate('Register' as never)}
								>
									<Text style={styles.buttonText}>
										<Ionicons
											name="chatbox-outline"
											size={24}
											color="#000"
										/>
									</Text>
								</TouchableOpacity>

								<TouchableOpacity
									style={styles.button}
									activeOpacity={0.6}
									onPress={() =>
										navigate('RequestPage' as never)
									}
								>
									<Text style={styles.buttonText}>
										Criar Requisição
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
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
	details: {
		marginVertical: 20,
		backgroundColor: 'white',
	},
	profile: {
		width: 64,
		height: 64,
		borderRadius: 50,
	},
	buttonGroup: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
		marginTop: 20,
	},
	chatButton: {
		width: 60,
		height: 56,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#000',
		borderWidth: 2,
	},
	button: {
		backgroundColor: '#40B5A2',
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 2,
		paddingVertical: 15,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#FFFFFF',
		textTransform: 'uppercase',
	},
});
