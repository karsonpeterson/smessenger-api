import { getRepository } from 'typeorm';
import { Message } from '../../entities/messages';
import { CreateMessageInput } from '../../schema';
import { UserInputError } from 'apollo-server-express';

export default async (_root: any, { input }: { input: CreateMessageInput }): Promise<Message> => {
    if (!input.from_id || !input.to_id || !input.message_body) {
        throw new UserInputError('field_empty', { errorKey: 'empty' });
    }
    const message = new Message();
    message.to_id = input.to_id;
    message.from_id = input.from_id;
    message.message_body = input.message_body;
    const messageRepo = getRepository(Message);
    await messageRepo.save(message);
    return message;
};