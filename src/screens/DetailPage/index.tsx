import {
	View,
	Text,
	Image,
	StatusBar as RNStatusBar,
	Platform,
	ScrollView,
	StyleSheet,
} from 'react-native';

export function DetailPage() {
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.viewContainer}>
					<View style={styles.header}>
						<Image
							source={require('../../assets/dog_card_1.png')}
							style={styles.background}
						/>
						<View style={styles.backButton}>
							{/* // insira o ícone do botão de voltar aqui */}
						</View>
						<View style={styles.time}>
							<Text>Oi</Text>
							{/* <Text>{new Date().toLocaleTimeString()}</Text> */}
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
								<Text>12</Text>
							</View>
							<View style={{ alignItems: 'center' }}>
								<Text style={[styles.title, styles.gray]}>
									Porte:
								</Text>
								<Text>M</Text>
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

							<View style={styles.button}>
								<Text>Criar solicitação</Text>
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
		top: 20,
		left: 20,
	},
	time: {
		position: 'absolute',
		right: 20,
		top: 20,
		backgroundColor: 'white',
		padding: 5,
		borderRadius: 5,
		marginVertical:
			Platform.OS === 'android' ? RNStatusBar.currentHeight + 10 : 10,
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
	button: {
		backgroundColor: 'blue',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginTop: 20,
	},
});
