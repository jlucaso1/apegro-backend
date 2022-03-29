<h1 align="center" >Back End to Apegro's challenge</h1>

Repository link: https://github.com/jlucaso1/apegro-frontend

## Description

- This project is a Backend that uses data from Chuck Norris API (with graphql gateway) and is related to the Apegro's challenge.

## Technologies

- Typescript
- NestJS (NodeJS)
- Apollo Graphql Server
- Typegraphql
- Jest (Testing)
- Axios (Data fetching)


## Getting Started

1 - First install dependecies

```bash
npm install
# or
yarn
```
2 - And finally run the development server:

```bash
npm run start:dev
# or
yarn start:dev
```

Open [http://localhost:3000/graphql](http://localhost:3000/graphql) with your browser to see the result.

## Tests

End to end test

```bash
npm run test
# or
yarn test
```

## Docker

Start server in development mode

```bash
docker-compose up apegro_dev_api
```
