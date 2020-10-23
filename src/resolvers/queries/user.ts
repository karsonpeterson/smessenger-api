import { getRepository } from 'typeorm';
import { User } from '../../entities/user';

export default async (_root: any, { id }: { id: number }) => {
    const userRepo = getRepository(User);
    const user = userRepo.findOne({ where: { id }});
    return user;
};