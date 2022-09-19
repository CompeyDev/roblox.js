import urlcat from 'urlcat';
import axios from 'axios'

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

        if (response.status == 400) {
            throw new Error("Invalid request.")
        }


        if (response.status == 401) {
            throw new Error("API key not valid for operation, user does not have authorization.")
        }

        if (response.status == 403) {
            throw new Error("Publish is not allowed on universe.")
        }

        if (response.status == 500) {
            throw new Error("Server internal error / Unknown error.")
        }


        return await response.data
}