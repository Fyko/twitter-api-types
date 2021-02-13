import type { BaseQuery, CountryCodes, Snowflake } from '../../common';
import type {
	APICollection,
	APICollectionID,
	APICollectionObjects,
	APICollectionResponse,
	APICollectionTimelineOrder,
	APITweet,
} from '../payloads';

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-entries#parameters
 */
export interface APIGetCollectionsEntriesParameters {
	id: `custom-${Snowflake}`;
	count?: number;
	max_position?: number;
	min_position?: number;
}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-entries
 */
export type APIGetCollectionsEntries = APICollection;

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-list#parameters
 */
export interface APIGetCollectionsListParameters {
	user_id: Snowflake;
	screen_name: string;
	tweet_id?: Snowflake;
	count?: number;
	cursor?: string;
}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-list
 */
export interface APIGetCollectionsList {
	objects: APICollectionObjects;
	response: APICollectionResponse;
}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-show#parameters
 */
export interface APIGetCollectionsShowParameters extends BaseQuery<APICollectionID> {}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-show#parameters
 */
export type APIGetCollectionsShow = APIGetCollectionsList;

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-create#parameters
 */
export interface APIPostCollectionsCreateParameters {
	name: string;
	description?: string;
	url?: string;
	timeline_order?: APICollectionTimelineOrder;
}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-create
 */
export type APIPostCollectionsCreate = APIGetCollectionsList;

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-destroy#parameters
 */
export interface APIPostCollectionsDestroyParameters extends BaseQuery<APICollectionID> {}

/**
 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-destroy#parameters
 */
export interface APIPostCollectionsDestroy {
	destroyed: true;
}

export type RESTGetStatusesLookup = APITweet & {
	current_user_retweet: { id: Snowflake; id_str: Snowflake };
	scopes: Record<string, string>;
	withheld_copyright?: boolean;
	withheld_in_countries: CountryCodes[];
	withheld_scope: 'status' | 'user';
};
