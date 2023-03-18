import {
	View,
	ImageBackground,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function ProfileHeader({ banner, onBannerChange }: any) {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={{
					uri: banner ? banner : 'https://via.placeholder.com/150',
				}}
				style={styles.background}
			>
				<TouchableOpacity
					onPress={onBannerChange}
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
