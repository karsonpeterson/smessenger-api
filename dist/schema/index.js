"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `

    type User {
        id: Int!
        username: String!
        password: String!
        email: String!
        profile_img: String
    }

    type WebToken {
        token: String!
    }

    input CreateUserInput {
        username: String!
        email: String!
        password: String!
        profile_img: String
    }

    input LoginUserInput {
        email: String!
        password: String!
    }

    type Message {
        to_id: Int!
        from_id: Int!
        message_body: String!
    }

    input CreateMessageInput {
        to_id: Int!
        from_id: Int!
        message_body: String!
    }

    type Query {
        hello: String
        users: [User!]!
        user(id: Int!): User
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        createMessage(input: CreateMessageInput!): Message
        loginUser(input: LoginUserInput!): WebToken
    }

`;
