import React, { createContext, useState, ReactNode } from 'react';
import { api } from '../services/api';

interface Tokens {
	token: string;
	refreshToken: string;
}

interface UserData {
	id: string;
	name: string;
	email: string;
	tokens: Tokens;
}

export interface User {
	id: string;
	name: string;
	email: string;
}

export interface AuthContextData {
	user: User | null;
	login: (username: string, password: string) => Promise<void>;
	logout: () => void;
	loading: boolean;
}

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
	{} as AuthContextData
);

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(false);

	const login = async (username: string, password: string) => {
		setLoading(true);
		try {
			const response = await api.post<UserData>('/authenticate/sign-in', {
				username,
				password,
			});
			const { id, name, email } = response.data;
			const user = { id, name, email };
			setUser(user);
			api.defaults.headers.common[
				'Authorization'
			] = `Bearer ${response.data.tokens.token}`;
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const logout = () => {
		setUser(null);
		api.defaults.headers.common['Authorization'] = undefined;
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
}
