import AppIntroSlider from 'react-native-app-intro-slider';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import theme from '../../styles/theme';

const slides = [
	{
		key: 1,
		image: require('../../assets/slide_1.png'),
		title: 'Vamos achar um Pet Lover?',
		text: 'Encontre a pessoa ideal para distribuir amor e carinho para seu pet',
	},
	{
		key: 2,
		image: require('../../assets/slide_2.png'),
		title: 'Cuidados e saúde',
		text: 'Você poderá encontrar pessoas para caminhar, para exercicios e até para passar uma colonia de ferias!',
	},
	{
		key: 3,
		image: require('../../assets/slide_4.png'),
		title: 'Comece agora mesmo!',
		text: 'Vamos fazer um rápido cadastro e você estará pronto para iniciar a jornada',
	},
];

const RenderItem = ({ item }: any) => {
	return (
		<View style={styles.container}>
			<Image source={item.image} style={{ marginBottom: 50 }} />
			<Text style={styles.titleText}>{item.title}</Text>
			<Text style={styles.subtitleText}>{item.text}</Text>
		</View>
	);
};

export function SlideIntroduction({ navigation }: any) {
	return (
		<>
			<AppIntroSlider
				renderItem={RenderItem}
				data={slides}
				showDoneButton={false}
				showNextButton={false}
				dotStyle={{
					backgroundColor: '#40B5A2',
				}}
				activeDotStyle={{
					backgroundColor: '#d5d5d5',
				}}
			/>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Login')}
					activeOpacity={0.8}
				>
					<Text style={styles.buttonText}>Acessar minha conta</Text>
				</TouchableOpacity>
			</View>

			<StatusBar style="light" />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		fontSize: 26,
		color: '#0A0A0A',
		textAlign: 'center',
		fontFamily: theme.FONT_FAMILY.BOLD,
	},
	subtitleText: {
		paddingTop: 22,
		paddingBottom: 10,
		fontSize: 18,
		color: '#0A0A0A',
		textAlign: 'center',
		fontFamily: theme.FONT_FAMILY.REGULAR,
	},
	buttonContainer: {
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		height: 50,
		backgroundColor: '#40B5A2',
		width: 280,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
		borderRadius: 2,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFFFFF',
		textTransform: 'uppercase',
	},
});
