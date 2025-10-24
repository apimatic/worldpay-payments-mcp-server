
# Updated Payment Instrument

Details of the updated payment instrument.

## Structure

`UpdatedPaymentInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appliedNetworkToken` | `boolean \| undefined` | Optional | Returned if the payment instrument was swapped for a network token. |
| `type` | [`TypeEnum \| undefined`](../../doc/models/type-enum.md) | Optional | - |
| `accountUpdaterMessage` | [`AccountUpdaterMessageEnum \| undefined`](../../doc/models/account-updater-message-enum.md) | Optional | Details on the type of payment instrument update. |
| `cardNumber` | `string \| undefined` | Optional | - |
| `cardBin` | `string \| undefined` | Optional | The updated card BIN (Bank Identification Number). |
| `lastFour` | `string \| undefined` | Optional | The four digits of the updated card. Some characters may be obfuscated with a * if the PAN length is less than 16 characters. |
| `expiryDate` | [`ExpiryDate \| undefined`](../../doc/models/expiry-date.md) | Optional | Contains your customer's card or token expiry date. |
| `cardBrand` | `string \| undefined` | Optional | The brand of the updated card. In rare circumstances a card may be reissued under a different brand. |
| `fundingType` | `string \| undefined` | Optional | How the card is funded. |
| `countryCode` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "type": "card/plain+masked",
  "accountUpdaterMessage": "The account number was changed",
  "cardBin": "444433",
  "lastFour": "1111",
  "appliedNetworkToken": false,
  "cardNumber": "cardNumber0"
}
```

