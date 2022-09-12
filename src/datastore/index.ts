import fetch from './fetch'

export class Datastore {
    universeid: string;
    apiKey: string;

    constructor(universeid: string, apiKey: string) {
        this.apiKey = apiKey
        this.universeid = universeid;
    }

    public async ListDataStoresAsync(): Promise<{
        "datastores": [
            {
                "name": String,
                "createdTime": String
            }
        ],
        "nextPageCursor": String
    }> {

        const data = await fetch(this.apiKey, this.universeid)

        return data
    }
}