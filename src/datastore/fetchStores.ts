import urlcat from 'urlcat';
import axios from 'axios'
import { Datastores } from '../../lib/types/types';

const BASE_URL = "https://apis.roblox.com/datastores/v1/universes"

export default async function main(apiKey: string, universeid: string, prefix?: string, limit?: string, cursor?: string): Promise<Datastores|undefined> {
    try {
        BigInt(universeid)
        Number(limit)
    } catch(e) {
        throw new Error("Invalid universeid: " + universeid)
    }
    if (universeid) {
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores", { universeid })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.get(res_url, config) // .catch(err =>  { throw((err.message).toString().substring(11)) })
        return await response.data
    }

    if (prefix) {
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores?prefix=:prefix", { universeid, prefix })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.get(res_url, config)
        return await response.data
    }

    if (limit) {
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores?limit=:limit", { universeid, limit })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.get(res_url, config).catch(err => { throw(err.substr(11)) })
        return await response.data
    }

    if (cursor) {
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores?cursor=:cursor", { universeid, cursor })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.get(res_url, config)
        return await response.data
    }

    if (prefix && limit && cursor) {
        const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores?prefix=:prefix&limit=:limit&cursor=:cursor", { universeid, prefix, limit, cursor })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.get(res_url, config)
        return await response.data
    }
}