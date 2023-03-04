//@ts-nocheck
import { MessagingService, ClientIntents } from '../../dist/index.js'
import * as dotenv from 'dotenv'
dotenv.config()

const message = new MessagingService({
    apiKey: process.env.apiKey as string,
    universeid: process.env.universeId as string,
    intents: ClientIntents.MessagingService
})


export default async function main() {
    console.log(await message.PublishAsync('TESTING', 'This is a testing message!'))
}

main()

