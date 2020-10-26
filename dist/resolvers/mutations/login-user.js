"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("../../entities/user");
const apollo_server_core_1 = require("apollo-server-core");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const lodash_1 = require("lodash");
const dotenv = __importStar(require("dotenv"));
exports.default = async (_root, { input }) => {
    dotenv.config();
    if (!input.email || !input.password) {
        throw new apollo_server_core_1.UserInputError('field_empty', { errorKey: 'empty' });
    }
    const userRepo = typeorm_1.getRepository(user_1.User);
    const user = await userRepo.findOne({ where: { email: input.email } });
    if (!user) {
        throw new Error('No user found');
    }
    const isValid = await bcrypt_1.compare(input.password, user.password);
    if (!isValid) {
        throw new Error('Incorrect password');
    }
    var secret = String(process.env.SECRET);
    const token = jsonwebtoken_1.sign({
        user: lodash_1.pick(user, ['id', 'email']),
    }, secret, { expiresIn: "1d" });
    var webToken = { token: token };
    return webToken;
};
