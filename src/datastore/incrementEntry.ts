import urlcat from 'urlcat';
import axios from 'axios'
import type { DatastoreSetResponse } from '../../lib/types/types';

const BASE_URL = "https://apis.roblox.com/datastores/v1/universes"

export default async function main(apiKey: string, universeid: string, datastoreName: string, entryKey: string, incrementBy: number): Promise<DatastoreSetResponse> {
    try {
        BigInt(universeid)
    } catch(e) {
        throw new Error("Invalid universeid: " + universeid)
    }
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores/datastore/entries/entry/increment?datastoreName=:datastoreName&entryKey=:entryKey", { universeid, datastoreName, entryKey })
        const config = {
            headers:{
            "x-api-key": apiKey,
            "content-type": "application/json"
            }
        };
        const response = await axios.post(res_url, incrementBy, config)
        return await response.data
}