import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	StatusBar as RNStatusBar,
	Platform,
	View,
	Image,
} from 'react-native';

export function Register() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleRegister = () => {
		// TODO: implementar a lógica de registro
	};

	return (
		<View style={styles.viewContainer}>
			<View style={styles.container}>
				<Image
					source={require('../../assets/pet_lover_logo.png')}
					style={styles.logo}
				/>

				<Text style={styles.title}>Registro</Text>

				<View style={styles.inputsContainer}>
					<View style={styles.inputBox}>
						<TextInput
							style={styles.input}
							placeholder="Usuário"
							onChangeText={setUsername}
							value={username}
						/>
					</View>

					<View style={styles.inputBox}>
						<TextInput
							style={styles.input}
							placeholder="Email"
							onChangeText={setEmail}
							value={email}
							keyboardType="email-address"
						/>
					</View>

					<View style={styles.inputBox}>
						<TextInput
							style={styles.input}
							placeholder="Senha"
							onChangeText={setPassword}
							value={password}
							secureTextEntry
						/>
					</View>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={handleRegister}
				>
					<Text style={styles.buttonText}>Registrar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#edf5ee',
		width: '80%',
	},
	viewContainer: {
		flex: 1,
		backgroundColor: '#edf5ee',
		alignItems: 'center',
		paddingVertical:
			Platform.OS === 'android' ? RNStatusBar.currentHeight + 90 : 90,
	},
	logo: {
		width: 135,
		height: 95,
	},
	inputsContainer: {
		marginTop: 60,
		width: '100%',
	},
	inputBox: {
		width: '100%',
		paddingVertical: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 24,
	},
	input: {
		width: '100%',
		height: 48,
		padding: 12,
		borderWidth: 1,
		borderColor: '#ccc',
		marginBottom: 16,
		borderRadius: 4,
		fontSize: 16,
	},
	button: {
		width: '100%',
		height: 48,
		backgroundColor: '#40B5A2',
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
