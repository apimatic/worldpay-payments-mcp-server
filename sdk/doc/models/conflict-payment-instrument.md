
# Conflict Payment Instrument

*This model accepts additional fields of type unknown.*

## Structure

`ConflictPaymentInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `cardNumber` | `string \| undefined` | Optional | - |
| `cardHolderName` | `string \| undefined` | Optional | - |
| `cardExpiryDate` | [`ExpiryDate \| undefined`](../../doc/models/expiry-date.md) | Optional | Contains your customer's card or token expiry date. |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | Contains the billing address information. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type8",
  "cardNumber": "cardNumber8",
  "cardHolderName": "cardHolderName6",
  "cardExpiryDate": {
    "year": 98,
    "month": 66,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "billingAddress": {
    "address1": "address10",
    "address2": "address24",
    "address3": "address32",
    "postalCode": "postalCode6",
    "city": "city8",
    "state": "state2",
    "countryCode": "countryCode2",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

