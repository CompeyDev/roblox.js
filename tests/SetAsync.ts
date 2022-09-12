import { Datastore } from '../src'
import * as dotenv from 'dotenv'
dotenv.config()

//@ts-ignore
const datastore = new Datastore(process.env.universeId, process.env.apiKey)


async function main() {
    console.log(await datastore.SetAsync("KeyStore", "SECRET", 21, "08DA7D480EAB942D.0000000005.08DA94BBB6232B0F.01"))
}

main()