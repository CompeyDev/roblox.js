import urlcat from 'urlcat';
import axios from 'axios'

const BASE_URL = "https://apis.roblox.com/datastores/v1/universes"

export default async function main(apiKey: string, universeid: string, datastoreName: string, entryKey: string): Promise<string|number|boolean|undefined> {
    try {
        BigInt(universeid)
    } catch(e) {
        throw new Error("Invalid universeid: " + universeid)
    }
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores/datastore/entries/entry?datastoreName=:datastoreName&entryKey=:entryKey", { universeid, datastoreName, entryKey })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.delete(res_url, config)
        return await response.data
}