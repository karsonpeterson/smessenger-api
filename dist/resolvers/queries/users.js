"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("../../entities/user");
exports.default = (_root) => {
    const userRepo = typeorm_1.getRepository(user_1.User);
    const where = {};
    const users = userRepo.find({ where });
    return users;
};
