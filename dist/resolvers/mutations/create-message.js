"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const messages_1 = require("../../entities/messages");
const apollo_server_express_1 = require("apollo-server-express");
exports.default = async (_root, { input }) => {
    if (!input.from_id || !input.to_id || !input.message_body) {
        throw new apollo_server_express_1.UserInputError('field_empty', { errorKey: 'empty' });
    }
    const message = new messages_1.Message();
    message.to_id = input.to_id;
    message.from_id = input.from_id;
    message.message_body = input.message_body;
    const messageRepo = typeorm_1.getRepository(messages_1.Message);
    await messageRepo.save(message);
    return message;
};
