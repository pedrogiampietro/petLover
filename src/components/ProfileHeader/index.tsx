import {
	View,
	ImageBackground,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

export function ProfileHeader({ banner, onBannerChange }: any) {
	const pickImage = async () => {
		const { status } =
			await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (status !== 'granted') {
			alert(
				'A permissão para acessar a biblioteca de mídia é necessária.'
			);
			return;
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			onBannerChange(result.assets[0].uri);
		}
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={{
					uri: banner ? banner : 'https://via.placeholder.com/150',
				}}
				style={styles.background}
			>
				<TouchableOpacity
					onPress={pickImage}
					style={styles.changeBannerIconWrapper}
				>
					<FontAwesome name="photo" size={40} color="white" />
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'lightblue',
		height: 200,
	},
	background: {
		width: '100%',
		height: '100%',
		opacity: 0.8,
	},
	changeBannerIconWrapper: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		// position: 'absolute',
		alignSelf: 'center',
		// bottom: 5,
		backgroundColor: 'transparent',
		padding: 5,
	},
});
