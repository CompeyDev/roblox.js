import urlcat from 'urlcat';
import axios from 'axios'
import handleResponse from '../../lib/handleResponse';

const BASE_URL = "https://apis.roblox.com/messaging-service/v1/universes"

export default async function main(apiKey: string, universeid: string, topic: string, message: string): Promise<string|number|boolean|undefined> {
    try {
        BigInt(universeid)
    } catch(e) {
        throw new Error("Invalid universeid: " + universeid)
    }
        const res_url = urlcat(BASE_URL, "/:universeid/topics/topic", { universeid, topic })
        const config = {
            headers:{
            "x-api-key": apiKey
            }
        };
        const response = await axios.post(res_url, { "message": message }, config)

        handleResponse(response)


        return await response.data
}