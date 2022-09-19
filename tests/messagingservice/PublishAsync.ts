import { MessagingService } from '../../src'
import * as dotenv from 'dotenv'
dotenv.config()


//@ts-ignore
const message = new MessagingService(process.env.universeId, process.env.apiKey)


export default async function main() {
    console.log(await message.PublishAsync('TESTING', 'This is a testing message!'))
}

main()

