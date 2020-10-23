"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `

    type User {
        id: Int!
        username: String!
        email: String!
        profile_img: String
    }

    input CreateUserInput {
        username: String!
        email: String!
        password: String!
        profile_img: String
    }

    type Query {
        hello: String
        users: [User!]!
        user(id: Int!): User
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
    }

`;
