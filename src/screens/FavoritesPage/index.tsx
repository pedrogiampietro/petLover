import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar as RNStatusBar,
	Platform,
	ScrollView,
} from 'react-native';
import { Card } from '../../components/Card';
import { MenuBottom } from '../../components/MenuBottom';

export function FavoriteDogProfilePage() {
	return (
		<View style={styles.container}>
			<View style={styles.viewContainer}>
				<Text>Favoritos</Text>

				<ScrollView>
					<View style={styles.card}>
						{[1, 2].map((_, index) => {
							return <Card key={index} id={index} />;
						})}
					</View>
				</ScrollView>

				<MenuBottom />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 16,
	},
	viewContainer: {
		flex: 1,
		paddingTop:
			Platform.OS === 'android' ? RNStatusBar.currentHeight + 5 : 5,
	},

	card: {
		width: '100%',
		borderRadius: 4,
		marginTop: 16,
	},
});
