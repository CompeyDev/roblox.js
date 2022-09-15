import fetchStores from './fetchStores'
import fetchEntries from './fetchEntries'
import fetchEntry from './fetchEntry'
import setEntry from './setEntry'
import incrementEntry from './incrementEntry'
import { DatastoreEntries, Datastores, DatastoreSetResponse } from '../../lib/types/types'

export class Datastore {
    universeid: string;
    apiKey: string;

    constructor(universeid: string, apiKey: string) {
        this.apiKey = apiKey
        this.universeid = universeid;
    }

    public async ListDataStoresAsync(prefix?: string, limit?: string, cursor?: string): Promise<Datastores|undefined> {
        
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

    public async ListKeysAsync(datastoreName: string, prefix?: string, limit?: string, cursor?: string, AllScopes?: boolean): Promise<DatastoreEntries|undefined> {
        
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

    public async SetAsync(datastoreName: string, entryKey: string, newValue: string|number|boolean, matchVersion?: string, exclusiveCreate?: Boolean): Promise<DatastoreSetResponse|undefined> {
        
        if (datastoreName) {
            const data = await setEntry(this.apiKey, this.universeid, datastoreName, entryKey, newValue)

            return data
        }

        if (matchVersion) {
            const data = await setEntry(this.apiKey, this.universeid, datastoreName, entryKey, newValue, matchVersion)

            return data
        }

        if (exclusiveCreate) {
            const data = await setEntry(this.apiKey, this.universeid, datastoreName, entryKey, newValue, undefined, exclusiveCreate)

            return data
        }

        if (exclusiveCreate && matchVersion) {
            const data = await setEntry(this.apiKey, this.universeid, datastoreName, entryKey, newValue, exclusiveCreate, exclusiveCreate)

            return data
        }
    }

    public async IncrementAsync(datastoreName: string, entryKey: string, incrementBy: number): Promise<DatastoreSetResponse> {
        const data = await incrementEntry(this.apiKey, this.universeid, datastoreName, entryKey, incrementBy)
        
        return data
    }

}
