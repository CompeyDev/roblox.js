import { AxiosResponse } from "axios"
import { RequestResponses } from "./types/types.d"
// stop, pls stop.

export default function main(response: AxiosResponse) {
    if (response.status !== 200) {
        const errorDescriptor = RequestResponses[response.status]
    
        if (!errorDescriptor) {
            throw new Error(`Unknown error occured with response code ${response.status}`)
        }
    
        throw new Error(`Exception: ${errorDescriptor} occured at fetchStores`)
    }
    
}