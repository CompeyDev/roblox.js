import { TClientIntents } from "./types/types";

export default class Validator {
    public _intentsError(msg: string): never {
        throw new Error(`INTENTS_ERROR: ${msg}`)
    }

    public _validateIntents(intents: TClientIntents, service: "datastore" | "messagingservice"): void {
        if (!intents.includes(service)) {
            this._intentsError(`Intent for service ${service} not whitelisted.`)
        } else {
            return;
        }
    }
}