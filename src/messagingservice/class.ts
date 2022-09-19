import postTopic from './postTopic'

export class MessagingService {
    apiKey: string
    universeid: string
    constructor(universeid: string, apiKey: string) {
        this.apiKey = apiKey
        this.universeid = universeid;
    }

    public async PublishAsync(topic: string, message: string) {
        const data = await postTopic(this.apiKey, this.universeid, topic, message)

        return data
    }
}