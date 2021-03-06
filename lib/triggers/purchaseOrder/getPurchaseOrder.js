"use strict";
const messages = require("elasticio-node").messages;
const accountService = require("../../commons/services/accountService.js");
const commonsService = require("../../commons/services/commonsService.js");
const utility = require("../../commons/utility.js");
exports.process = processTrigger;

/*** 
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as endPointURL,username,password 
 * @param snapshot save the current state of integration step for the future reference. 
 * @returns promise resolving a message to be emitted to the platform */

async function processTrigger(msg, cfg, snapshot) {

    const self = this;
    try {

        snapshot = snapshot || {};
        if (utility.isEmpty(snapshot.etag)) {
            snapshot.etag = await utility.getEtag(accountService, cfg);
        }
        var body = {
            "view": "PURCHASE_ORDER",
            "query": "purchaseOrder_externalId != null"
        }
        var result = await commonsService.searchObjects(cfg, snapshot.etag, body);

        if (utility.isEmpty(result)) return;

        if (result.count > 0) {
            var lastItemUpdatedDate = snapshot.LastModified || '';
            var filterResult = utility.filterDataBasedOnLastModifiedDate(result.entities, lastItemUpdatedDate);
            snapshot.LastModified = utility.getMaxDate(result.entities);

            if (!utility.isEmpty(filterResult)) {

                filterResult.forEach(element => {

                    var poHeaderAmount = 0;
                    element.items.forEach(element => {
                        poHeaderAmount += element.amountDue.amount;
                    });
                    element.totalAmount = poHeaderAmount
                    
                    self.emit("data", messages.newMessageWithBody(element));
                });
            }
            self.emit("snapshot", snapshot);
        }
    }
    catch (ex) {
        throw new Error(ex);
    }
}