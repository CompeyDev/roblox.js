import postTopic from './postTopic'
import { TClientIntents, Config, MessagingService as MessagingServiceClass } from "../../lib/types/types";
import Validator from '../../lib/validators';

export class MessagingService implements MessagingServiceClass {
    private apiKey: string
    private universeid: string
    private intents: TClientIntents

    private validator = new Validator()
    private _validateIntents = this.validator._validateIntents
    constructor(config: Config) {
        this.apiKey = config.apiKey
        this.universeid = config.universeid;
        this.intents = config.intents
    }

    public async PublishAsync(topic: string, message: string): Promise<string|number|boolean|undefined> {
        this._validateIntents(this.intents, "messagingservice")
        
        const data = await postTopic(this.apiKey, this.universeid, topic, message)

        return data
    }
}
