import urlcat from 'urlcat';
import axios from 'axios'

const BASE_URL = "https://apis.roblox.com/datastores/v1/universes"

export default async function main(apiKey: string, universeid: string): Promise<{
    "datastores": [
        {
            "name": String,
            "createdTime": String
        }
    ],
    "nextPageCursor": String
}> {
    try {
        BigInt(universeid)
    } catch(e) {
        throw new Error("Invalid universeid: " + universeid)
    }
    const res_url = urlcat(BASE_URL, "/:universeid/standard-datastores", { universeid })
    const config = {
        headers:{
          "x-api-key": apiKey
        }
      };
    const response = await axios.get(res_url, config)
    return await response.data
}