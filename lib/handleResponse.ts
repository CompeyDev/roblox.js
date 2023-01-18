import { AxiosResponse } from "axios"
import { ERROR_TYPES } from "../src"

export default function main(response: AxiosResponse) {
    if (response.status !== 200) {
        const errorDescriptor = ERROR_TYPES[response.status]
    
        if (!errorDescriptor) {
            throw new Error(`Unknown error occured with response code ${response.status}`)
        }
    
        throw new Error(`Exception: ${errorDescriptor} occured at fetchStores`)
    }
    
}

// export default function (e: any) {
//     console.log('d')
// }