import { getRepository } from 'typeorm';
import { User } from '../../entities/user';
import { CreateUserInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';

export default async (
    _root: any,
    {input }: { input: CreateUserInput }
): Promise<User> => {
    if (!input.username || !input.email || !input.password) {
        throw new UserInputError('field_empty', { errorKey: 'empty'});
    }
    const user = new User();
    user.username = input.username;
    user.email = input.email;
    user.password = input.password;
    if (input.profile_img) user.profile_img = input.profile_img;
    const userRepo = getRepository(User);
    await userRepo.save(user);
    return user;
};