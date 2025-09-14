interface InferenceOptions {
	top_k: number;
	strict_username: boolean;
}

interface InferenceRequest {
	username: string;
	user_id: string | null;
	options: InferenceOptions;
}

interface Node {
	id: string;
}

interface Response {
	success: boolean;
	data: ArrayLike<{ node: Node; score: number }>;
}

export type { InferenceRequest, InferenceOptions, Response };
