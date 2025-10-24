
# Token

Details of the token created

## Structure

`Token`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `tokenId` | `string \| undefined` | Optional | - |
| `tokenExpiryDateTime` | `string \| undefined` | Optional | - |
| `cardNumber` | `string \| undefined` | Optional | - |
| `cardHolderName` | `string \| undefined` | Optional | - |
| `cardExpiry` | [`ExpiryDate \| undefined`](../../doc/models/expiry-date.md) | Optional | Contains your customer's card or token expiry date. |
| `bin` | `string \| undefined` | Optional | - |
| `fundingType` | `string \| undefined` | Optional | - |
| `countryCode` | `string \| undefined` | Optional | - |
| `schemeReference` | `string \| undefined` | Optional | - |
| `conflicts` | [`TokenResponseConflicts \| undefined`](../../doc/models/token-response-conflicts.md) | Optional | - |

## Example (as JSON)

```json
{
  "href": "https://try.access.worldpay.com/tokens/eyJrIjoxLCJkIjoiUW5rZHBXZDZ1MzBBY0I0MTVJQUdPeGE3ZkFobE1lTjJyYk05eDZxQUJ2RT0ifQ",
  "tokenId": "9997095516055002467",
  "tokenExpiryDateTime": "04/12/2024 11:49:56",
  "cardNumber": "4000********1091",
  "cardHolderName": "Sherlock Holmes",
  "bin": "400000",
  "fundingType": "debit",
  "schemeReference": "060720116005060"
}
```

