import { Datastore, ClientIntents } from '../../dist/index.js'
import * as dotenv from 'dotenv'
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