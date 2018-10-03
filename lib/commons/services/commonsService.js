﻿const request = require("request-promise");
const util = require("../utility.js");
const GetTermsURL = "/mtapi/base/services/search/{companyId}/objects";

module.exports = {
    
    searchObjects: async function (cfg, etag, body) {

        var URL = cfg.endPointURL + GetTermsURL.replace("{companyId}", cfg.companyId);
        return await request.post(util.requestOptions(URL, body, etag)).then(util.autoParse).catch(util.error);
    },
    getAllSubsidiaries: function () {
   
      var subsidiariesData=
      {
        "entities": [
         {
        "modified": "2018-07-20T13:24:13Z",
        "created": "2018-07-20T13:24:13Z",
        "id": "ffd53ba9-a225-43b6-9404-47c930648181",
        "externalId": "31",
        "memo": null,
        "description": null,
        "name": "Agave Springs Apartments",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "31",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-19T10:59:44Z",
        "created": "2018-07-19T10:59:44Z",
        "id": "685b0273-78f7-4f8c-82a6-744f9053ff80",
        "externalId": "15",
        "memo": null,
        "description": null,
        "name": "Boulder Mountain HOA",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "15",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:15Z",
        "created": "2018-07-20T13:24:15Z",
        "id": "fb2538b5-6450-487e-8408-8ffc05681f18",
        "externalId": "30",
        "memo": null,
        "description": null,
        "name": "Cardinal Stadium Village",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "30",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:16Z",
        "created": "2018-07-20T13:24:16Z",
        "id": "9ad4f22e-b77b-4976-84b2-5dae11d46e32",
        "externalId": "17",
        "memo": null,
        "description": null,
        "name": "Countryside Association",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "17",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:16Z",
        "created": "2018-07-20T13:24:16Z",
        "id": "ae65f5d5-ece3-4c43-a7c0-cd29cbdd2ef8",
        "externalId": "42",
        "memo": null,
        "description": null,
        "name": "Danville Corners",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "42",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:17Z",
        "created": "2018-07-20T13:24:17Z",
        "id": "de2bacb7-27f9-48e1-a152-b928fe5ec53b",
        "externalId": "29",
        "memo": null,
        "description": null,
        "name": "Desert Cactus Ranch",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "29",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:18Z",
        "created": "2018-07-20T13:24:18Z",
        "id": "c5b78ec3-f79d-4b7d-bccb-1a896256e8dc",
        "externalId": "37",
        "memo": null,
        "description": null,
        "name": "Discovery At Continental Orchard",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "37",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:19Z",
        "created": "2018-07-20T13:24:19Z",
        "id": "c4ffbb35-3f3e-4c64-8dc7-ad211e58f660",
        "externalId": "21",
        "memo": null,
        "description": null,
        "name": "Fennville Association",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "21",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:19Z",
        "created": "2018-07-20T13:24:19Z",
        "id": "83ba591c-9662-4cda-8ec2-fbff0d498713",
        "externalId": "43",
        "memo": null,
        "description": null,
        "name": "Florida Test",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "43",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:20Z",
        "created": "2018-07-20T13:24:20Z",
        "id": "63344032-8a78-4400-ab4b-1cffe0018081",
        "externalId": "18",
        "memo": null,
        "description": null,
        "name": "Forest Glen Rivers",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "18",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:21Z",
        "created": "2018-07-20T13:24:21Z",
        "id": "7a7843f2-964f-4c50-903e-15da80c2f6f0",
        "externalId": "9",
        "memo": null,
        "description": null,
        "name": "Gold Mountain Condominiums",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "9",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:22Z",
        "created": "2018-07-20T13:24:22Z",
        "id": "4407f86c-163b-4621-a8f5-d0155bb16a9c",
        "externalId": "40",
        "memo": null,
        "description": null,
        "name": "Heywood",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "40",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:22Z",
        "created": "2018-07-20T13:24:22Z",
        "id": "97c93e46-d058-42f0-87ee-3eba6c12ccf7",
        "externalId": "41",
        "memo": null,
        "description": null,
        "name": "Heywood2",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "41",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:23Z",
        "created": "2018-07-20T13:24:23Z",
        "id": "152a6a84-1ba2-4681-bee9-7965542a3f97",
        "externalId": "3",
        "memo": null,
        "description": null,
        "name": "Indian Village",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "3",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:24Z",
        "created": "2018-07-20T13:24:24Z",
        "id": "5e2d9adc-5436-4982-940f-baaea9a336f4",
        "externalId": "35",
        "memo": null,
        "description": null,
        "name": "Marin Village",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "35",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:25Z",
        "created": "2018-07-20T13:24:24Z",
        "id": "3baecc7b-d4c1-4ae3-8292-d0a872dbb818",
        "externalId": "20",
        "memo": null,
        "description": null,
        "name": "New Client",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "20",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:25Z",
        "created": "2018-07-20T13:24:25Z",
        "id": "2e512cdc-7e92-4c25-a701-75b63b65d39e",
        "externalId": "28",
        "memo": null,
        "description": null,
        "name": "PSG Client",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "28",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:26Z",
        "created": "2018-07-20T13:24:26Z",
        "id": "a165926d-539f-4292-be27-5bd430644227",
        "externalId": "4",
        "memo": null,
        "description": null,
        "name": "SD Desert Highlands",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "4",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:27Z",
        "created": "2018-07-20T13:24:27Z",
        "id": "839694cc-a1cd-41e4-8fae-75b1a2fc151c",
        "externalId": "10",
        "memo": null,
        "description": null,
        "name": "Sonoran Heights",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "10",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:28Z",
        "created": "2018-07-20T13:24:28Z",
        "id": "d6da6ca1-c494-40a2-9591-263cf98289e1",
        "externalId": "34",
        "memo": null,
        "description": null,
        "name": "T1",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "34",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:29Z",
        "created": "2018-07-20T13:24:29Z",
        "id": "2738ed6b-4df3-4bfc-9515-b257261077fa",
        "externalId": "16",
        "memo": null,
        "description": null,
        "name": "Test Client",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "16",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:30Z",
        "created": "2018-07-20T13:24:30Z",
        "id": "3aa01367-f4d9-4719-96b4-b914fa8092e1",
        "externalId": "32",
        "memo": null,
        "description": null,
        "name": "TestCom1",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "32",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:30Z",
        "created": "2018-07-20T13:24:30Z",
        "id": "5a12bd52-7679-4056-9522-15ec081d1186",
        "externalId": "19",
        "memo": null,
        "description": null,
        "name": "Timmonds Ridge",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "19",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:31Z",
        "created": "2018-07-20T13:24:31Z",
        "id": "e8167b53-99fb-4e6f-abda-ca71d444ebcf",
        "externalId": "25",
        "memo": null,
        "description": null,
        "name": "Trio",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "25",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:32Z",
        "created": "2018-07-20T13:24:32Z",
        "id": "cf813c41-c035-475d-80ba-3fe97ffeb861",
        "externalId": "2",
        "memo": null,
        "description": null,
        "name": "Windwalker Ranch",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "2",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:33Z",
        "created": "2018-07-20T13:24:33Z",
        "id": "cdf3bb8e-16b9-4fe2-8dc1-0de401852c0e",
        "externalId": "27",
        "memo": null,
        "description": null,
        "name": "XYZ Client",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "27",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      },
      {
        "modified": "2018-07-20T13:24:33Z",
        "created": "2018-07-20T13:24:33Z",
        "id": "628373a1-1ad1-4801-9501-c6cf8e0d429c",
        "externalId": "36",
        "memo": null,
        "description": null,
        "name": "XYZ Prop",
        "legalName": null,
        "dBAName": null,
        "vendorType": null,
        "emails": null,
        "externalParentId": "36",
        "address": null,
        "phones": null,
        "parent": {
          "modified": null,
          "created": null,
          "id": "2f436ea7-427d-4a12-9af5-73c8975c545d",
          "externalId": null,
          "memo": null,
          "description": null,
          "name": null,
          "legalName": null,
          "dBAName": null,
          "vendorType": null,
          "emails": null,
          "address": null,
          "phones": null,
          "parent": null
        },
        "subsidiaries": null,
        "paymentMethods": null
      }
    ]
}
return subsidiariesData;
 }

}  
