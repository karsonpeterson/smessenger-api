"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("../../entities/user");
const apollo_server_core_1 = require("apollo-server-core");
exports.default = async (_root, { input }) => {
    if (!input.username || !input.email || !input.password) {
        throw new apollo_server_core_1.UserInputError('field_empty', { errorKey: 'empty' });
    }
    const user = new user_1.User();
    user.username = input.username;
    user.email = input.email;
    user.password = input.password;
    if (input.profile_img)
        user.profile_img = input.profile_img;
    const userRepo = typeorm_1.getRepository(user_1.User);
    await userRepo.save(user);
    return user;
};
