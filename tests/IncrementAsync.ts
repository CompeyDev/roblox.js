import { Datastore } from '../src'
import * as dotenv from 'dotenv'
dotenv.config()

//@ts-ignore
const datastore = new Datastore(process.env.universeId, process.env.apiKey)


async function main() {
    console.log(await datastore.IncrementAsync("KeyStore", "SECRET", 2))
}

main()