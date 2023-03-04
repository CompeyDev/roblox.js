import { ClientIntents, Datastore } from '../../dist/index.js'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import * as dotenv from 'dotenv'
dotenv.config()


//@ts-ignore
const datastore = new Datastore({
    apiKey: process.env.apiKey as string,
    universeid: process.env.universeId as string,
    intents: ClientIntents.Datastore
})


export default async function main() {
    console.log(await datastore.RemoveAsync("KeyStore", "TESTING"))
}

main()

