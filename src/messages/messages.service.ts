import { MessagesRepository } from './messages.repository';

export class MessagesService {
    messagesRepo: MessagesRepository;
    constructor() {
        // Service is creating its own dependencies, not recommended
        this.messagesRepo = new MessagesRepository();
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}
