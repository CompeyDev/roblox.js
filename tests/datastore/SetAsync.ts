import { Datastore } from '../../dist'
import * as dotenv from 'dotenv'
import { ClientIntents } from '../../lib/types/types'
dotenv.config()

//@ts-ignore
const datastore = new Datastore({
    apiKey: process.env.apiKey,
    universeid: process.env.universeId,
    intents: ClientIntents.Datastore
})


export default async function main() {
    console.log(await datastore.SetAsync("KeyStore", "TESTING", 22))
}

main()