import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

const historyData = [
	{
		id: 1,
		animalName: 'Cachorro',
		totalPrice: 50.0,
		date: '2022-01-01',
		image: 'https://via.placeholder.com/150',
	},
	{
		id: 2,
		animalName: 'Gato',
		totalPrice: 30.0,
		date: '2022-02-15',
		image: 'https://via.placeholder.com/150',
	},
];

const HistoryItem = ({ item }: any) => {
	return (
		<View style={{ flexDirection: 'row', marginVertical: 10 }}>
			<Image
				source={{ uri: item.image }}
				style={{ width: 100, height: 100 }}
			/>
			<View style={{ marginLeft: 10 }}>
				<Text>ID: {item.id}</Text>
				<Text>Nome do animal: {item.animalName}</Text>
				<Text>Preço total: R$ {item.totalPrice.toFixed(2)}</Text>
				<Text>Data: {item.date}</Text>
			</View>
		</View>
	);
};

export function HistoryProfile() {
	const [history, setHistory] = useState([]);

	useEffect(() => {
		setHistory(historyData);
	}, []);

	return (
		<View>
			<Text>Histórico:</Text>
			<FlatList
				data={history}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => <HistoryItem item={item} />}
			/>
		</View>
	);
}
