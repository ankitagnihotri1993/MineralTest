"use strict";
const messages = require("elasticio-node").messages;
const accountService = require("../../commons/services/accountService.js");
const invoiceService = require("../../commons/services/invoiceService.js");
const utility = require("../../commons/utility.js");
exports.process = processAction;

/*** 
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as endPointURL,apiKey,username,password 
 * @param snapshot save the current state of integration step for the future reference.
 * @returns promise resolving a message to be emitted to the platform
 */
async function processAction(msg, cfg, snapshot) {
    const self = this;
    try {
        
        snapshot = snapshot || {};
        if (utility.isEmpty(snapshot.etag)) {
            snapshot.etag = await utility.getEtag(accountService, cfg);
        }

        var subsidiaries = {
            list: []
        };
        for (var i = 0; i < msg.body.subsidiaries.length; i++) {
            // create Subsidiary in MT
            var result = await invoiceService.createSubsidiary(msg.body.subsidiaries[i], cfg, snapshot.etag);
            subsidiaries.list.push(result);
        }
        self.emit("data", messages.newMessageWithBody(subsidiaries));

    }
    catch (ex) {
        throw new Error(ex);
    }
}