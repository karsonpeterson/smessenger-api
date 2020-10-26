import { gql } from 'apollo-server-express';

export default gql`

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

export interface CreateUserInput {
    username: string;
    email: string;
    password: string;
    profile_img: string;
}

export interface CreateMessageInput {
    to_id: number;
    from_id: number;
    message_body: string;
}

export interface LoginUserInput {
    email: string;
    password: string;
}

export interface WebToken {
    token: string;
}