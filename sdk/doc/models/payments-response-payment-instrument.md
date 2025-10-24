
# Payments Response Payment Instrument

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

## Example (as JSON)

```json
{
  "type": "type6",
  "cardBin": "cardBin0",
  "lastFour": "lastFour0",
  "countryCode": "countryCode0",
  "expiryDate": {
    "year": 20,
    "month": 244
  }
}
```

