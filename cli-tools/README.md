# @gowento/full-stack-developer-challenge-cli-tools

This project is the “CLI Tools” part of the Gowento Fullstack Developer Challenge.

It is set of commands-line tools, and was bootstrapped with [create-esm](https://github.com/standard-things/create-esm).

## Getting started

This project uses [Yarn](https://yarnpkg.com/) as a dependency manager.

To get started, you should first install all dependencies:

```bash
yarn
```

## Usage

### generate-sample-locations

The `generate-sample-locations` allows you to randomly generate a sample of franchisee locations and persist it to a CSV file.

```bash
# Generate 1000 random locations and store them in the `./sample-locations.csv` file
yarn generate-sample-locations -n 1000 --file ./sample-locations.csv
```

## Development

To run the linter against the [standard ESLint config used in Gowento projects](https://github.com/gowento/eslint-config-gowento):

```bash
yarn lint
```

To run all tests:

```bash
yarn test
```
