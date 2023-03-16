import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface RadioButtonProps {
	options: string[];
	onSelect: (option: string) => void;
	setSelectedOption: (option: string) => void;
	selectedOption: string;
}

export function RadioButton({
	options,
	onSelect,
	selectedOption,
	setSelectedOption,
}: RadioButtonProps) {
	const handleOptionSelect = (option: string) => {
		onSelect(option);
		setSelectedOption(option);
	};

	return (
		<View>
			{options.map((option, index) => (
				<TouchableOpacity
					key={index}
					style={styles.optionContainer}
					onPress={() => handleOptionSelect(option)}
				>
					<View style={styles.radioContainer}>
						{selectedOption === option && (
							<MaterialIcons
								name="radio-button-checked"
								size={24}
								color="#40B5A2"
							/>
						)}
						{selectedOption !== option && (
							<MaterialIcons
								name="radio-button-unchecked"
								size={24}
								color="#BDBDBD"
							/>
						)}
					</View>
					<Text style={styles.optionLabel}>{option}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	optionContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
	radioContainer: {
		marginRight: 10,
	},
	optionLabel: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});
