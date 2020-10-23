import { gql } from 'apollo-server-express';

export default gql`

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

export interface CreateUserInput {
    username: string;
    email: string;
    password: string;
    profile_img: string;
}