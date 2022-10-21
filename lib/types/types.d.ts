/**
 * @see[GetAsync](../../src/datastore/fetchEntries.ts) API return object type.
 */

export interface DatastoreEntries {
    keys: [
        {
            key: string;
        }
    ];
    nextPageCursor: string;
}

/**
 * @see[GetAsync](../../src/datastore/fetchStores.ts) API return object type.
 */

export interface Datastores {
    datastores: [
        {
            name: String;
            createdTime: String;
        }
    ];
    nextPageCursor: String;
}

/**
 * @see[GetAsync](../../src/datastore/setEntry.ts) API return object type.
 */

export interface DatastoreSetResponse {
    version: string,
    deleted: boolean,
    contentLength: number,
    createdTime: string,
    objectCreatedTime: string
}

export class Datastore {
    private universeid: string;
    private apiKey: string
    constructor(universeid: string, apiKey: string);
    public async ListDataStoresAsync(prefix?: string, limit?: string, cursor?: string);
    public async GetAsync(datastoreName: string, entryKey: string);
    public async SetAsync(datastoreName: string, entryKey: string, newValue: string|number|boolean, matchVersion?: string, exclusiveCreate?: Boolean): Promise<DatastoreSetResponse|undefined>
    public async IncrementAsync(datastoreName: string, entryKey: string, incrementBy: number): Promise<DatastoreSetResponse>;
    public async RemoveAsync(datastoreName: string, entryKey: string): Promise<string|number|boolean|undefined>;
    public async GetVersionAsync(datastoreName: string, entryKey: string, versionid: string, scope?: string): Promise<string|number|boolean|undefined>;
}

export class MessagingService {
    private apiKey: string;
    private universeid: string;
    constructor(universeid: string, apiKey: string);
    public async PublishAsync(topic: string, message: string);
}