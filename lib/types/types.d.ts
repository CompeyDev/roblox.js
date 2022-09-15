export interface DatastoreEntries {
  keys: [
    {
      key: string;
    }
  ];
  nextPageCursor: string;
}

export interface Datastores {
  datastores: [
    {
      name: String;
      createdTime: String;
    }
  ];
  nextPageCursor: String;
}

export interface DatastoreSetResponse {
  version: string,
  deleted: boolean,
  contentLength: number,
  createdTime: string,
  objectCreatedTime: string
}