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

declare class Datastore {
    constructor(universeid: string, apiKey: string);
    public ListDataStoresAsync(prefix?: string, limit?: string, cursor?: string): Promise<Datastores|undefined>;
    public GetAsync(datastoreName: string, entryKey: string): Promise<string|number|boolean|undefined>;
    public SetAsync(datastoreName: string, entryKey: string, newValue: string|number|boolean, matchVersion?: string, exclusiveCreate?: Boolean): Promise<DatastoreSetResponse|undefined>
    public IncrementAsync(datastoreName: string, entryKey: string, incrementBy: number): Promise<DatastoreSetResponse|undefined>;
    public RemoveAsync(datastoreName: string, entryKey: string): Promise<string|number|boolean|undefined>;
    public GetVersionAsync(datastoreName: string, entryKey: string, versionid: string, scope?: string): Promise<string|number|boolean|undefined>;
    public ListKeysAsync(datastoreName: string, prefix?: string, limit?: string, cursor?: string, AllScopes?: boolean): Promise<DatastoreEntries|undefined> 
}

declare class MessagingService {
    constructor(universeid: string, apiKey: string);
    public PublishAsync(topi: string, message: string): Promise<string|number|boolean|undefined>;
}