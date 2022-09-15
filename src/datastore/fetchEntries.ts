import urlcat from 'urlcat';
import axios from 'axios'
import { DatastoreEntries } from '../../lib/types/types'

const BASE_URL = "https://apis.roblox.com/datastores/v1/universes"

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