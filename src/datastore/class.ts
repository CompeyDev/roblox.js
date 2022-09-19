import fetchStores from './fetchStores'
import fetchEntries from './fetchEntries'
import fetchEntry from './fetchEntry'
import setEntry from './setEntry'
import incrementEntry from './incrementEntry'
import removeEntry from './removeEntry'
import fetchEntryVersion from './fetchEntryVersion'
import { DatastoreEntries, Datastores, DatastoreSetResponse } from '../../lib/types/types'

export class Datastore {
    private universeid: string;
    private apiKey: string;

    /**
     * You can send and receive the following request and response payloads to DataStore API of Open Cloud. 
     * For information on the usage of the API, see Access Data Stores from External Tools.
     * 
     * # Throttling
     * DataStore API has two types of universe level throttling: request-per-minute throttling and throughput throttling. 
     * With every universeId, request-per-minute throttling allows you to send a certain number of requests per minute, 
     * and throughput throttling allows you to send a certain amount of data per minute, regardless of the number of API keys. 
     * Unlike the Lua API, these limits currently do not scale according to user count. 
     * Exceeding these limits causes the endpoint to return 429 Too Many Requests.
     * 
     * @param {string} this.universeId - ID of the universe to access the datastores of. 
     * 
     * Like all Open Cloud APIs, DataStore API requires all requests to include the x-api-key header, which contains an API key 
     * that is in scope for the request. This requires you to apply the key to the experience and the data store, 
     * and the endpoint operation is permitted. If the key is invalid, 403 Unauthorized is returned. For more information 
     * on API keys, see Managing [API Keys](https://create.roblox.com/docs/open-cloud/managing-api-keys).
     *  
     * @param {string} this.apiKey - API key from https://create.roblox.com/credentials.
     * 
     * # Input validation 
     * 
     * Before sending your request, make sure to validate endpoint parameters on formatting requirements and constraints 
     * in the following table. If a parameter doesn't satisfy the following restrictions, the endpoint returns a 400 Bad Request. 
     * Individual endpoints can have additional requirements beyond these.
     * 
     * @param {string} this.apiKey - API key from https://create.roblox.com/credentials.
     * @param {string} datastoreName - Name of the datastore to access.
     * @param {string} this.universeId - ID of the universe to access the datastores of.
     * 
     * 
     * # Cursors
     * Endpoints which return lists of data might also return a nextPageCursor string. This indicates that there is more data available in the requested result set. 
     * To receive it, provide this string in the cursor query parameter on a subsequent request. If the cursor parameter is provided but invalid, the endpoint returns 
     * 400 Bad Request. The format of cursor strings is not defined. You should not interpret or parse them as they may change at any time.
     * 
     * @param {string} cursor - ID of the page cursor.
     * 
     * ## Other optional parameters
     * 
     * @param {string} prefix - Prefix of the keys to fetch.
     * @param {string} limit - Limit of keys to fetch.
     * @param {boolean} AllScopes - Whether to fetch from all scopes or not.
     */
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

    public async RemoveAsync(datastoreName: string, entryKey: string): Promise<string|number|boolean|undefined> {
        const data = await removeEntry(this.apiKey, this.universeid, datastoreName, entryKey)

        return data
    }

    public async GetVersionAsync(datastoreName: string, entryKey: string, versionid: string, scope?: string): Promise<string|number|boolean|undefined> {
        if (versionid) {
            const data = await fetchEntryVersion(this.apiKey, this.universeid, datastoreName, entryKey, versionid)

            return data
        }

        if (scope) {
            const data = await fetchEntryVersion(this.apiKey, this.universeid, datastoreName, entryKey, versionid, scope)

            return data
        }

    }

}
