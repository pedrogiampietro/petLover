import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Map } from '../../screens/Map';

export function Animals() {
	const [animals, setAnimals] = useState([]);

	useEffect(() => {
		// Carrega a lista de animais de serviço da API

		setAnimals([
			{
				id: 1,
				name: 'Buddy',
				type: 'Dog',
				latitude: -23.5489,
				longitude: -46.6388,
				image: 'https://example.com/buddy-avatar.jpg',
			},
			{
				id: 2,
				name: 'Mittens',
				type: 'Cat',
				latitude: -23.5513,
				longitude: -46.6367,
				image: 'https://example.com/mittens-avatar.jpg',
			},
			{
				id: 3,
				name: 'Rex',
				type: 'Dog',
				latitude: -23.5567,
				longitude: -46.6358,
				image: 'https://example.com/rex-avatar.jpg',
			},
			{
				id: 4,
				name: 'Fluffy',
				type: 'Rabbit',
				latitude: -23.5471,
				longitude: -46.6325,
				image: 'https://example.com/fluffy-avatar.jpg',
			},
		]);
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<Map animals={animals} />
		</View>
	);
}
