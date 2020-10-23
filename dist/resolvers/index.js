"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = __importDefault(require("./queries/hello"));
const user_1 = __importDefault(require("./queries/user"));
const users_1 = __importDefault(require("./queries/users"));
const create_user_1 = __importDefault(require("./mutations/create-user"));
exports.default = {
    Query: {
        hello: hello_1.default,
        user: user_1.default,
        users: users_1.default
    },
    Mutation: {
        createUser: create_user_1.default
    }
};
