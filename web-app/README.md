# @gowento/full-stack-developer-challenge-web-app

This project is the “Web App” part of the Gowento Fullstack Developer Challenge.

It is a server providing a React web application, and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The user interface leverages the [Semantic UI](https://react.semantic-ui.com/) framework.

## Getting started

This project uses [Yarn](https://yarnpkg.com/) as a dependency manager.

To get started, you should first install all dependencies:

```bash
yarn
```

## Usage

To run the HTTP server, use the `start` script, with all variables defined in `.env.dist` set. In particular, you must point `REACT_APP_API_ORIGIN` to the “API” server:

```bash
REACT_APP_API_ORIGIN=http://localhost:4000 yarn start
```

In development mode, this will also cause a new navigator window or tab to open and/or focus on the web app.

The server listens on port 3000.

## Features

The Web App allows you to search for franchisee locations by postal code.

## Development

To run the linter against the [standard ESLint config used in Gowento projects](https://github.com/gowento/eslint-config-gowento):

```bash
yarn lint
```

To run all tests:

```bash
yarn test
```

## Build and Deployment

To build the HTTP server, use the `start` script, with all variables defined in `.env.dist` set. In particular, you must point `REACT_APP_API_ORIGIN` to the “API” server. The files in the `build/` directory will be deployable:

```bash
REACT_APP_API_ORIGIN=https://api... yarn build
```
