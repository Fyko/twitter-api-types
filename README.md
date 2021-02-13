<div style="text-align:center;"><h1>Twitter API Types</h1></div>

[![GitHub](https://img.shields.io/github/license/fyko/twitter-api-types)](https://github.com/fyko/twitter-api-types/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/twitter-api-types?color=crimson&logo=npm)](https://www.npmjs.com/package/twitter-api-types)

Simple type definitions for the [Twitter API](https://developer.twitter.com/en/docs/api-reference-index).

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install twitter-api-types
yarn add twitter-api-types
pnpm add twitter-api-types
```

## Project Structure

The exports of each API version is split into three main parts:

- Everything exported with the `API` prefix represents a payload you may get from the REST API.

- Everything exported with the `REST` prefix represents data that ONLY comes from or is directly related to the REST API.

  - For endpoint options, they will follow the following structure: `REST<HTTP Method><Type><Query|(JSON|FormData)Body|Result>` where the type represents what it will return.

    - For example, `RESTPostAPITweetResult` or `RESTGetAPIRatelimitStatusQuery`.

  - If a type ends with `Result`, then it represents the expected result by calling its accompanying route.

    - Types that are exported as `never` usually mean the result will be a `204 No Content`, so you can safely ignore it. This does **not** account for errors.

- Anything else that is miscellaneous will be exported based on what it represents (for example the `REST` route object).

- There may be types exported that are identical for all versions. These will be exported as is and can be found in the `common` directory. They will still be prefixed accordingly as described above.

## Usage

You can `require` / `import` the module directly, which will give you the latest types as of the current API version. This is considered the `default` version and will be updated according to Twitter's default API version; this means it may break at any point in time.

> We **strongly recommend** you use a version when importing this module! This will prevent breaking changes when updating the module.

```js
const { APITweet } = require('twitter-api-types');
```

```ts
// TypeScript/ES Module support
import { APITweet } from 'twitter-api-types';
```

You should instead consider adding the API version you want to target by appending `/v*`, where the `*` represents the API version.

```js
const { APITweet } = require('twitter-api-types/v1');
```

```ts
// TypeScript/ES Module support
import { APITweet } from 'twitter-api-types/v1';
```

## Honorable Mentions
Thanks to [Vlad](https://github.com/vladfrangu)'s [`discord-api-types`](https://github.com/discordjs/discord-api-types) over at [Discord.js](https://github.com/discordjs) for the file structure/flow/etc.