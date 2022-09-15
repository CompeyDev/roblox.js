import urlcat from 'urlcat';
import axios from 'axios'
import { DatastoreEntries } from '../../lib/types/types'

const BASE_URL = "https://apis.roblox.com/datastores/v1/universes"

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
 * @param {string} universeid - ID of the universe to access the datastores of. 
 * 
 * Like all Open Cloud APIs, DataStore API requires all requests to include the x-api-key header, which contains an API key 
 * that is in scope for the request. This requires you to apply the key to the experience and the data store, 
 * and the endpoint operation is permitted. If the key is invalid, 403 Unauthorized is returned. For more information 
 * on API keys, see Managing [API Keys](https://create.roblox.com/docs/open-cloud/managing-api-keys).
 *  
 * @param {string} apiKey - API key from https://create.roblox.com/credentials.
 * 
 * # Input validation 
 * 
 * Before sending your request, make sure to validate endpoint parameters on formatting requirements and constraints 
 * in the following table. If a parameter doesn't satisfy the following restrictions, the endpoint returns a 400 Bad Request. 
 * Individual endpoints can have additional requirements beyond these.
 * 
 * @param {string} apiKey - API key from https://create.roblox.com/credentials.
 * @param {string} datastoreName - Name of the datastore to access.
 * @param {string} universeid - ID of the universe to access the datastores of.
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
export default async function main(apiKey: string, universeid: string, datastoreName: string, prefix?: string, limit?: string, cursor?: string, AllScopes?: boolean): Promise<DatastoreEntries|undefined> {
    try {
        BigInt(universeid)
        Number(limit)
    } catch(e) {
        throw new Error("Invalid universeid: " + universeid)
    }
    if (universeid) {
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores/datastore/entries?datastoreName=:datastoreName", { universeid, datastoreName })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.get(res_url, config)
        return await response.data
    }

    if (prefix) {
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores?datastoreName=:datastoreName&prefix=:prefix", { universeid, prefix })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.get(res_url, config)
        return await response.data
    }

    if (limit) {
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores?datastoreName=:datastoreName&limit=:limit", { universeid, limit })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.get(res_url, config)
        return await response.data
    }

    if (cursor) {
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores?datastoreName=:datastoreName&cursor=:cursor", { universeid, cursor })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.get(res_url, config)
        return await response.data
    }

    if (AllScopes) {
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores?datastoreName=:datastoreName&AllScopes=:AllScopes", { universeid, AllScopes })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.get(res_url, config)
        return await response.data
    }

    if (prefix && limit && cursor && AllScopes) {
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores?datastoreName=:datastoreName&prefix=:prefix&limit=:limit&cursor=:cursor&AllScopes=:AllScopes", { universeid, prefix, limit, cursor, AllScopes })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.get(res_url, config)
        return await response.data
    }
}