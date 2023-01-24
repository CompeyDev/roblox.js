import { ClientIntents, Datastore } from '../../dist/index.js'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import * as dotenv from 'dotenv'
dotenv.config()


//@ts-ignore
const datastore = new Datastore({
    apiKey: process.env.apiKey,
    universeid: process.env.universeId,
    intents: ClientIntents.Datastore
})


export default async function main() {
    console.log(await datastore.GetVersionAsync("KeyStore", "TESTING", "08DA9790C75527F0.0000000011.08DA9798C9BEB578.01"))
}

main()

