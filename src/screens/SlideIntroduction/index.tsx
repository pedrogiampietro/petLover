import AppIntroSlider from 'react-native-app-intro-slider';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const slides = [
	{
		key: 1,
		image: require('../../assets/slide_1.png'),
		title: 'Vamos mudar a vida das pessoas?',
		text: 'Se prepare para contribuir com diversas pessoas.',
	},
	{
		key: 2,
		image: require('../../assets/slide_2.png'),
		title: 'Contribua com diversas ONGs',
		text: 'Você poderá contribuir sem investir dinheiro além de desapegar de bens materiais',
	},
	{
		key: 3,
		image: require('../../assets/slide_3.png'),
		title: 'Receba os agradecimentos',
		text: 'Para cada item doado você recebe uma mensagem de agradecimento direto da pessoa que recebeu',
	},
	{
		key: 4,
		image: require('../../assets/slide_4.png'),
		title: 'Comece agora mesmo!',
		text: 'Vamos fazer um rápido cadastro e você estará pronto para iniciar a jornada',
	},
];

const RenderItem = ({ item }: any) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#071834',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Image source={item.image} style={{ marginBottom: 50 }} />
			<Text
				style={{
					fontSize: 26,
					color: '#FFFFFF',
					textAlign: 'center',
					fontWeight: 'bold',
					fontFamily: 'Poppins',
				}}
			>
				{item.title}
			</Text>
			<Text
				style={{
					paddingTop: 22,
					paddingBottom: 10,
					fontSize: 18,
					color: '#FFFFFF',
					textAlign: 'center',
					fontFamily: 'Poppins',
				}}
			>
				{item.text}
			</Text>
		</View>
	);
};

export function SlideIntroduction() {
	return (
		<>
			<AppIntroSlider
				renderItem={RenderItem}
				data={slides}
				showDoneButton={false}
				showNextButton={false}
			/>
			<View
				style={{
					backgroundColor: '#071834',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity
					style={{
						height: 50,
						backgroundColor: '#F91064',
						width: 280,
						justifyContent: 'center',
						alignItems: 'center',
						marginBottom: 30,
						borderRadius: 2,
					}}
				>
					<Text
						style={{
							fontSize: 16,
							fontWeight: 'bold',
							color: '#FFFFFF',
							textTransform: 'uppercase',
						}}
					>
						Acessar minha conta
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}
