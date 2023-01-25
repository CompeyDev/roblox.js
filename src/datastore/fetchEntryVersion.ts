import urlcat from 'urlcat';
import axios from 'axios'
import handleResponse from '../../lib/handleResponse';

const BASE_URL = "https://apis.roblox.com/datastores/v1/universes"

export default async function main(apiKey: string, universeid: string, datastoreName: string, entryKey: string, versionid: string, scope?: string): Promise<string|number|boolean|undefined> {
    try {
        BigInt(universeid)
    } catch(e) {
        throw new Error("Invalid universeid: " + universeid)
    }

        if (versionid) {
            const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores/datastore/entries/entry/versions/version?datastoreName=:datastoreName&entryKey=:entryKey&versionId=:versionid", { universeid, datastoreName, entryKey, versionid })
            const config = {
                headers:{
                "x-api-key": apiKey
                }
            };
            const response = await axios.get(res_url, config)

            handleResponse(response)

            return await response.data
        }


        if (scope) {
            const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores/datastore/entries/entry/versions/version?datastoreName=:datastoreName&entryKey=:entryKey&versionId=:versionid&scope=:scope", { universeid, datastoreName, entryKey, versionid, scope })
            const config = {
                headers:{
                "x-api-key": apiKey
                }
            };
            const response = await axios.get(res_url, config)
            
            handleResponse(response)
            
            return await response.data
        }
}