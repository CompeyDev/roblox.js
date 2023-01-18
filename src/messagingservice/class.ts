import postTopic from './postTopic'
import { type MessagingService as MessagingServiceClass } from "../../lib/types/types";

export class MessagingService implements MessagingServiceClass {
    private apiKey: string
    private universeid: string
    constructor(universeid: string, apiKey: string) {
        this.apiKey = apiKey
        this.universeid = universeid;
    }

    public async PublishAsync(topic: string, message: string): Promise<string|number|boolean|undefined> {
        const data = await postTopic(this.apiKey, this.universeid, topic, message)

        return data
    }
}
