import GetAsync from './datastore/GetAsync'
import SetAsync from './datastore/SetAsync'
import IncrementAsync from './datastore/IncrementAsync'
import ListKeysAsync from './datastore/ListKeysAsync'
import ListDataStoresAsync from './datastore/ListDataStoresAsync'
import RemoveAsync from './datastore/RemoveAsync'
import GetVersionAsync from './datastore/GetVersionAsync'
import PublishAsync from './messagingservice/PublishAsync'

// Datastore tests
describe("GetAsync", function() {
    it("successfully fetches key values", function() {
        GetAsync()
    });
});

describe("SetAsync", function() {
    it("successfully sets key values", function() {
        SetAsync()
    });
});

describe("IncrementAsync", function() {
    it("successfully increments key values", function() {
        IncrementAsync()
    });
});

describe("ListKeysAsync", function() {
    it("successfully lists keys", function() {
        ListKeysAsync()
    });
});

describe("ListDataStoresAsync", function() {
    it("successfully lists datastores", function() {
        ListDataStoresAsync()
    });
});

describe("RemovesKeyAsync", function() {
    it("successfully removes keys", function() {
        RemoveAsync()
    });
});

describe("GetsVersionAsync", function() {
    it("successfully gets a key from its version", function() {
        GetVersionAsync()
    });
});


describe("PublishesAsync", function() {
    it("successfully publishes a message to a topic", function() {
        PublishAsync()
    });
});