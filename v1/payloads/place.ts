import type { Snowflake } from '../../common';

/**
 * https://dev.twitter.com/overview/api/places
 */
export interface APIPlaceAttribute {
	street_address: string;
	locality: string;
	region: string;
	iso3: string;
	postal_code: string;
	phone: string;
	twitter: string;
	url: string;
	'app:id': string;
}

export interface APIPlace {
	geometry: GeoJSON.Point;
	attributes: APIPlaceAttribute;
	bounding_box: GeoJSON.Polygon;
	contained_within: APIPlace[];
	country: string;
	country_code: string;
	full_name: string;
	id: Snowflake;
	name: string;
	place_type: string;
	url: string;
}
