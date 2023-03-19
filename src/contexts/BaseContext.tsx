import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

export const BaseContext = createContext<ContextI>({} as ContextI);

interface ContextPropsI {
	children: ReactNode;
}

interface ContextI {
	jobs: Job[];
	isLoading: boolean;
}

interface Animal {
	id: string;
	name: string;
	age: string;
	size: string;
	breed: string;
	sex: string;
	color: string;
	image: string;
	createdAt: string;
	updatedAt: string;
	ownerId: string;
}

export interface Job {
	id: string;
	name: string;
	animalId: string;
	offerType: string;
	pricePerHour: number | null;
	pricePerDay: number;
	createdAt: string;
	updatedAt: string;
	animal: {
		id: string;
		name: string;
		age: string;
		size: string;
		breed: string;
		sex: string;
		color: string;
		image: string;
		createdAt: string;
		updatedAt: string;
		ownerId: string;
	};
}

export const BaseContextProvider = (props: ContextPropsI) => {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		const getAllJobs = async () => {
			try {
				const response = await api.get<Job[]>('/job');
				setJobs(response.data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		getAllJobs();
	}, []);

	return (
		<BaseContext.Provider value={{ jobs, isLoading }}>
			{props.children}
		</BaseContext.Provider>
	);
};
