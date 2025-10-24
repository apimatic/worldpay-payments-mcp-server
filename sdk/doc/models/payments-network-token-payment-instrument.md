
# Payments Network Token Payment Instrument

## Structure

`PaymentsNetworkTokenPaymentInstrument`

## Inherits From

[`CardPaymentInstrument`](../../doc/models/card-payment-instrument.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenNumber` | `string` | Required | The network token number.<br><br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `19`, *Pattern*: `[0-9]*$` |
| `cardHolderName` | `string \| undefined` | Optional | The name as shown on the card.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `cryptogram` | `string \| undefined` | Optional | The single-use cryptogram provisioned for this payment. Required for all Customer Initiated Transactions (CITs). <br><br> __Note:__ If the `cryptogram` and `eci` are not provided, the Payments API will __automatically__ attempt to provision them. This will only be successful for Network Tokens created via Worldpay. For Network Tokens created via other gateways you must provide these.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `eci` | `string \| undefined` | Optional | Electronic Commerce Indicator.<br><br>**Constraints**: *Pattern*: `^\d{2}$` |
| `expiryDate` | [`ExpiryDate`](../../doc/models/expiry-date.md) | Required | Contains your customer's card or token expiry date. |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | Contains the billing address information. |

## Example (as JSON)

```json
{
  "tokenNumber": "tokenNumber0",
  "expiryDate": {
    "year": 2028,
    "month": 6
  },
  "type": "networkToken",
  "cardHolderName": "cardHolderName2",
  "cryptogram": "cryptogram8",
  "eci": "eci8",
  "billingAddress": {
    "address1": "address10",
    "address2": "address24",
    "address3": "address32",
    "postalCode": "postalCode6",
    "city": "city8",
    "state": "state2",
    "countryCode": "countryCode2"
  }
}
```

