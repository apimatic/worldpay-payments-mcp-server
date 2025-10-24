
# Payments Response Payment Instrument

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsResponsePaymentInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `cardBin` | `string \| undefined` | Optional | - |
| `lastFour` | `string \| undefined` | Optional | - |
| `countryCode` | `string \| undefined` | Optional | - |
| `expiryDate` | [`ExpiryDate \| undefined`](../../doc/models/expiry-date.md) | Optional | Contains your customer's card or token expiry date. |
| `cardBrand` | `string \| undefined` | Optional | - |
| `fundingType` | `string \| undefined` | Optional | - |
| `category` | `string \| undefined` | Optional | - |
| `issuerName` | `string \| undefined` | Optional | - |
| `paymentAccountReference` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type6",
  "cardBin": "cardBin0",
  "lastFour": "lastFour0",
  "countryCode": "countryCode0",
  "expiryDate": {
    "year": 20,
    "month": 244,
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

