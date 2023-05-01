import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type Query {
    users: [User!]!
  }
`;

const userList = [
  {
    id: 1,
    name: "Mohammad",
    username: "mohammad",
    age: 33,
    nationality: "India",
  },
  {
    id: 2,
    name: "Adam",
    username: "adam",
    age: 34,
    nationality: "Canada",
  },
  {
    id: 3,
    name: "Ben",
    username: "ben",
    age: 37,
    nationality: "United States",
  },
  {
    id: 4,
    name: "Scott",
    username: "scott",
    age: 37,
    nationality: "Australia",
  },
  {
    id: 5,
    name: "Stella",
    username: "stella",
    age: 37,
    nationality: "New Zealand",
  },
];

const resolvers = {
  Query: {
    users: () => userList,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server running at ${url}`);
