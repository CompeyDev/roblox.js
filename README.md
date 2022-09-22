<div align="center"><img src="https://raw.githubusercontent.com/CompeyDev/roblox.js/main/assets/roblox-js-dark.png#gh-dark-mode-only" width="50%" ></div>
<div align="center"><img src="https://raw.githubusercontent.com/CompeyDev/roblox.js/main/assets/roblox-js-light.png#gh-light-mode-only" width="50%" ></div>
<div align="center">A JavaScript wrapper for the ROBLOX OpenCloud API.</div>

# Introduction
Recently at RDC 2022, ROBLOX announced OpenCloud API endpoints for DataStore, MessagingService and more. These would have official libraries for languages such as Python and JavaScript eventually, but until then, roblox.js bridges this gap as an API wrapper.

# Installation
## Yarn:
```console
yarn add rblx.js
```

## NPM:
```console
npm i rblx.js
```

# Usage
Roblox.js is a OpenCloud API wrapper with full TypeScript support. Once installed, you can access the following classes:
- Datastore
- MessagingService

Functions are named similar to the Lua equivalents and follow a similar structure. Each class is initialized with a universeId and an apiKey from https://create.roblox.com/credentials.

## Datastore
### GetAsync
GetAsync lets you fetch the value of a particular Key in a datastore.

```js
const { Datastore } = require('rblx.js')

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.GetAsync("DATASTORE_NAME", "KEY_NAME")

```
#### Returns: `Promise<string|number|boolean|undefined>`


### SetAsync
SetAsync lets you set the value of a particular Key in a datastore.

```js
const { Datastore } = require('rblx.js')

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.SetAsync("DATASTORE_NAME", "KEY_NAME", "VALUE")

```
#### Optional Arguments: `matchVersion: string, exclusiveCreate: Boolean`
#### Returns: `Promise<DatastoreSetResponse|undefined>`

### ListKeysAsync
ListKeysAsync lets you fetch a list of keys in a datastore.

```js
const { Datastore } = require('rblx.js')

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.ListKeysAsync("DATASTORE_NAME")

```
#### Returns: `Promise<DatastoreSetResponse|undefined>`

### ListDataStoresAsync
ListDataStoresAsync lets you fetch a list of datastores in a universe.

```js
const { Datastore } = require('rblx.js')

const datastore = new Datastore("UNIVERSE_ID", "API_KEY")

await datastore.ListDataStoresAsync()

```
#### Optional Arguments: `prefix: string, limit: string, cursor: string, AllScopes: boolean`
#### Returns: `Promise<DatastoreEntries|undefined>`


# License 
[MIT](https://compeydev.mit-license.org) © DevComp - see the [LICENSE.md](LICENSE) file for details.
