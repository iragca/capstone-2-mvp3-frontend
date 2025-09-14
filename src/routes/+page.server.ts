import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import type { InferenceRequest } from '$lib/types';
import { fail } from '@sveltejs/kit';

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

		function basicError(message: string) {
			return {
				success: false,
				error: message,
				username,
				userId,
				topK,
				strictUsername
			};
		}

		if (username.length === 0) {
			return fail(400, basicError('Username is required'));
		}

		const body: InferenceRequest = {
			username: username,
			user_id: userId.length > 0 ? userId : null,
			options: {
				top_k: topK ? parseInt(topK.toString()) : 10,
				strict_username: strictUsername === 'on' ? true : false
			}
		};

		try {
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
			return { success: true, data: data.data };
		} catch (error) {
			console.error('Fetch error:', error);
			return fail(500, basicError('Internal Server Error'));
		}
	}
} satisfies Actions;
