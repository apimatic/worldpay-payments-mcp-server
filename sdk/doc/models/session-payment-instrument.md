
# Session Payment Instrument

*This model accepts additional fields of type unknown.*

## Structure

`SessionPaymentInstrument`

## Inherits From

[`PaymentsPaymentInstrument`](../../doc/models/payments-payment-instrument.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sessionHref` | `string` | Required | An http address that contains your Checkout session providing the card details. |
| `cardHolderName` | `string \| undefined` | Optional | The name on your customer's card. Required if  instruction.tokenCreation is present. However we recommend that you supply this to improve authentication rates.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | Contains the billing address information. |
| `routing` | [`Routing \| undefined`](../../doc/models/routing.md) | Optional | An object containing specific routing preferences. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "sessionHref": "sessionHref8",
  "cardHolderName": "Sherlock Holmes",
  "type": "checkout",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
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
  "routing": {
    "preferredCardBrand": "amex",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

