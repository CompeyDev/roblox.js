import { Datastore } from '../../src'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import * as dotenv from 'dotenv'
dotenv.config()


//@ts-ignore
const datastore = new Datastore(process.env.universeId, process.env.apiKey)


export default async function main() {
    console.log(await datastore.RemoveAsync("KeyStore", "TESTING"))
}

main()

