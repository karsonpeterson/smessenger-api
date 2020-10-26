import hello from './queries/hello';
import user from './queries/user';
import users from './queries/users';
import createUser from './mutations/create-user';
import createMessage from './mutations/create-message';
import loginUser from './mutations/login-user';
export default {
    Query: {
        hello,
        user,
        users
    },
    Mutation: {
        createUser,
        createMessage,
        loginUser
    }
};