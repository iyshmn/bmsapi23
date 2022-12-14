const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(
        {"bank": [
            {
            "AccountName": "Current Account",
            "BankBalance": 20310.0000,
            "BankFeedsAccountId": 0,
            "Code": 1200,
            "DefaultInvoicePaymentType": {
              "Id": 45,
              "Name": "Bank Transfer"
            },
            "DefaultPurchasePaymentType": {
              "Id": 0,
              "Name": null
            },
            "FeedAccountHolder": "",
            "FeedAccountName": "",
            "FeedAccountNumber": "",
            "IconId": 0,
            "Id": 12,
            "IncludeOnDashBoard": false,
            "IsArchived": false,
            "IsDefaultAccount": false,
            "LastTransactionImportDate": null,
            "Note": null,
            "ReconcileDate": null,
            "ShowPaidInFirst": false,
            "StartingAmount": 0,
            "StartingDate": null,
            "TransactionLockDate": "2014-07-30 12:00:00",
            "TransactionLockEnabled": false
          },
          {
            "AccountName": "HSBC",
            "BankBalance": 200.0000,
            "BankFeedsAccountId": 0,
            "Code": 1201,
            "DefaultInvoicePaymentType": {
              "Id": 45,
              "Name": "Bank Transfer"
            },
            "DefaultPurchasePaymentType": {
              "Id": 0,
              "Name": null
            },
            "FeedAccountHolder": "",
            "FeedAccountName": "",
            "FeedAccountNumber": "",
            "IconId": 0,
            "Id": 302030,
            "IncludeOnDashBoard": false,
            "IsArchived": false,
            "IsDefaultAccount": true,
            "LastTransactionImportDate": null,
            "Note": null,
            "ReconcileDate": null,
            "ShowPaidInFirst": false,
            "StartingAmount": 0,
            "StartingDate": null,
            "TransactionLockDate": "2014-07-31 12:00:00",
            "TransactionLockEnabled": false
          },
          {
            "AccountName": "ICICI",
            "BankBalance": 12069.0000,
            "BankFeedsAccountId": 0,
            "Code": 1202,
            "DefaultInvoicePaymentType": {
              "Id": 45,
              "Name": "Bank Transfer"
            },
            "DefaultPurchasePaymentType": {
              "Id": 0,
              "Name": null
            },
            "FeedAccountHolder": "",
            "FeedAccountName": "",
            "FeedAccountNumber": "",
            "IconId": 0,
            "Id": 302040,
            "IncludeOnDashBoard": false,
            "IsArchived": false,
            "IsDefaultAccount": false,
            "LastTransactionImportDate": null,
            "Note": null,
            "ReconcileDate": null,
            "ShowPaidInFirst": false,
            "StartingAmount": 0,
            "StartingDate": null,
            "TransactionLockDate": "2014-08-04 12:00:00",
            "TransactionLockEnabled": false
          },
          {
            "AccountName": "HDFC",
            "BankBalance": 0.0000,
            "BankFeedsAccountId": 0,
            "Code": 1203,
            "DefaultInvoicePaymentType": {
              "Id": 11,
              "Name": "Cheque"
            },
            "DefaultPurchasePaymentType": {
              "Id": 0,
              "Name": null
            },
            "FeedAccountHolder": "",
            "FeedAccountName": "",
            "FeedAccountNumber": "",
            "IconId": 0,
            "Id": 302042,
            "IncludeOnDashBoard": false,
            "IsArchived": false,
            "IsDefaultAccount": false,
            "LastTransactionImportDate": null,
            "Note": null,
            "ReconcileDate": null,
            "ShowPaidInFirst": false,
            "StartingAmount": 0,
            "StartingDate": null,
            "TransactionLockDate": "2014-08-07 12:00:00",
            "TransactionLockEnabled": false
          },
          {
            "AccountName": "BNY",
            "BankBalance": 0.0000,
            "BankFeedsAccountId": 0,
            "Code": 1204,
            "DefaultInvoicePaymentType": {
              "Id": 45,
              "Name": "Bank Transfer"
            },
            "DefaultPurchasePaymentType": {
              "Id": 0,
              "Name": null
            },
            "FeedAccountHolder": "",
            "FeedAccountName": "",
            "FeedAccountNumber": "",
            "IconId": 0,
            "Id": 302043,
            "IncludeOnDashBoard": false,
            "IsArchived": false,
            "IsDefaultAccount": false,
            "LastTransactionImportDate": null,
            "Note": null,
            "ReconcileDate": null,
            "ShowPaidInFirst": false,
            "StartingAmount": 0,
            "StartingDate": null,
            "TransactionLockDate": "2014-08-07 12:00:00",
            "TransactionLockEnabled": false
          }]
        }
    ));
}); 

server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`);
});
