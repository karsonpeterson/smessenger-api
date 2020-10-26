import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import schema from './schema';
import resolvers from './resolvers';
import * as dotenv from 'dotenv';
// import { verify } from 'jsonwebtoken';

export default async () => {
    dotenv.config();
    const app = express();

    await createConnection();

    const server = new ApolloServer({ 
        typeDefs: schema,
        resolvers,

    });
    server.applyMiddleware({ app, cors: { origin: ['http://localhost:3000'] } });

    return app;
}
