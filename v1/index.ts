import type { Snowflake } from '../common';

export const APIVersion = '1.1';
export const Routes = {
	/**
	 * Route for:
	 * - GET collections/entries
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-entries
	 */
	collectionsEntries() {
		return `/collections/entries.json` as const;
	},

	/**
	 * Route for:
	 * - GET collections/list
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-list
	 */
	collectionsList() {
		return `/collections/list.json` as const;
	},

	/**
	 * Route for:
	 * - GET collections/show
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-show
	 */
	collectionsShow() {
		return `/collections/show.json` as const;
	},

	/**
	 * Route for:
	 * - POST collections/create
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-create
	 */
	collectionsCreate() {
		return `/collections/create.json` as const;
	},

	/**
	 * Route for:
	 * - POST collections/destroy
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-destroy
	 */
	collectionsDestroy() {
		return `/collections/destroy.json` as const;
	},

	/**
	 * Route for:
	 * - POST /collections/entries/add
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-entries-add
	 */
	collectionsEntriesAdd() {
		return `/collections/entries/add.json` as const;
	},

	/**
	 * Route for:
	 * - POST /collections/entries/curate
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-entries-curate
	 */
	collectionsEntriesCurate() {
		return `/collections/entries/curate.json` as const;
	},

	/**
	 * Route for:
	 * - POST /collections/entries/move
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-entries-move
	 */
	collectionsEntriesMove() {
		return `/collections/entries/move.json` as const;
	},

	/**
	 * Route for:
	 * - POST /collections/entries/remove
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-entries-remove
	 */
	collectionsEntriesRemove() {
		return `/collections/entries/remove.json` as const;
	},

	/**
	 * Route for:
	 * - POST /collections/update
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-entries-update
	 */
	collectionsUpdate() {
		return `/collections/entries/update.json` as const;
	},

	/**
	 * Route for:
	 * - POST statuses/filter
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/filter-realtime/api-reference/post-statuses-filter
	 */
	statusesFilter() {
		return `/statuses/filter.json` as const;
	},

	/**
	 * Route for:
	 * - GET statuses/home_timeline
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-home_timeline
	 */
	statusesHomeTimeline() {
		return `/statuses/home_timeline.json` as const;
	},

	/**
	 * Route for:
	 * - GET statuses/mentions_timeline
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline
	 */
	statusesMentionsTimeline() {
		return `/statuses/mentions_timeline.json` as const;
	},

	/**
	 * Route for:
	 * - GET statuses/user_timeline
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-user_timeline
	 */
	statusesUserTimeline() {
		return `/statuses/user_timeline.json` as const;
	},

	/**
	 * Route for:
	 * - GET favorites/list
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list
	 */
	favoritesList() {
		return `/favorites/list.json` as const;
	},

	/**
	 * Route for:
	 * - GET statuses/lookup
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-lookup
	 */
	statusesLookup() {
		return `/statuses/lookup.json` as const;
	},

	/**
	 * Route for:
	 * - GET statuses/oembed
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-oembed
	 */
	statusesOEmbed() {
		return `/statuses/oembed.json` as const;
	},

	/**
	 * Route for:
	 * - GET statuses/retweeters/ids
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids
	 */
	statusesRetweeterIds() {
		return `/statuses/retweeters/ids.json` as const;
	},

	/**
	 * Route for:
	 * - GET statuses/retweets/:id
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweets-id
	 */
	statusRetweets(id: Snowflake) {
		return `/statuses/retweets/${id}` as const;
	},

	/**
	 * Route for:
	 * - GET statuses/retweets_of_me
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweets_of_me
	 */
	statusRetweetsOfMe() {
		return `/statuses/retweets_of_me.json` as const;
	},

	/**
	 * Route for:
	 * - GET statuses/show/:id
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-show-id
	 */
	statusesShow(id: Snowflake) {
		return `/statuses/show/${id}.json` as const;
	},

	/**
	 * Route for:
	 * - POST favorites/create
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create
	 */
	favoritesCreate() {
		return `/favorites/create.json` as const;
	},

	/**
	 * Route for:
	 * - POST favorites/destroy
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy
	 */
	favoritesDestroy() {
		return `/favorites/destroy.json` as const;
	},

	/**
	 * Route for:
	 * - POST statuses/destroy/:id
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-destroy-id
	 */
	destroyStatus(id: Snowflake) {
		return `/statuses/destroy/${id}.json` as const;
	},

	/**
	 * Route for:
	 * - POST statuses/retweet/:id
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-retweet-id
	 */
	retweetStatus(id: Snowflake) {
		return `/statuses/retweet/${id}.json` as const;
	},

	/**
	 * Route for:
	 * - POST statuses/unretweet/:id
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-unretweet-id
	 */
	unretweetStatus(id: Snowflake) {
		return `/statuses/unretweet/${id}.json` as const;
	},

	/**
	 * Route for:
	 * - POST statuses/update
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-update
	 */
	statusesUpdate() {
		return `/statuses/update.json` as const;
	},

	/**
	 * Route for:
	 * - POST statuses/update_with_media
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-update_with_media
	 * @deprecated
	 */
	statusesUpdateWithMedia() {
		return `/statuses/update_with_media.json` as const;
	},

	/**
	 * Route for:
	 * - GET statuses/sample
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/sample-realtime/api-reference/get-statuses-sample
	 */
	statusesSample() {
		return `/statuses/sample.json` as const;
	},

	/**
	 * Route for:
	 * - GET search/tweets
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/tweets/sample-realtime/api-reference/get-search-tweets
	 */
	searchTweets() {
		return `/search/tweets.json` as const;
	},

	/**
	 * Route for:
	 * - GET lists/list
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list
	 */
	listLists() {
		return `/lists/list.json` as const;
	},

	/**
	 * Route for:
	 * - GET lists/members
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members
	 */
	listsMembers() {
		return `/lists/members.json` as const;
	},

	/**
	 * Route for:
	 * - GET lists/members/show
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members-show
	 */
	listShowMembers() {
		return `/lists/members/show.json` as const;
	},

	/**
	 * Route for:
	 * - GET lists/memberships
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-memberships
	 */
	listsMemberships() {
		return `/lists/memberships.json` as const;
	},

	/**
	 * Route for:
	 * - GET lists/ownerships
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-ownerships
	 */
	listOwnerships() {
		return `/lists/ownerships.json` as const;
	},

	/**
	 * Route for:
	 * - GET lists/show
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-show
	 */
	listsShow() {
		return `/lists/show.json` as const;
	},

	/**
	 * Route for:
	 * - GET lists/statuses
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-statuses
	 */
	listsStatuses() {
		return `/lists/statuses.json` as const;
	},

	/**
	 * Route for:
	 * - GET lists/subscribers
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-subscribers
	 */
	listsSubscribers() {
		return `/lists/subscribers.json` as const;
	},

	/**
	 * Route for:
	 * - GET lists/subscribers/show
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-subscribers-show
	 */
	listsSubscribersShow() {
		return `/lists/subscribers/show.json` as const;
	},

	/**
	 * Route for:
	 * - GET lists/subscriptions
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-subscriptions
	 */
	listsSubscriptions() {
		return `/lists/subscriptions.json` as const;
	},

	/**
	 * Route for:
	 * - POST lists/create
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-lists-create
	 */
	listsCreate() {
		return `/lists/create.json` as const;
	},

	/**
	 * Route for:
	 * - POST lists/destroy
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-lists-destroy
	 */
	listsDestroy() {
		return `/lists/destroy.json` as const;
	},

	/**
	 * Route for:
	 * - POST lists/members/create
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-lists-members-create
	 */
	listsMembersCreate() {
		return `/lists/members/create.json` as const;
	},

	/**
	 * Route for:
	 * - POST lists/members/create_all
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-lists-members-create_all
	 */
	listsMembersCreateAll() {
		return `/lists/members/create_all.json` as const;
	},

	/**
	 * Route for:
	 * - POST lists/members/destroy
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-lists-members-destroy
	 */
	listsMembersDestroy() {
		return `/lists/members/destroy.json` as const;
	},

	/**
	 * Route for:
	 * - POST lists/members/destroy_all
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-lists-members-destroy_all
	 */
	listsMembersDestroyAll() {
		return `/lists/members/destroy_all.json` as const;
	},

	/**
	 * Route for:
	 * - POST lists/subscribers/create
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-lists-subscribers-create
	 */
	listsSubscribersCreate() {
		return `/lists/subscribers/create.json` as const;
	},

	/**
	 * Route for:
	 * - POST lists/subscribers/destroy
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-lists-subscribers-destroy
	 */
	listsSubscribersDestroy() {
		return `/lists/subscribers/destroy.json` as const;
	},

	/**
	 * Route for:
	 * - POST lists/update
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-lists-update
	 */
	listsUpdate() {
		return `/lists/update.json` as const;
	},

	/**
	 * Route for:
	 * - GET followers/ids
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-followers-ids
	 */
	followersIds() {
		return `/followers/ids.json` as const;
	},

	/**
	 * Route for:
	 * - GET followers/list
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-followers-list
	 */
	followersList() {
		return `/followers/list.json` as const;
	},

	/**
	 * Route for:
	 * - GET friends/ids
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-friends-ids
	 */
	friendsIds() {
		return `/friends/ids.json` as const;
	},

	/**
	 * Route for:
	 * - GET friends/list
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-friends-list
	 */
	friendsList() {
		return `/friends/list.json` as const;
	},

	/**
	 * Route for:
	 * - GET friendships/incoming
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-friendships-incoming
	 */
	friendshipsIncoming() {
		return `/friendships/incoming.json` as const;
	},
	/**
	 * Route for:
	 * - GET friendships/lookup
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-friendships-lookup
	 */
	friendshipsLookup() {
		return `/friendships/lookup.json` as const;
	},

	/**
	 * Route for:
	 * - GET friendshps/no_retweets/ids
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-friendships-no_retweets-ids
	 */
	friendshipNoRetweetsIds() {
		return `/friendships/no_retweets/ids.json` as const;
	},

	/**
	 * Route for:
	 * - GET friendships/outgoing
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-friendships-outgoing
	 */
	friendshipsOutgoing() {
		return `/friendships/outgoing.json` as const;
	},

	/**
	 * Route for:
	 * - GET friendships/show
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-friendships-show
	 */
	friendshipsShow() {
		return `/friendships/show.json` as const;
	},

	/**
	 * Route for:
	 * - GET users/lookup
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-users-lookup
	 */
	usersLookup() {
		return `/users/lookup.json` as const;
	},

	/**
	 * Route for:
	 * - GET users/search
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-users-search
	 */
	usersSearch() {
		return `/users/search.json` as const;
	},

	/**
	 * Route for:
	 * - GET users/show
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-users-show
	 */
	usersShow() {
		return `/users/show.json` as const;
	},

	/**
	 * Route for:
	 * - POST friendships/create
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-friendships-create
	 */
	friendshipsCreate() {
		return `/friendships/create.json` as const;
	},

	/**
	 * Route for:
	 * - POST friendships/destroy
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-friendships-destroy
	 */
	friendshipsDestroy() {
		return `/friendships/destroy.json` as const;
	},

	/**
	 * Route for:
	 * - POST friendships/update
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-friendships-update
	 */
	friendshipsUpdate() {
		return `/friendships/update.json` as const;
	},

	/**
	 * Route for:
	 * - GET account/settings
	 * - POST account/settings
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-account-settings
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-account-settings
	 */
	accountSettings() {
		return `/account/settings.json` as const;
	},

	/**
	 * Route for:
	 * - GET account/verify_credentials
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-account-verify_credentials
	 */
	accountVerifyCredentials() {
		return `/account/verify_credentials.json` as const;
	},

	/**
	 * Route for:
	 * - GET saved_searches/list
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-saved_searches-list
	 */
	savedSearchesList() {
		return `/saved_searches/list.json` as const;
	},

	/**
	 * Route for:
	 * - GET saved_searches/show/:id
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-saved_searches-id
	 */
	savedSearchesShow(id: Snowflake) {
		return `/saved_searches/show/${id}.json` as const;
	},

	/**
	 * Route for:
	 * - GET users/profile_banner
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-users-profile_banner
	 */
	usersProfileBanner() {
		return `/users/profile_banner.json` as const;
	},

	/**
	 * Route for:
	 * - POST account/remove_profile_banner
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-account-remove_profile_banner
	 */
	accountRemoveProfileBanner() {
		return `/account/remove_profile_banner.json` as const;
	},

	/**
	 * Route for:
	 * - POST account/update_profile
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-account-update_profile
	 */
	accountUpdateProfile() {
		return `/account/update_profile.json` as const;
	},

	/**
	 * Route for:
	 * - POST account/update_profile_banner
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-account/-update_profile_banner
	 */
	accountUpdateProfileBanner() {
		return `/account/update_profile_banner.json` as const;
	},

	/**
	 * Route for:
	 * - POST account/update_profile_image
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-account-update_profile_image
	 */
	accountUpdateProfileImage() {
		return `/account/update_profile_image.json` as const;
	},

	/**
	 * Route for:
	 * - POST saved_searches/create
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-saved_searches-create
	 */
	savedSearchesCreate() {
		return `/saved_searches/create.json` as const;
	},

	/**
	 * Route for:
	 * - POST saved_searches/destroy/:id
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-saved_searches-destroy-id
	 */
	savedSearchesDestroy(id: Snowflake) {
		return `/saved_searches/destroy/${id}.json` as const;
	},

	/**
	 * Route for:
	 * - GET blocks/ids
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-blocks-id
	 */
	blocksIds() {
		return `/blocks/ids.json` as const;
	},

	/**
	 * Route for:
	 * - GET blocks/list
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-blocks-list
	 */
	blocksList() {
		return `/blocks/list.json` as const;
	},

	/**
	 * Route for:
	 * - GET mutes/users/ids
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-mutes-users-ids
	 */
	mutesUsersIds() {
		return `/mutes/users/ids.json` as const;
	},

	/**
	 * Route for:
	 * - GET mutes/users/list
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-mutes-users-list
	 */
	mutesUsersList() {
		return `/mutes/users/list.json` as const;
	},

	/**
	 * Route for:
	 * - POST blocks/create
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-blocks-create
	 */
	blocksCreate() {
		return `/blocks/create.json` as const;
	},

	/**
	 * Route for:
	 * - POST blocks/destroy
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-blocks-destroy
	 */
	blocksDestroy() {
		return `/blocks/destroy.json` as const;
	},

	/**
	 * Route for:
	 * - POST mutes/users/create
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-mutes-users-create
	 */
	mutesUsersCreate() {
		return `/mutes/users/create.json` as const;
	},

	/**
	 * Route for:
	 * - POST mutes/users/destroy
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-mutes-users-destroy
	 */
	mutesUsersDestroy() {
		return `/mutes/users/destroy.json` as const;
	},

	/**
	 * Route for:
	 * - POST users/report_spam
	 *
	 * https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/post-users-report_spam
	 */
	usersReportSpam() {
		return `/users/report_spam.json` as const;
	},
};
