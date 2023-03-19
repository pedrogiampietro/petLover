import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	StatusBar as RNStatusBar,
	Platform,
	ScrollView,
} from 'react-native';
import { Card } from '../../components/Card';
import { FilterModal } from '../../components/FilterModal';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MenuBottom } from '../../components/MenuBottom';
import { useBaseData } from '../../hooks/useBaseData';

type Filters = {
	gender?: string;
	priceRange?: [number, number];
	searchTerm?: string;
	state?: string;
	[key: string]: any;
};

export function Home() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [filters, setFilters] = useState<Filters>({});
	const { jobs } = useBaseData();

	const handleOpenModal = () => {
		setIsModalVisible(true);
	};

	const handleCloseModal = () => {
		setIsModalVisible(false);
	};

	function handleFilters(filters: any) {
		setFilters(filters);
	}

	const removeFilter = (key: string) => {
		const updatedFilters = { ...filters };
		delete updatedFilters[key];
		setFilters(updatedFilters);
	};

	return (
		<View style={styles.container}>
			<View style={styles.viewContainer}>
				<View style={styles.header}>
					<Ionicons name="location-sharp" size={32} color="#333" />
					<Text style={styles.location}>São Paulo</Text>
					<TouchableOpacity
						style={styles.filterButton}
						onPress={handleOpenModal}
					>
						<View style={styles.filterButtonContainer}>
							<AntDesign name="filter" size={28} color="black" />
							{Object.keys(filters).reduce((count, key) => {
								if (
									((key === 'gender' ||
										key === 'state' ||
										key === 'searchTerm') &&
										!filters[key]) ||
									(key === 'priceRange' &&
										filters[key][0] === 0 &&
										filters[key][1] === 0)
								) {
									return count;
								}
								return count + 1;
							}, 0) > 0 && (
								<View style={styles.filterCount}>
									<Text style={styles.filterCountText}>
										{Object.keys(filters).reduce(
											(count, key) => {
												if (
													((key === 'gender' ||
														key === 'state' ||
														key === 'searchTerm') &&
														!filters[key]) ||
													(key === 'priceRange' &&
														filters[key][0] === 0 &&
														filters[key][1] === 0)
												) {
													return count;
												}
												return count + 1;
											},
											0
										)}
									</Text>
								</View>
							)}
						</View>
					</TouchableOpacity>
					<FilterModal
						isVisible={isModalVisible}
						onClose={handleCloseModal}
						onApplyFilters={handleFilters}
					/>
				</View>
				<View style={styles.filtersContainer}>
					<View style={styles.filterTags}>
						{filters.gender && (
							<TouchableOpacity style={styles.filterTag}>
								<Text style={styles.filterTagText}>
									{filters.gender}
								</Text>
								<TouchableOpacity
									onPress={() => removeFilter('gender')}
								>
									<MaterialIcons
										name="close"
										size={16}
										color="black"
									/>
								</TouchableOpacity>
							</TouchableOpacity>
						)}
						{filters.priceRange && (
							<TouchableOpacity style={styles.filterTag}>
								<Text
									style={styles.filterTagText}
								>{`R$ ${filters.priceRange[0]} - R$ ${filters.priceRange[1]}`}</Text>
								<TouchableOpacity
									onPress={() => removeFilter('priceRange')}
								>
									<MaterialIcons
										name="close"
										size={16}
										color="black"
									/>
								</TouchableOpacity>
							</TouchableOpacity>
						)}
						{filters.searchTerm && (
							<TouchableOpacity style={styles.filterTag}>
								<Text style={styles.filterTagText}>
									{filters.searchTerm}
								</Text>
								<TouchableOpacity
									onPress={() => removeFilter('searchTerm')}
								>
									<MaterialIcons
										name="close"
										size={16}
										color="black"
									/>
								</TouchableOpacity>
							</TouchableOpacity>
						)}

						{filters.state && (
							<TouchableOpacity style={styles.filterTag}>
								<Text style={styles.filterTagText}>
									{filters.state}
								</Text>
								<TouchableOpacity
									onPress={() => removeFilter('state')}
								>
									<MaterialIcons
										name="close"
										size={16}
										color="black"
									/>
								</TouchableOpacity>
							</TouchableOpacity>
						)}
					</View>
				</View>
				<ScrollView>
					<View style={styles.card}>
						{jobs.map((job) => {
							return <Card key={job.id} {...job} />;
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
