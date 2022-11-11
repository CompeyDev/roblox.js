<div align="center"><img src="https://raw.githubusercontent.com/CompeyDev/roblox.js/main/assets/roblox-js-dark.png#gh-dark-mode-only" width="50%" ></div>
<div align="center"><img src="https://raw.githubusercontent.com/CompeyDev/roblox.js/main/assets/roblox-js-light.png#gh-light-mode-only" width="50%" ></div>
<div align="center">A JavaScript wrapper for the ROBLOX OpenCloud API.</div>
<p align="center">
<br>

## MessagingService
### PublishAsync
Publishes a message to a provided topic. 

#### CommonJS
```js
const MessagingService = require('rblx.js')

const message = new MessagingService("UNIVERSE_ID", "API_KEY")

await message.PublishAsync('MessageTopic', 'I am the message body!')
```

#### ES6
```ts
import { MessagingService } from 'rblx.js'

const message = new MessagingService("UNIVERSE_ID", "API_KEY")

await message.PublishAsync('MessageTopic', 'I am the message body!')
```
##### Returns: `Promise<string|number|boolean|undefined>`
