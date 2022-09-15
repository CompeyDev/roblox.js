import urlcat from 'urlcat';
import axios from 'axios';
import { toBuffer } from '../../lib/bufferify'
import { DatastoreSetResponse } from '../../lib/types/types';

const BASE_URL = "https://apis.roblox.com/datastores/v1/universes"

export default async function main(apiKey: string, universeid: string, datastoreName: string, entryKey: string, newValue: string|number|boolean, matchVersion?: string, exclusiveCreate?: Boolean): Promise<DatastoreSetResponse|undefined> {
    try {
        BigInt(universeid)
    } catch(e) {
        throw new Error("Invalid universeid: " + universeid)
    }
        if (universeid) {
            const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores/datastore/entries/entry?datastoreName=:datastoreName&entryKey=:entryKey", { universeid, datastoreName, entryKey })
            const config = {
                headers:{
                "x-api-key": apiKey,
                "content-type": "application/json"
                }
            };

            const response = await axios.post(res_url, newValue, config)
            return await response.data
        }

        if (matchVersion) {
            const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores/datastore/entries/entry?datastoreName=:datastoreName&entryKey=:entryKey&matchVersion=:matchVersion", { universeid, datastoreName, entryKey, matchVersion })
            const config = {
                headers:{
                "x-api-key": apiKey
                }
            };
            const response = await axios.post(res_url, newValue, config)
            return await response.data
        }

        if (exclusiveCreate) {
            const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores/datastore/entries/entry?datastoreName=:datastoreName&entryKey=:entryKey&exclusiveCreate=:exclusiveCreate", { universeid, datastoreName, entryKey, exclusiveCreate })
            const config = {
                headers:{
                "x-api-key": apiKey
                }
            };
            const response = await axios.post(res_url, newValue, config)
            return await response.data
        }

        if (exclusiveCreate && matchVersion) {
            throw new Error("You cannot use both matchVersion and exclusiveCreate.")
        }
}