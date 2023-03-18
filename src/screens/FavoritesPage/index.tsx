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
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 16,
	},
	location: {
		marginLeft: 8,
		fontSize: 16,
		fontWeight: 'bold',
	},
	filterButton: {
		marginLeft: 'auto',
		// backgroundColor: '#40B5A2',
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 4,
	},
	filterButtonContainer: {
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		width: 28,
		height: 28,
	},
	filterCount: {
		position: 'absolute',
		top: -8,
		right: -8,
		backgroundColor: '#40B5A2',
		borderRadius: 10,
		width: 20,
		height: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	filterCountText: {
		color: 'white',
		fontSize: 12,
	},
	filterButtonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	filtersContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 16,
	},
	filtersTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		marginRight: 10,
	},
	filterTags: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	filterTag: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#e2e2e2',
		padding: 8,
		marginRight: 10,
		marginBottom: 10,
		borderRadius: 8,
	},
	filterTagText: {
		fontSize: 14,
		marginRight: 5,
	},
	card: {
		width: '100%',
		borderRadius: 4,
		marginTop: 16,
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	cardDescription: {
		marginTop: 8,
		fontSize: 16,
	},
});
