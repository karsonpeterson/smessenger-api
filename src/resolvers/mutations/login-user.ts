import { getRepository } from 'typeorm';
import { User } from '../../entities/user';
import { LoginUserInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { pick } from 'lodash';
import * as dotenv from 'dotenv';
import { WebToken } from '../../schema';

export default async (_root: any, { input }: { input: LoginUserInput }): Promise<WebToken> => {
    dotenv.config();
    if (!input.email || !input.password) {
        throw new UserInputError('field_empty', { errorKey: 'empty'});
    }
    const userRepo = getRepository(User);
    const user = await userRepo.findOne({ where: { email: input.email }});
    if (!user) {
        throw new Error('No user found');
    }
    
    const isValid = await compare(input.password, user.password);
    if (!isValid) {
        throw new Error('Incorrect password');
    }

    var secret = String(process.env.SECRET);

    const token = sign(
        {
            user: pick(user, ['id', 'email']),
        },
        secret,
        { expiresIn: "1d"}
    );

    var webToken: WebToken = { token: token };
    return webToken;
};