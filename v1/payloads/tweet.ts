import type { BaseQuery, Snowflake } from '../../common';
import type { APIEntities } from './entity';
import type { APIPlace } from './place';
import type { APIUser } from './user';

export type APICollectionID = `custom-${Snowflake}`;

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/overview/response_structures
 */
export interface APICollection {
	objects: APICollectionObjects;
}

export interface APICollectionObjects {
	timelines: Record<APICollectionID, APICollectionTimeline>;
	tweets: Record<Snowflake, APITweet>;
	response: APICollectionResponse;
}

export interface APICollectionResponse {
	position: APICollectionResponsePosition;
	timeline_id: APICollectionID;
}

export interface APICollectionResponsePosition {
	max_position: string;
	min_position: string;
	was_truncated: boolean;
}

export interface APICollectionTimeline {
	feature_context: string;
	tweet: APICollectionTimelineTweet;
}

export interface APICollectionTimelineTweet extends BaseQuery {
	sort_index: string;
}

export enum APICollectionTimelineOrder {
	CurationReverseChron = 'curation_reverse_chron',
	TweetCron = 'tweet_chron',
	TweetReverseChron = 'tweet_reverse_chron',
}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/object-model/tweet
 */
export interface APITweet {
	created_at: string;
	id: Snowflake;
	id_str: Snowflake;
	text: string;
	source: string;
	truncated: boolean;
	in_reply_to_status_id: Snowflake | null;
	in_reply_to_status_id_str: Snowflake | null;
	in_reply_to_user_id: Snowflake | null;
	in_reply_to_user_id_str: Snowflake | null;
	in_reply_to_screen_name: string | null;
	user: APIUser;
	coordinates: GeoJSON.Point | null;
	place: APIPlace[] | null;
	quoted_status_id?: Snowflake;
	quoted_status_id_str?: Snowflake;
	is_quoted_status: boolean;
	quoted_status?: APITweet;
	retweeted_status?: APITweet;
	quote_count: number | null;
	reply_count: number;
	retweet_count: number;
	favorite_count: number | null;
	entities: APIEntities;
}
