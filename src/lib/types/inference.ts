interface InferenceOptions {
	top_k: number;
	strict_username: boolean;
}

interface InferenceRequest {
	username: string;
	user_id: string | null;
	options: InferenceOptions;
}


export type { InferenceRequest, InferenceOptions };