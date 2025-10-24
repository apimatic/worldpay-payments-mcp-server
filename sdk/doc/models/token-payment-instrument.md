
# Token Payment Instrument

## Structure

`TokenPaymentInstrument`

## Inherits From

[`PaymentsPaymentInstrument`](../../doc/models/payments-payment-instrument.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | An http address that contains your link to an Access Token. |
| `cvc` | `string \| undefined` | Optional | CVC is a unique set of 3 or 4 numbers on the back of the card. Our API checks to see if the CVC supplied matches the CVC held by the issuing bank.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `4`, *Pattern*: `[0-9]*$` |
| `cvcSessionHref` | `string \| undefined` | Optional | Href to the Checkout session providing the Card Verification Code (CVC).__Note:__ Provide a value in `cvcSessionHref` or `cvc`, never both. |
| `routing` | [`Routing \| undefined`](../../doc/models/routing.md) | Optional | An object containing specific routing preferences. |

## Example (as JSON)

```json
{
  "href": "href6",
  "cvc": "123",
  "cvcSessionHref": "https://try.access.worldpay.com/sessions/eyJrIjoxLCJkIjoiNjQxbUsw...",
  "type": "token",
  "routing": {
    "preferredCardBrand": "amex"
  }
}
```

