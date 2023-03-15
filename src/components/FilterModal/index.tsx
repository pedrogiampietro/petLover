import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { PriceFilter } from '../FilterPrice';
import { RadioButton } from '../RadioButton';

export function FilterModal({ isVisible, onClose }: any) {
	const [gender, setGender] = useState<string>('');

	return (
		<Modal
			isVisible={isVisible}
			onBackdropPress={onClose}
			animationIn="slideInUp"
			animationOut="slideOutDown"
			style={{ margin: 0 }}
			propagateSwipe={true}
		>
			<View
				style={{
					flex: 1,
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

				<Text style={styles.titleText}>Filtros</Text>
				<View style={styles.inputsContainer}>
					<View style={styles.inputBox}>
						<Feather name="user" size={22} color="#0A0A0A" />

						<TextInput
							style={styles.input}
							placeholder="Buscar ..."
							placeholderTextColor="#7D7D7D"
							keyboardType="default"
							// value={email}
							// onChangeText={onEmailChange}
							// editable={!loading}
						/>
					</View>

					<Picker
						selectedValue={null}
						style={{ height: 50, width: '100%', marginBottom: 20 }}
						onValueChange={(itemValue, itemIndex) => {}}
					>
						<Picker.Item label="Buscar por estado" value={null} />
						<Picker.Item label="São Paulo" value="SP" />
						<Picker.Item label="Rio de Janeiro" value="RJ" />
						<Picker.Item label="Minas Gerais" value="MG" />
					</Picker>

					<Text style={styles.titleText}>Faixa de preço:</Text>

					<PriceFilter />

					<Text style={styles.titleText}>Genero</Text>
					<RadioButton
						options={['Macho', 'Femea']}
						onSelect={setGender}
					/>
				</View>

				<View
					style={{
						flex: 1,
						justifyContent: 'flex-end',
						width: '100%',
					}}
				>
					<TouchableOpacity
						onPress={() => {}}
						style={{
							backgroundColor: '#40B5A2',
							padding: 20,
							width: '100%',
						}}
					>
						<Text style={{ color: 'white', textAlign: 'center' }}>
							Aplicar Filtros
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
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
	titleText: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 20,
	},
});
