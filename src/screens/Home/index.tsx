import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	StatusBar as RNStatusBar,
	Platform,
	ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from '../../components/Card';

export function Home() {
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.viewContainer}>
					<View style={styles.header}>
						<Ionicons
							name="location-sharp"
							size={32}
							color="#333"
						/>
						<Text style={styles.location}>São Paulo</Text>
						<TouchableOpacity style={styles.filterButton}>
							<Text style={styles.filterButtonText}>Filtrar</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.filtersContainer}>
						<Text style={styles.filtersTitle}>Filtros:</Text>
						<View style={styles.filterTags}>
							<TouchableOpacity style={styles.filterTag}>
								<Text style={styles.filterTagText}>Tag 1</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.filterTag}>
								<Text style={styles.filterTagText}>Tag 2</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.filterTag}>
								<Text style={styles.filterTagText}>Tag 3</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.card}>
						{[1, 2, 3, 4].map((_, index) => {
							return <Card key={index} />;
						})}
					</View>

					<View style={styles.bottomMenu}>
						<TouchableOpacity style={styles.bottomMenuItem}>
							<Ionicons name="home" size={24} color="#333" />
							<Text style={styles.bottomMenuItemText}>Home</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.bottomMenuItem}>
							<Ionicons name="heart" size={24} color="#333" />
							<Text style={styles.bottomMenuItemText}>
								Favoritos
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.bottomMenuItem}>
							<Ionicons name="person" size={24} color="#333" />
							<Text style={styles.bottomMenuItemText}>
								Perfil
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
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
		paddingVertical:
			Platform.OS === 'android' ? RNStatusBar.currentHeight + 40 : 40,
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
		backgroundColor: '#00aeef',
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 4,
	},
	filterButtonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	filtersContainer: {
		marginTop: 16,
	},
	filtersTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	filterTags: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 8,
	},
	filterTag: {
		backgroundColor: '#00aeef',
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 4,
		marginRight: 8,
		marginBottom: 8,
	},
	filterTagText: {
		color: '#fff',
		fontWeight: 'bold',
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
	bottomMenu: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#fff',
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderTopWidth: 1,
		borderTopColor: '#ccc',
	},
	bottomMenuItem: {
		alignItems: 'center',
	},
	bottomMenuItemText: {
		fontSize: 12,
		fontWeight: 'bold',
		marginTop: 4,
	},
});
