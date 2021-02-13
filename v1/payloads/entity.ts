import type { Snowflake } from '../../common';

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/object-model/entities#hashtags
 */
export interface APIHashtagEntity {
	indices: [number, number];
	text: string;
}

export interface APISize {
	h: number;
	w: number;
	resize: 'crop' | 'fit';
}

export interface APISizes {
	thumb: APISize;
	large: APISize;
	medium: APISize;
	small: APISize;
}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/object-model/entities#media
 */
export interface APIMediaEntity {
	id: Snowflake;
	id_str: Snowflake;
	indices: [number, number];
	url: string;
	display_url: string;
	expanded_url: string;
	media_url: string;
	media_url_https: string;
	sizes: APISizes;
	source_status_id: number;
	source_status_id_str: string;
	type: string;
}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/object-model/entities#urls
 */
export interface APIUrlEntity {
	url: string;
	display_url: string;
	expanded_url: string;
	indices: [number, number];
}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/object-model/entities#mentions
 */
export interface APIUserMentionEntity {
	id: Snowflake;
	id_str: Snowflake;
	indices: [number, number];
	name: string;
	screen_name: string;
}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/object-model/entities#symbols
 */
export interface APISymbolEntity {
	indices: [number, number];
	text: string;
}

export interface APIPollOption {
	position: number;
	text: string;
}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/object-model/entities#polls
 */
export interface APIPollEntity {
	options: APIPollOption[];
	end_datetime: string;
	duration_minutes: string;
}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/object-model/entities
 */
export interface APIEntities {
	hashtags: APIHashtagEntity[];
	media: APIMediaEntity[];
	urls: APIUrlEntity[];
	user_mentions: APIUserMentionEntity[];
	symbols: APISymbolEntity[];
	polls: APIPollEntity[];
}
