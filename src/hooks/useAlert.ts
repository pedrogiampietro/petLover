import { Alert } from 'react-native';

interface ArgsI {
	title?: string;
	message: string;
	cancelText?: string;
	cancelAction?: () => void;
	confirmText?: string;
	confirmAction?: () => void;
}

export const useAlert = () => {
	const showAlert = (args: ArgsI) =>
		Alert.alert(args.title ?? 'Alerta', args.message, [
			{
				text: args.cancelText ?? 'Cancelar',
				onPress: () => (args.cancelAction ? args.cancelAction() : null),
				style: 'cancel',
			},
			{
				text: args.confirmText ?? 'OK',
				onPress: () =>
					args.confirmAction ? args.confirmAction() : null,
			},
		]);

	return {
		showAlert,
	};
};
