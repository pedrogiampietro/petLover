import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';

export function FilterModal({ isVisible, onClose }: any) {
	return (
		<Modal
			isVisible={isVisible}
			onBackdropPress={onClose}
			animationIn="slideInUp"
			animationOut="slideOutDown"
		>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'white',
				}}
			>
				<TouchableOpacity
					onPress={onClose}
					style={{ position: 'absolute', top: 10, right: 10 }}
				>
					<AntDesign name="close" size={24} color="black" />
				</TouchableOpacity>

				<Text>Modal de Filtros</Text>

				<Text
					style={{
						fontSize: 24,
						fontWeight: 'bold',
						marginBottom: 20,
					}}
				>
					Filtros
				</Text>
				<TextInput
					placeholder="Nome"
					style={{
						borderWidth: 1,
						borderColor: '#ccc',
						padding: 10,
						marginBottom: 20,
						width: '100%',
					}}
				/>

				<Picker
					selectedValue={null}
					style={{ height: 50, width: '100%', marginBottom: 20 }}
					onValueChange={(itemValue, itemIndex) => {}}
				>
					<Picker.Item label="Selecione um Estado" value={null} />
					<Picker.Item label="São Paulo" value="SP" />
					<Picker.Item label="Rio de Janeiro" value="RJ" />
					<Picker.Item label="Minas Gerais" value="MG" />
				</Picker>
				<TouchableOpacity
					onPress={() => {}}
					style={{
						backgroundColor: 'blue',
						padding: 10,
						borderRadius: 5,
					}}
				>
					<Text style={{ color: 'white' }}>Aplicar Filtros</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
}
