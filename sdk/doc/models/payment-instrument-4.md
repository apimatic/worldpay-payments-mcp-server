
# Payment Instrument 4

## Structure

`PaymentInstrument4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type3Enum \| undefined`](../../doc/models/type-3-enum.md) | Optional | The type of instrument. |
| `cardNumber` | `string \| undefined` | Optional | Customer's card number.<br><br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `19` |
| `cardHolderName` | `string \| undefined` | Optional | The name on your customer's card. Required if  instruction.tokenCreation is present. However we recommend that you supply this to improve authentication rates.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `expiryDate` | [`ExpiryDate \| undefined`](../../doc/models/expiry-date.md) | Optional | Contains your customer's card or token expiry date. |
| `cvc` | `string \| undefined` | Optional | CVC is a unique set of 3 or 4 numbers on the back of the card. Our API checks to see if the CVC supplied matches the CVC held by the issuing bank.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `4`, *Pattern*: `[0-9]*$` |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | Contains the billing address information. |
| `routing` | [`Routing \| undefined`](../../doc/models/routing.md) | Optional | An object containing specific routing preferences. |
| `sessionHref` | `string \| undefined` | Optional | An http address that contains your Checkout session providing the card details. |
| `href` | `string \| undefined` | Optional | An http address that contains your link to an Access Token. |
| `cvcSessionHref` | `string \| undefined` | Optional | Href to the Checkout session providing the Card Verification Code (CVC).__Note:__ Provide a value in `cvcSessionHref` or `cvc`, never both. |
| `walletToken` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "cardNumber": "4000000000001091",
  "cardHolderName": "Sherlock Holmes",
  "cvc": "123",
  "cvcSessionHref": "https://try.access.worldpay.com/sessions/eyJrIjoxLCJkIjoiNjQxbUsw...",
  "type": "plain",
  "expiryDate": {
    "year": 20,
    "month": 244
  }
}
```

