import fetchStores from './fetchStores'
import fetchEntries from './fetchEntries'
import fetchEntry from './fetchEntry'

export class Datastore {
    universeid: string;
    apiKey: string;

    constructor(universeid: string, apiKey: string) {
        this.apiKey = apiKey
        this.universeid = universeid;
    }

    public async ListDataStoresAsync(prefix?: string, limit?: string, cursor?: string): Promise<{
        "datastores": [
            {
                "name": String,
                "createdTime": String
            }
        ],
        "nextPageCursor": String
    }|undefined> {
        
        if (prefix) {
            const data = await fetchStores(this.apiKey, this.universeid, prefix)

            return data
        }

        if (limit) {
            const data = await fetchStores(this.apiKey, this.universeid, undefined, limit)

            return data
        }

        if (cursor) {
            const data = await fetchStores(this.apiKey, this.universeid, undefined, undefined, cursor)

            return data
        }

        if (prefix && limit && cursor) {
            const data = await fetchStores(this.apiKey, this.universeid, prefix, limit, cursor)

            return data
        } else {
            const data = await fetchStores(this.apiKey, this.universeid)

            return data
        }
    }

    public async ListKeysAsync(datastoreName: string, prefix?: string, limit?: string, cursor?: string, AllScopes?: boolean): Promise<{
        "keys": [
            {
                "key": string
            }
        ],
        "nextPageCursor": string
    }|undefined> {
        
        if (prefix) {
            const data = await fetchEntries(this.apiKey, datastoreName, this.universeid, prefix)

            return data
        }

        if (limit) {
            const data = await fetchEntries(this.apiKey, this.universeid, datastoreName, undefined, limit)

            return data
        }

        if (cursor) {
            const data = await fetchEntries(this.apiKey, this.universeid, datastoreName, undefined, undefined, cursor)

            return data
        }

        if (AllScopes) {
            const data = await fetchEntries(this.apiKey, this.universeid, datastoreName, undefined, undefined, undefined, AllScopes)

            return data
        }

        if (prefix && limit && cursor && AllScopes) {
            const data = await fetchEntries(this.apiKey, this.universeid, datastoreName, prefix, limit, cursor, AllScopes)

            return data
        } else {
            const data = await fetchEntries(this.apiKey, this.universeid, datastoreName, this.universeid, prefix)

            return data
        }
    }

    public async GetAsync(datastoreName: string, entryKey: string) {
        const data = await fetchEntry(this.apiKey, this.universeid, datastoreName, entryKey)

        return data
    }

}