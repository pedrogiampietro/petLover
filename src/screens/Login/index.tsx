import React, { useState } from 'react';
import {
	Image,
	StyleSheet,
	SafeAreaView,
	StatusBar as RNStatusBar,
	Platform,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import theme from '../../styles/theme';

import { useNavigation } from '@react-navigation/native';
import { Loading } from '../../components/Loading';
import { useAuth } from '../../hooks/useAuth';
import { validateEmail, validatePassword } from '../../utils/validators';
import { useAlert } from '../../hooks/useAlert';

export function Login() {
	const { navigate } = useNavigation();
	const { login } = useAuth();
	const { showAlert } = useAlert();

	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const toggleShowPassword = () => setShowPassword(!showPassword);

	const onEmailChange = (value: string): void => {
		setEmail(value);
	};

	const onLogin = async () => {
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

		try {
			setLoading(true);
			await login(email, password);
		} catch (err: any) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	const onResendConfirmationCode = async () => {
		// validar e-mail

		setLoading(true);

		try {
			// await resendConfirmationCode(email);
		} catch (err: any) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<View style={styles.viewContainer}>
						<Image
							source={require('../../assets/pet_lover_logo.png')}
							style={styles.logo}
						/>

						<Text style={styles.screenTitle}>Acesse sua conta</Text>

						<View style={styles.inputsContainer}>
							<View style={styles.inputBox}>
								<Feather
									name="user"
									size={22}
									color="#0A0A0A"
								/>

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
								<Feather
									name="lock"
									size={22}
									color="#0A0A0A"
								/>

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
											color="#FFF"
										/>
									) : (
										<Feather
											name="eye"
											size={18}
											color="#FFF"
										/>
									)}
								</TouchableOpacity>
							</View>

							<View style={styles.actionSpanWrapper}>
								<TouchableOpacity
									style={styles.actionSpan}
									activeOpacity={0.6}
									onPress={onResendConfirmationCode}
								>
									<Text style={styles.actionSpanText}>
										Reenviar e-mail de confirmação
									</Text>
								</TouchableOpacity>

								<TouchableOpacity
									style={styles.actionSpan}
									activeOpacity={0.6}
									onPress={() =>
										navigate('ForgotPassword' as never)
									}
								>
									<Text style={styles.actionSpanText}>
										Esqueci minha senha
									</Text>
								</TouchableOpacity>
							</View>

							<TouchableOpacity
								style={styles.button}
								activeOpacity={0.6}
								onPress={onLogin}
							>
								{!loading ? (
									<Text style={styles.buttonText}>
										Fazer login
									</Text>
								) : (
									<Loading color="#FFF" size="small" />
								)}
							</TouchableOpacity>

							<TouchableOpacity
								style={styles.button}
								activeOpacity={0.6}
								onPress={() => navigate('Register' as never)}
							>
								{!loading ? (
									<Text style={styles.buttonText}>
										Cadastrar
									</Text>
								) : (
									<Loading color="#FFF" size="small" />
								)}
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>

			<StatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#edf5ee',
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
	screenTitle: {
		color: '#0A0A0A',
		fontFamily: theme.FONT_FAMILY.BOLD,
		fontSize: theme.FONT_SIZE.LG,
		marginTop: 35,
	},
	inputsContainer: {
		marginTop: 60,
		width: '80%',
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
	secondaryLoginSpan: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 50,
	},
	secondaryLoginSpanText: {
		color: '#fff',
		fontSize: theme.FONT_SIZE.MD,
	},
	secondaryLoginButton: {
		backgroundColor: '#0C244F',
		borderColor: '#4A5477',
		borderWidth: 1,
		width: 140,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 2,
		paddingVertical: 10,
		marginTop: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
		flexDirection: 'row',
	},
	secondaryLoginButtonText: {
		fontSize: theme.FONT_SIZE.MD,
		fontWeight: '500',
		color: '#FFFFFF',
	},
	actionSpanWrapper: {
		marginTop: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
