import { Datastore } from '../src'
import * as dotenv from 'dotenv'
dotenv.config()

//@ts-ignore
const datastore = new Datastore(process.env.universeId, "k")


export default async function main() {
    console.log(await datastore.ListDataStoresAsync())
}

main()