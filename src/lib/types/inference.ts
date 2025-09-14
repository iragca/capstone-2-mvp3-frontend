interface InferenceOptions {
	top_k: number;
	strict_username: boolean;
}

interface InferenceRequest {
	username: string;
	options: InferenceOptions;
}

export type HateSpeechClass = '0' | '1' | '2' | '';

export interface Tweet {
	/** Unique identifier of the tweet */
	tweet_id: string;

	/** Raw tweet text content */
	text: string;

	/** Direct URL to the tweet */
	status_link: string;

	/** Identifier of the authoring user */
	user_id: string;

	/** Whether the tweet is flagged as extremist */
	is_extremist?: boolean;

	/** Whether the tweet has been annotated */
	is_annotated?: boolean;

	/** URL of the tweet this one replies to */
	in_reply_to_status_link?: string;

	/** ID of the tweet this one replies to */
	in_reply_to_status_id?: string;

	/** Number of bookmarks */
	bookmark_count: number;

	/** Number of views (impressions) */
	views?: number;

	/** Number of retweets */
	retweet_count: number;

	/** Number of likes */
	favorite_count: number;

	/** Number of replies */
	reply_count: number;

	/** Number of quote tweets */
	quote_count: number;

	/** ID of the root conversation this tweet belongs to */
	conversation_id: string;

	/** ID of the retweeted tweet if applicable */
	retweet_status_id?: string;

	/** ID of the quoted tweet if applicable */
	quoted_status_id?: string;

	/** Community note attached to the tweet */
	community_note?: string;

	/** ISO language code of the tweet text */
	language: string;

	/** Client/application used to post the tweet */
	source?: string;

	/** Timestamp of creation (ISO format recommended) */
	creation_date: string;

	/** Whether the tweet contains a BLM-related hashtag */
	has_blm_hashtag: boolean;

	/** Whether replies have been fetched */
	fetched_replies?: boolean;

	/** Whether this is a reply to a BLM-related tweet */
	is_reply_to_blm?: boolean;

	/**
	 * Hate speech classification:
	 * "0" = not hateful,
	 * "1" = mildly hateful,
	 * "2" = highly hateful,
	 * "" = unset
	 */
	is_hateful?: HateSpeechClass;
}
type ScoredTweet = {
	node: Tweet;
	score: number;
};
type ScoredTweetList = ArrayLike<ScoredTweet>;

interface Response {
	success: boolean;
	data: ScoredTweetList;
}

export type { InferenceRequest, InferenceOptions, Response, ScoredTweet, ScoredTweetList };
