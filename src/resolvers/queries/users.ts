import { getRepository, FindConditions } from 'typeorm';
import { User } from '../../entities/user';

export default (_root: any) => {
    const userRepo = getRepository(User);
    const where: FindConditions<User> = {};

    const users = userRepo.find({where});
    return users;
}