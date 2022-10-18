import { ObjectId } from "mongoose";
import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";
import { Message } from "../schemas/Message";


@injectable()
class GetMessagesByChatRoomService {
    async execute(roomId: string) {
        const messages = await Message.find({
            roomId
        }).populate("to").exec()
        return messages;
    }
}

export { GetMessagesByChatRoomService };