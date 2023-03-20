import axios from 'axios';

const api = axios.create({
	baseURL: 'http://10.0.101.18:3333',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export { api };
