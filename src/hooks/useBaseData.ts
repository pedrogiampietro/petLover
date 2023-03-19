import { useContext } from 'react';
import { BaseContext } from '../contexts/BaseContext';

export function useBaseData() {
	const context = useContext(BaseContext);

	return context;
}
