import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import type { InferenceRequest } from '$lib/types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const username = formData.get('username') as string;
		const userId = (formData.get('userId') ?? '') as string;
		const topK = formData.get('top-k');
		const strictUsername = formData.get('strict-username');

		const endpoint = 'http://localhost:8001/inference';

		if (username.length === 0) {
			return { success: false, error: 'Username is required' };
		}

		const body: InferenceRequest = {
			username: username,
			user_id: userId.length > 0 ? userId : null,
			options: {
				top_k: topK ? parseInt(topK.toString()) : 5,
				strict_username: strictUsername === 'on' ? true : false
			}
		};

		console.log('Request Body:', body);

		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		if (!response.ok) {
			console.error('Error:', response.statusText);
			return { success: false, error: response.statusText };
		}

		const data = await response.json();
		console.log('Success:', data);
		return { success: true, data: data };
	}
} satisfies Actions;
