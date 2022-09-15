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