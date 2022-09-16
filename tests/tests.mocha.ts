import GetAsync from './GetAsync'
import SetAsync from './SetAsync'
import IncrementAsync from './IncrementAsync'
import ListKeysAsync from './ListKeysAsync'
import ListDataStoresAsync from './ListDataStoresAsync'
import RemoveAsync from './RemoveAsync'


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