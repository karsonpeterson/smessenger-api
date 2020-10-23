"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("../../entities/user");
exports.default = async (_root, { id }) => {
    const userRepo = typeorm_1.getRepository(user_1.User);
    const user = userRepo.findOne({ where: { id } });
    return user;
};
