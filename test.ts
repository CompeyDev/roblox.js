import { Datastore } from './src/datastore/index'
import * as dotenv from 'dotenv'
dotenv.config()

//@ts-ignore
const datastore = new Datastore(process.env.universeId, process.env.apiKey)


async function main() {
    console.log(await datastore.ListDataStoresAsync())
}

main()