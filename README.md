<div align="center"><img src="https://raw.githubusercontent.com/CompeyDev/roblox.js/main/assets/roblox-js-dark.png#gh-dark-mode-only" width="50%" ></div>
<div align="center"><img src="https://raw.githubusercontent.com/CompeyDev/roblox.js/main/assets/roblox-js-light.png#gh-light-mode-only" width="50%" ></div>
<div align="center">A JavaScript wrapper for the ROBLOX OpenCloud API.</div>
<p align="center">
<br>
<a href="https://npm.im/rblx.js"> <img src="https://img.shields.io/npm/v/rblx.js?color=%23800080" /> </a>
<a href="https://bundlephobia.com/package/rblx.js@latest"> <img src="https://img.shields.io/bundlephobia/min/rblx.js" /> </a>
<a href="https://compeydev.mit-license.org"> <img src="https://img.shields.io/npm/l/rblx.js" /> </a>

---

# Introduction
Recently at RDC 2022, ROBLOX announced OpenCloud API endpoints for DataStore, MessagingService and more to programatically access Roblox Studio Services from external sources. These would have official libraries for languages such as Python and JavaScript eventually, but until then, roblox.js bridges this gap as an API wrapper.

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

# License 
[MIT](https://compeydev.mit-license.org) © DevComp - see the [LICENSE.md](LICENSE) file for details.

# Documentation
For detailed documentations and examples check out [the wiki](https://github.com/CompeyDev/roblox.js/wiki) or the [`docs`](https://github.com/CompeyDev/roblox.js/tree/HEAD/docs) directory.
