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
import { useNavigation } from '@react-navigation/native';
import { validateEmail, validatePassword } from '../../utils/validators';
import { useAlert } from '../../hooks/useAlert';
import { Feather } from '@expo/vector-icons';
import theme from '../../styles/theme';
import { api } from '../../services/api';

export function Register() {
	const { showAlert } = useAlert();
	const { navigate } = useNavigation();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const toggleShowPassword = () => setShowPassword(!showPassword);

	const onEmailChange = (value: string): void => {
		setEmail(value);
	};

	const handleRegister = async () => {
		if (!validateEmail(email)) {
			showAlert({
				title: 'E-mail inválido',
				message: 'Por favor entre com um e-mail válido',
			});

			return;
		}

		if (!validatePassword(password)) {
			showAlert({
				title: 'Senha inválida',
				message:
					'A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.',
			});

			return;
		}

		setLoading(true);

		try {
			await api.post('/authenticate/sign-up', {
				name,
				email,
				password,
			});

			showAlert({
				title: 'Usuário criado',
				message: 'Parabénsss! Usuário criado com sucesso!',
			});
			navigate('Home' as never);
		} catch (err) {
			console.log('err', err);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.viewContainer}>
			<View style={styles.container}>
				<Image
					source={require('../../assets/pet_lover_logo.png')}
					style={styles.logo}
				/>

				<Text style={styles.screenTitle}>Registro</Text>

				<View style={styles.inputsContainer}>
					<View style={styles.inputBox}>
						<TextInput
							style={styles.input}
							placeholder="Nome completo"
							onChangeText={setName}
							value={name}
						/>
					</View>

					<View style={styles.inputBox}>
						<Feather name="user" size={22} color="#0A0A0A" />

						<TextInput
							style={styles.input}
							placeholder="Seu e-mail"
							placeholderTextColor="#7D7D7D"
							keyboardType="email-address"
							value={email}
							onChangeText={onEmailChange}
							editable={!loading}
						/>
					</View>

					<View style={styles.inputBox}>
						<Feather name="lock" size={22} color="#0A0A0A" />

						<TextInput
							style={{ ...styles.input, width: '75%' }}
							placeholder="Sua senha"
							placeholderTextColor="#7D7D7D"
							secureTextEntry={!showPassword}
							value={password}
							onChangeText={setPassword}
							editable={!loading}
						/>

						<TouchableOpacity
							onPress={toggleShowPassword}
							activeOpacity={0.6}
						>
							{showPassword ? (
								<Feather
									name="eye-off"
									size={18}
									color="#333"
								/>
							) : (
								<Feather name="eye" size={18} color="#333" />
							)}
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={handleRegister}
					disabled={loading}
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
	screenTitle: {
		color: '#0A0A0A',
		fontFamily: theme.FONT_FAMILY.BOLD,
		fontSize: theme.FONT_SIZE.LG,
		marginTop: 35,
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
		borderColor: '#7D7D7D',
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	input: {
		color: '#0A0A0A',
		width: '86%',
		fontWeight: '500',
		padding: 0,
	},
	actionSpan: {
		// marginLeft: 'auto',
		// marginTop: 10,
	},
	actionSpanText: {
		color: '#0A0A0A',
		fontSize: theme.FONT_SIZE.SM,
	},
	button: {
		backgroundColor: '#40B5A2',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40,
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
