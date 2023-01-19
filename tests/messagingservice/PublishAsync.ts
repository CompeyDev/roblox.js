//@ts-nocheck
import { MessagingService } from '../../src'
import * as dotenv from 'dotenv'
import { ClientIntents } from '../../lib/types/types'
dotenv.config()

const message = new MessagingService({
    apiKey: process.env.apiKey,
    universeid: process.env.universeId,
    intents: ClientIntents.MessagingService
})


export default async function main() {
    console.log(await message.PublishAsync('TESTING', 'This is a testing message!'))
}

main()

