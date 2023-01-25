<div align="center"><img src="https://raw.githubusercontent.com/CompeyDev/roblox.js/main/assets/roblox-js-dark.png#gh-dark-mode-only" width="50%" ></div>
<div align="center"><img src="https://raw.githubusercontent.com/CompeyDev/roblox.js/main/assets/roblox-js-light.png#gh-light-mode-only" width="50%" ></div>
<div align="center">A JavaScript wrapper for the ROBLOX OpenCloud API.</div>
<p align="center">
<br>

## Datastore
### GetAsync
GetAsync lets you fetch the value of a particular Key in a datastore.

#### CommonJS
```js
const { Datastore } = require('rblx.js')

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.GetAsync("DATASTORE_NAME", "KEY_NAME")

```


#### ES6
```ts
import { Datastore } from 'rblx.js'

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.GetAsync("DATASTORE_NAME", "KEY_NAME")

```

##### Returns: `Promise<string|number|boolean|undefined>`

### SetAsync
SetAsync lets you set the value of a particular Key in a datastore.

#### CommonJS
```js
const { Datastore } = require('rblx.js')

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.SetAsync("DATASTORE_NAME", "KEY_NAME", "VALUE")

```

#### ES6
```ts
import { Datastore } from 'rblx.js'

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.SetAsync("DATASTORE_NAME", "KEY_NAME", "VALUE")
```

##### Optional Arguments: `matchVersion: string, exclusiveCreate: Boolean`
##### Returns: `Promise<DatastoreSetResponse|undefined>`

### RemoveAsync
RemoveAsync lets you remove a key from a datastore.

#### CommonJS

```js
const { Datastore } = require('rblx.js')

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.RemoveAsync("DATASTORE_NAME", "KEY_NAME")

```


#### ES6
```ts
import { Datastore } from 'rblx.js'

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.RemoveAsync("DATASTORE_NAME", "KEY_NAME")
```

##### Returns: `Promise<undefined>`

### ListKeysAsync
ListKeysAsync lets you fetch a list of keys in a datastore.

#### CommonJS
```js
const { Datastore } = require('rblx.js')

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.ListKeysAsync("DATASTORE_NAME")
```

#### ES6
```ts
import { Datastore } from 'rblx.js'

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.ListKeysAsync("DATASTORE_NAME")
```
##### Returns: `Promise<DatastoreSetResponse|undefined>`

### ListDataStoresAsync
ListDataStoresAsync lets you fetch a list of datastores in a universe.

#### CommonJS
```js
const { Datastore } = require('rblx.js')

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.ListDataStoresAsync()
```

#### ES6
```ts
import { Datastore } from 'rblx.js'

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.ListDataStoresAsync()
```

##### Optional Arguments: `prefix: string, limit: string, cursor: string, AllScopes: boolean`
##### Returns: `Promise<DatastoreEntries|undefined>`


### GetVersionAsync
GetVersionAsync lets you fetch a key from its version.

#### CommonJS

```js
const { Datastore } = require('rblx.js')

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.GetVersionAsync("DATASTORE_NAME", "KEY_NAME", "08DA9790C75527F0.0000000011.08DA9798C9BEB578.01")
```

#### ES6

```ts
import { Datastore } from 'rblx.js'

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.GetVersionAsync("DATASTORE_NAME", "KEY_NAME", "08DA9790C75527F0.0000000011.08DA9798C9BEB578.01")
```
##### Optional Arguments: `scope: string`
##### Returns: `Promise<string|number|boolean|undefined>`

### IncrementAsync
IncrementAsync increments a key with an integer value by the given value.

#### CommonJS

```js
const { Datastore } = require('rblx.js')

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.IncrementAsync("DATASTORE_NAME", "KEY_NAME", 3)
```

#### ES6
```ts
import { Datastore } from 'rblx.js'

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.IncrementAsync("DATASTORE_NAME", "KEY_NAME", 3)
```
##### Returns: `Promise<DatastoreSetResponse>`
