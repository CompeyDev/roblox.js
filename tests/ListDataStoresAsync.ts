import { Datastore } from '../src'
import * as dotenv from 'dotenv'
dotenv.config()

//@ts-ignore
const datastore = new Datastore(process.env.universeId, process.env.apiKey, "Key")


async function main() {
    console.log(await datastore.ListDataStoresAsync())
}

main()