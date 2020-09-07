# Gowento Full Stack Developer Challenge

Please allocate yourself a **limited and reasonable timeframe** to work on the challenge, which **should not exceed two hours**.

During this timeframe, you are expected to perform the following, in order:

1. read and understand the context
2. complete exercice 1 (about 25% of your allocated timeframe)
3. complete exercise 2 (about 75% of your allocated timeframe)

Bonuses may be worked on at any point.

**We expect you to commit all your work to your fork of this repository. This will be your deliverable.**

## Context

You work for a company that manages a retail franchise. The network of franchisees is very large and spans across many countries. Each franchisee operates on their own IT, with various levels of expertise. Some are more savvy and reactive than others. As a result, they report data using various periodicities, protocols, models, and formats.

You inherit sole ownership of an in-development search engine of franchisee locations.

This product is broken down in three projects, all contained within the current repository:

- A RESTful API that allows access to franchisee location data, and seems to allow access to some official postal data
- A React web application that consumes the API and allows postal code based search
- A set of tools and utilities that includes a sample data generator

There is no production data or infrastructure yet: the search engine is being beta-tested internally with sample data, and a backlog items are already coming at you.

## Exercise 1: Newcomer Notes

The time you spend on this exercise should account for **about 25% of the timeframe** that you allocated for yourself (**~30/45 minutes**).

As a first exercise, we would like you to install the product on your developer machine.

You will find instructions in the `README.md` file of each project. In order, you should:

- Generate a sample CSV file of locations data using the provided command-line tool (see [cli-tools/README.md](cli-tools/README.md)), and store it in the `api/data` directory, under the name `locations.csv`.
- Run the API serving the freshly generated sample data (see [api/README.md](api/README.md)).
- Run the web application consuming the API (see [web-app/README.md](web-app/README.md)).

**Your deliverable will be a synthetic document named `NEWCOMER_NOTES.md`**, where you will write down all of your notes, remarks, questions, and ideas about the project, documenting your perception of how it works, or should work.

We expect you to picture yourself as the new project owner, and express yourself as truly as possible, so please feel free to not be shy.

You can use a succint writing style, as long as you consider it understandable in the context of team work.

This exercise will help you take ownership of the project, and help us understand your thought process.

## Exercise 2: Backlog

The time you spend on this exercise should account for **about 75% of the timeframe** that you allocated for yourself (**~2/3 hours**).

As a second exercise, we would like you to complete at least two of the following backlog items, and commit your work.

You may use any external helper, library, or tool that you feel would benefit your work.

**Your deliverable will be commits of code and documentation in response to chosen items.**

Title | Description | Goal | Estimated difficulty
--- | --- | --- | ---
**Clear input** | Some users requested the search form to be cleared between searches. | Implement a way to clear search input upon successful search. | ⭐️ _(React)_
**Rate limiter** | IT Security expressed concerns that the API is not rate limited. | Implement a simple rate limiter for the API (it must whitelist our Office IP : 8.8.8.8). | ⭐️ _(Node.js)_
**Country breakdown** | For future press releases, the PR team want to gather precise data reports of market share and coverage. | Implement a new endpoint that returns a CSV file reporting the number of franchisee locations per country. | ⭐️⭐️ _(Node.js)_
**Fake entries cleanup** | Some users reported that the Web App sometimes returns invalid French postal codes. | Implement a fix which use LaPoste postal codes data to filter out results with non-existing postal codes | ⭐️⭐️ _(Node.js or React)_
**Recently searched** | Some users expressed desire to easily access their recent searches. | Design and implement a simple component showing the last five searches and a count of their results, as clickable elements. This history should be locally persisted. | ⭐️⭐️⭐️ _(React)_
**Slow Boot** | DevOps noticed that every time the API attempts to start, there is a huge spike in memory and CPU usage. They would like it fixed to reduce VM sizing. | Diagnose and implement a fix for reported memory and CPU surge. | ⭐️⭐️⭐️ _(Node.js)_
