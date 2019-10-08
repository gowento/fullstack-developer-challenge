# @gowento/full-stack-developer-challenge-api

This project is the “API” part of the Gowento Fullstack Developer Challenge.

It is a [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) API served using [Express](https://expressjs.com/), and was bootstrapped with [create-esm](https://github.com/standard-things/create-esm).

## Getting started

This project uses [Yarn](https://yarnpkg.com/) as a dependency manager.

To get started, you should first install all dependencies:

```bash
yarn
```

## Usage

To run the API server, use the `start` script:

```bash
yarn start
```

The API server listens on port 4000.

## Features

The API supports:

- the `GET` HTTP method only
- the JSON [output content type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) only

It exposes two endpoints.

### /locations

Search for franchisee locations in the database.

| Example Request            | Example Response Body                                                                                                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET /locations             | `[{"name":"Fantastic Plastic Shirt","phone":"0690132287","city":"East Jeanne","postalCode":"93791","countryCode":"FR"},{"name":"Sleek Fresh Computer","phone":"0100933027","city":"Lake Océane","postalCode":"13892","countryCode":"FR"},`…`]` |
| GET /locations?name=cheese | `[{"name":"Small Rubber Cheese","phone":"0267073156","city":"Pariston","postalCode":"79909","countryCode":"FR"},{"name":"Fantastic Concrete Cheese","phone":"0245952929","city":"Port Célia","postalCode":"01651","countryCode":"FR"},`…`]`    |

### /postal-codes

Search for postal code information in the database of valid postal codes.

| Example Request                    | Example Response Body                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| GET /postal-codes                  | `[{"postalCode":"39380","countryCode":"FR"},{"postalCode":"14380","countryCode":"FR"},`…`]` |
| GET /postal-codes?postalCode=91120 | `[{"postalCode":"91120","countryCode":"FR"}]`                                               |

## Development

To run the API in watch mode:

```bash
yarn watch
```

To run the linter against the [standard ESLint config used in Gowento projects](https://github.com/gowento/eslint-config-gowento):

```bash
yarn lint
```

To run all tests:

```bash
yarn test
```
