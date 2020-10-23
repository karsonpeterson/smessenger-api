import hello from './queries/hello';
import user from './queries/user';
import users from './queries/users';
import createUser from './mutations/create-user';
export default {
    Query: {
        hello,
        user,
        users
    },
    Mutation: {
        createUser
    }
};