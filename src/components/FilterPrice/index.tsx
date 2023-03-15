import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export function PriceFilter() {
	const [priceRange, setPriceRange] = useState<number[]>([0, 100]);

	const handlePriceRangeChange = (values: number[]) => {
		setPriceRange([values[0], values[1]]);
	};
	return (
		<View style={styles.container}>
			<MultiSlider
				values={priceRange}
				sliderLength={300}
				onValuesChange={handlePriceRangeChange}
				min={0}
				max={100}
				step={1}
				allowOverlap={false}
				snapped
				markerStyle={styles.marker}
				trackStyle={styles.track}
				selectedStyle={styles.selectedTrack}
			/>
			<View style={styles.textContainer}>
				<Text
					style={[
						styles.label,
						{ left: (priceRange[0] / 100) * 270 },
					]}
				>
					R$: {priceRange[0]}
				</Text>
				<Text
					style={[
						styles.label,
						{ left: (priceRange[1] / 100) * 270 },
					]}
				>
					R$: {priceRange[1]}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 50,
	},
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 300,
		position: 'absolute',
		top: -28,
	},
	label: {
		fontSize: 16,
		fontWeight: 'bold',
		position: 'absolute',
	},
	marker: {
		backgroundColor: '#40B5A2',
		borderWidth: 1,
		borderColor: '#FFF',
		height: 20,
		width: 20,
		borderRadius: 10,
		elevation: 4,
	},
	track: {
		height: 4,
		backgroundColor: '#BDBDBD',
	},
	selectedTrack: {
		backgroundColor: '#40B5A2',
	},
});
