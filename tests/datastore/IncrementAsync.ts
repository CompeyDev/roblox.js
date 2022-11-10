import { Datastore } from '../../dist'
import * as dotenv from 'dotenv'
dotenv.config()

//@ts-ignore
const datastore = new Datastore(process.env.universeId, process.env.apiKey)


export default async function main() {
    console.log(await datastore.IncrementAsync("KeyStore", "TESTING", 2))
}

main()