import { useState } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	StatusBar as RNStatusBar,
	Platform,
	StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export function DetailProfileAnimal() {
	const [name, setName] = useState<string>('Max');
	const [type, setType] = useState<string>('Dog');
	const [details, setDetails] = useState<[]>([]);
	const { navigate } = useNavigation();

	const handleSave = () => {
		// todoo
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigate('Profile' as never)}>
					<Ionicons name="arrow-back" size={30} color="black" />
				</TouchableOpacity>
			</View>

			<Image
				source={{ uri: 'https://picsum.photos/id/237/200/300' }}
				style={styles.avatar}
			/>

			<Text style={styles.name}>{name}</Text>
			<View style={styles.inputContainer}>
				<View style={styles.inputIcon}>
					<AntDesign name="tags" size={24} color="#40B5A2" />
					<Text style={styles.inputLabel}>Nome</Text>
				</View>
				<TextInput
					style={styles.input}
					value={name}
					onChangeText={setName}
				/>
				<View style={styles.inputSeparator} />
			</View>
			<View style={styles.inputContainer}>
				<View style={styles.inputIcon}>
					<MaterialCommunityIcons
						name="dog"
						size={24}
						color="#40B5A2"
					/>
					<Text style={styles.inputLabel}>Tipo</Text>
				</View>
				<TextInput
					style={styles.input}
					value={type}
					onChangeText={setType}
				/>
				<View style={styles.inputSeparator} />
			</View>
			<View style={styles.inputContainer}>
				<View style={styles.inputIcon}>
					<MaterialIcons
						name="sticky-note-2"
						size={24}
						color="#40B5A2"
					/>
					<Text style={styles.inputLabel}>Detalhes do Pet</Text>
				</View>
				<TouchableOpacity
				// onPress={() => navigate('DetailProfileAnimal' as never)}
				>
					<Text>Acessar detalhes ➔</Text>
				</TouchableOpacity>
				<View style={styles.inputSeparator} />
			</View>
			<TouchableOpacity style={styles.saveButton} onPress={handleSave}>
				<Text style={styles.saveButtonText}>Salvar</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		width: 200,
		height: 200,
		borderRadius: 100,
		marginBottom: 20,
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	inputContainer: {
		width: '90%',
		flexDirection: 'column',
		alignItems: 'stretch',
		marginBottom: 10,
		paddingHorizontal: 20,
	},
	inputIcon: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 5,
	},
	inputIconImage: {
		width: 20,
		height: 20,
		marginRight: 10,
	},
	inputLabel: {
		marginLeft: 5,
		fontSize: 18,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
	},
	inputSeparator: {
		flex: 1,
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		margin: 15,
	},
	saveButton: {
		width: '90%',
		backgroundColor: '#40B5A2',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	saveButtonText: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	header: {
		width: '100%',
		display: 'flex',
		marginLeft: 25,
		position: 'relative',
	},
});
